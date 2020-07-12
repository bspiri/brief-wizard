import React, { useState } from "react";
import AdminNavbar from "../home/AdminNavbar";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import "./NewCategory.css";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import styled from "styled-components";
import { convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";

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

export default function NewCategory() {
	const [categoryName, setCategoryName] = useState();
	const [categorySlug, setCategorySlug] = useState();
	const [categoryTitle, setCategoryTitle] = useState();
	const [subtitleEditorState, setSubtitleEditorState] = useState(EditorState.createEmpty());
	const [contentEditorState, setContentEditorState] = useState(EditorState.createEmpty());

	const onSubtitleEditorStateChange = (editorState) => {
		setSubtitleEditorState(editorState);
		console.log(subtitleEditorState)
	};
	const onContentEditorStateChange = (editorState) => {
		setContentEditorState(editorState);
		console.log(contentEditorState)
	};


	const submitCategory = () => {
		fetch("/admins/categories", {
			method: "POST",
			headers: new Headers({
				"Content-Type": "application/json",
			}),
			body: JSON.stringify({
				name: categoryName,
				slug: categorySlug,
				title: categoryTitle,
				subtitle: convertToRaw(subtitleEditorState.getCurrentContent()),
				content: convertToRaw(contentEditorState.getCurrentContent()),
			}),
		}).then((res) => res.json());

		// console.log(typeof subtitleEditorState);
		console.log(JSON.stringify(draftToHtml(convertToRaw(subtitleEditorState.getCurrentContent()))));
		console.log(JSON.stringify(draftToHtml(convertToRaw(contentEditorState.getCurrentContent()))));
	};

	return (
		<div>
			<AdminNavbar />
			<h1>New Category</h1>
			<div className="container">
				<TextField id="outlined-basic" label="Category Name" onChange={(e) => setCategoryName(e.target.value)} value={categoryName} variant="outlined" />
				<Box className="marginLeft">
					<TextField id="outlined-basic" label="Category Slug" onChange={(e) => setCategorySlug(e.target.value)} value={categorySlug} variant="outlined" />
				</Box>
			</div>
			<div>
				<h2>Page Content</h2>
				<div className="pageTitle">
					<h3>Page Title</h3>
					<Box className="marginLeft">
						<TextField id="outlined-basic" label="Page Title" onChange={(e) => setCategoryTitle(e.target.value)} value={categoryTitle} variant="outlined" />
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
					<Button onClick={submitCategory}>Create new Category</Button>
				</div>
			</div>
		</div>
	);
}
