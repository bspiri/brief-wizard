import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import "./NewTemplate.css";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import styled from "styled-components";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Chip from "@material-ui/core/Chip";
import Select from "@material-ui/core/Select";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import { convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import axios from "axios"

const names = [
	"Oliver Hansen",
	"Van Henry",
	"April Tucker",
	"Ralph Hubbard",
	"Omar Alexander",
	"Carlos Abbott",
	"Miriam Wagner",
	"Bradley Wilkerson",
	"Virginia Andrews",
	"Kelly Snyder",
];

const Button = styled.button`
	width: 250px;
	height: 45px;
	font-size: 1.1em;
	font-weight: 600;
	border: none;
	background: #398af7;
	color: white;
	border-radius: 5px;
	margin-right: 20px;
	margin-bottom: 50px;
	margin-left: 12%;
	@media (max-width: 600px) {
		margin-right: 0px;
		margin-bottom: 20px;
	}
`;

export default function NewTemplate() {
	const [templateName, setTemplateName] = useState();
	const [templateSlug, setTemplateSlug] = useState();
	const [templateTitle, setTemplateTitle] = useState();
	const [categoryName, setCategoryName] = useState([]);
	const [subtitleEditorState, setSubtitleEditorState] = useState(EditorState.createEmpty());
	const [contentEditorState, setContentEditorState] = useState(EditorState.createEmpty());
	const [templates, setTemplates] = useState([]);
	useEffect(() => {
		axios.get("/admins/categories")
			.then(res => {
				console.log(res.data)
				setTemplates(res.data)
			})


	}, [])


	const onChangeArea = (event) => {
		event.target.name == "templateName"
			? setTemplateName(event.target.value)
			: event.target.name == "templateSlug"
				? setTemplateSlug(event.target.value)
				: setTemplateTitle(event.target.value);
	};
	const onSubtitleEditorStateChange = (editorState) => {
		setSubtitleEditorState(editorState);
		console.log(editorState);
		console.log(draftToHtml);
	};
	const onContentEditorStateChange = (editorState) => {
		setContentEditorState(editorState);
		console.log(editorState);
	};
	const handleChange = (event) => {
		setCategoryName(event.target.value);
	};

	const handleSubmit = () => {
		fetch("/admins/templates", {
			method: "POST",
			headers: new Headers({
				"Content-Type": "application/json",
			}),
			body: JSON.stringify({
				name: templateName || "unset",
				slug: templateSlug || "unset",
				title: templateTitle || "unset",
				category: categoryName,
				subtitle: convertToRaw(subtitleEditorState.getCurrentContent()),
				content: convertToRaw(contentEditorState.getCurrentContent()),
			}),
		})
			.then((res) => res.json())
			.then((res) => {
				console.log(res);
			});
	};

	return (
		<div>
			<h1>New Brief Template</h1>
			<div className="container">
				<TextField id="outlined-basic" label="Template Name" value={templateName} variant="outlined" name="templateName" onChange={onChangeArea} />
				<Box className="marginLeft">
					<TextField id="outlined-basic" label="Template Slug" value={templateSlug} variant="outlined" name="templateSlug" onChange={onChangeArea} />
				</Box>
			</div>
			<div>
				<h2>Content</h2>
				<div className="pageCateg">
					<h3>Categories</h3>
					<Box className="marginLeft">
						<Select
							style={{ width: "66vw", padding: "18.5px 14px", border: "1px solid #d3d3d3", borderRadius: "5px", height: "3.6em" }}
							id="demo-mutiple-chip"
							multiple
							value={categoryName}
							onChange={handleChange}
							input={<Input id="select-multiple-chip" />}
							renderValue={(selected) => (
								<div>
									{selected.map((value) => (
										<Chip key={value} label={value} />
									))}
								</div>
							)}
						>
							{templates.map((el) => (
								<MenuItem key={el.name} value={el.name}>
									{el.name}
								</MenuItem>
							))}
						</Select>
					</Box>
				</div>
				<div className="pageTitle">
					<h3>Page Title</h3>
					<Box className="marginLeft">
						<TextField
							id="outlined-basic"
							label="Page Title"
							value={templateTitle}
							variant="outlined"
							name="templateTitle"
							onChange={onChangeArea}
						/>
					</Box>
				</div>
				<div className="pageSubtitle">
					<h3>Page Subtitle</h3>
					<Editor
						wrapperClassName="wrapper-style2"
						editorClassName="editor-style2"
						editorState={subtitleEditorState}
						onEditorStateChange={onSubtitleEditorStateChange}
					/>
				</div>
				<div className="pageContent">
					<h3>Page Content</h3>
					<Editor
						wrapperClassName="wrapper-style"
						editorClassName="editor-style"
						editorState={contentEditorState}
						onEditorStateChange={onContentEditorStateChange}
					/>
				</div>
				<div className="pageContent">
					<Button onClick={handleSubmit}>Create new Template</Button>
				</div>
			</div>
		</div>
	);
}
