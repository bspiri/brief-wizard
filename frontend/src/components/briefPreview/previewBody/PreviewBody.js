import React from "react";
import styled from "styled-components";
import TryButton from "../../briefTemplate/briefBody/TryButton";
import details from "./deatails/form"
import TextField from '@material-ui/core/TextField';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faFile } from "@fortawesome/free-solid-svg-icons"
import { StickySide } from "../../briefTemplate/briefBody/BriefBody"
import { Title2 } from "../../briefTemplate/briefBody/BriefPreview"
import SaveButton from "../previewBody/SaveButton";

// import axios from "axios"



const PreviewWrapper = styled.div`
    border: solid 1px #dfe0e5;
    height: auto;
    width: 55vw;
    padding: 5px 65px 65px;
    border-radius: 8px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    @media(max-width : 1090px){
        padding: 5px 45px 45px;
    };
    @media(max-width : 800px){
        padding: 5px 25px 25px;
    };
    @media(max-width : 600px){
        width: 80vw;
        padding: 10px;
       
    };
`;


const PreviewCont = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: ${props => props.leaf === "yes" ? "center" : "space-between"};
    align-items: flex-start;
    margin: 1vw 7vw;
    @media(max-width: 600px){
        flex-direction: column-reverse;
        justify-content: flex-start;
    };
`;
const QuestionH3 = styled.h3`
    color: #868a9c;
    font-weight:400;
    margin: 19px 0px;
`;
const ChangeAnsButton = styled.button`
    border: none;
    text-decoration: underline;
    background: inherit;
    margin-top:2vh;
    padding: 6px 0px;
    outline: none;
    color:#868a9c;
`;
const SaveAnsButton = styled.button`
    border: none;
    text-decoration: underline;
    background: inherit;
    margin-top:2vh;
    outline: none;
    color:#398af7;

    padding: 6px 0px;
    margin-left: 10px;

`;
const Label = styled.label`
    display:flex;
    align-items:center;
    border: 1px solid #dfe0e5;
    border-radius: 5px;
    height: 7vh;
    font-size: 1.3em;
    width: max-content;
    padding-left: 10px;
    padding-right: 10px;
    text-align:left;
    color:#398af7;
    margin-right: 20px;
    margin-bottom:10px;
`;
const Button = styled.button`
    border: 2px solid #398af7;
    background:${props => props.expand === "true" ? 'white' : '#398af7'}; 
    color: ${props => props.expand === "true" ? '#398af7' : 'white'};
    border-radius: 5px;
    height: 7vh;
    font-size: 1.3em;
    font-weight: 800;
    width: max-content;
    padding: 5px 55px;
    padding-left: 10px;
    text-align:left;
    outline: none;
    margin-right:5px;
    margin-bottom: ${props => props.expand === "true" ? '5px' : '0px'};
    
`;
const FormDiv = styled.div`
    display:grid;
    grid-template-columns: repeat(2, 25vw [col-start]);
    justify-content: row;
    @media(max-width : 900px){
        grid-template-columns: repeat(1, 35vw [col-start]);
    };
    @media(max-width : 600px){
        width: 30vw;
    };

`;
// const InputUpload = styled.input`
//     border: 1px solid #dfe0e5; 
//     border-radius: 5px;
//     height: 3vh;
//     font-size: 1em;
//     width: max-content;
//     padding-right: 10px;
//     text-align:left;
//     color:#398af7;
//     margin-right: 20px;
//     margin-bottom:10px;
//     outline: none;
// `;
const P = styled.p`
  display:flex;
  align-items: center;
  margin: 16px 0px;
`;
const ContainerUpload = styled.div`
    position: relative;
    overflow: hidden;
    display: inline-block;
`;
const ButtonUpload = styled.button`
    border: 2px solid #398af7;
    color: #398af7;
    background-color: white;
    padding: 8px 20px;
    border-radius: 5px;
    font-size: 20px;
    font-weight: bold;
`;
const Side = styled.div`
position: relative;
left: 77vw;
@media (max-width: 600px){
    left:7vw;
    
};
`;



class PreviewBody extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: details,  // API call 
            expandOne: false,
            expandMulti: false,
            isSelected: "",
            expandUpload: false,
            files: [],

        }

    }
    componentDidMount() {
        if (this.props.leafPage === "leaf") {
            const data = JSON.parse(localStorage.getItem("state"))
            this.setState({ data: data })


            // axios.get('/brieftemplates/get')
            //     .then(res => {
            //         console.log(res.data)
            //         this.setState({ data: data })

            //     })



        }

    }

    postData = (e) => {

        // console.log("submit")
        // e.preventDefault()
        // localStorage.setItem("state", JSON.stringify(this.state.data))
        fetch("/brieftemplates/post", {
            method: "POST",
            headers: new Headers({
                "Content-Type": "application/json"
            }),
            body: JSON.stringify({
                brief: this.state.data
            })
        }).then(res => res.json()).then(res => {
            console.log(res)
        })

    }





    // local storage
    // handleSubmit = (e) => {
    //     e.preventDefault()
    //     localStorage.setItem("state", JSON.stringify(this.state.data))

    // }

    // change state for the form 
    handleChange = (value, id) => {
        let newState = { ...this.state };
        newState.data[id - 1].answer = value;
        this.setState(newState);
    }

    // change state for the button/one choice
    handleChangeAnswerOne = () => {
        this.setState({ expandOne: !this.state.expandOne })
    }

    // change state for the checkbox/multiple choice
    handleChangeAnswerMulti = () => {
        this.setState({ expandMulti: !this.state.expandMulti })
    }

    handleChangeAnswerUpload = () => {
        this.setState({ expandUpload: !this.state.expandUpload })
    }

    handleSaveAnswerMulti = () => {
        let newState = { ...this.state }
        newState.data.forEach(an => { if (an.type === "multiple checkbox") { an.answer = an.options.filter(ans => ans.isChecked === true) } })
        console.log(newState)
        this.setState(newState)
        this.setState({ expandMulti: !this.state.expandMulti })
    }
    handleSaveAnswerOne = () => {
        let newState = { ...this.state }
        newState.data.forEach(an => { if (an.type === "button") { an.answer = this.state.isSelected } })
        this.setState(newState)
        this.setState({ expandOne: !this.state.expandOne })
    }
    handleSaveAnswerUpload = () => {
        let newState = { ...this.state }
        newState.data.forEach(an => { if (an.type === "upload") { an.answer = this.state.files } })
        this.setState(newState)
        this.setState({ expandUpload: !this.state.expandUpload })
    }

    handleDeleteFileExpand = (event) => {
        let newState = [...this.state.files]
        let count;
        newState.forEach((el, index) => { if (el.name === event.target.value) { return count = index } })
        newState.splice(count, 1)
        this.setState({ files: newState })
    }
    handleDeleteFile = (event) => {
        let newState = [...this.state.data]
        let count;
        console.log(newState)
        newState.forEach(el => {
            if (el.type === "upload") {
                el.answer.forEach((e, index) => { if (e.name === event.target.value) { return count = index } })
                el.answer.splice(count, 1)
            }
        })
        this.setState({ data: newState })
    }
    handleFormSubmit = formSubmitEvent => {
        formSubmitEvent.preventDefault();

        // for (const checkbox of this.selectedCheckboxes) {
        //   console.log(checkbox, 'is selected.');
        // }
    }

    handleInputChange = (event) => {
        let newState = { ...this.state }
        newState.data.forEach(op => { if (op.type === "multiple checkbox") { op.options.forEach(opt => { if (opt.value === event.target.value) opt.isChecked = event.target.checked }) } })
        this.setState(newState)
    }

    handleInputChangeOne = (event) => {
        this.setState({ isSelected: event.target.value })
    }
    handleInputUpload = (event) => {
        var filesArr = Array.prototype.slice.call(event.target.files);
        this.setState({ files: [...this.state.files, ...filesArr] });
    }
    //props to send to the Save button for the Link router
    propsToSend = {
        url: this.props.url,
        history: this.props.history
    }

    render() {

        return (
            <div>

                {/* <Button type="submit" value="Submit" onClick={(e) => this.handleSubmit(e)}>Submit</Button> */}
                {this.props.leafPage === "leaf" ? null : <Side>
                    <SaveButton data={this.postData} {...this.propsToSend} />
                </Side>}
                <PreviewCont leaf={this.props.leafPage === "leaf" && "yes"}>

                    <PreviewWrapper  >
                        <Title2>Acme LTD Marketing Brief</Title2>
                        {this.state.data.map(el => {
                            switch (el.type) {

                                //  Form  //
                                case "text":
                                    return (<div>
                                        <QuestionH3>{el.title}</QuestionH3>

                                        {/* leafPage  */}

                                        {this.props.leafPage === "leaf" ? (<h3>{el.answer}</h3>) :
                                            (<form>
                                                <TextField multiline variant="outlined" id={el.id} value={el.answer} onChange={e => this.handleChange(e.target.value, e.target.id)} style={{ width: "100%", border: "none" }} inputProps={{ style: { fontSize: 18, fontWeight: 800 } }} />
                                            </form>)}

                                    </div>);

                                //  One choice // 
                                case "button":
                                    return !this.state.expandOne ? (<div>
                                        <QuestionH3>{el.title}</QuestionH3>
                                        <Button >{el.answer}</Button> <br />

                                        {/* leafPage  */}

                                        {this.props.leafPage === "leaf" ? null : <ChangeAnsButton onClick={this.handleChangeAnswerOne}>Change answer</ChangeAnsButton>}
                                    </div>) : (<div>
                                        <QuestionH3>{el.title}</QuestionH3>
                                        {el.options.map(e => <Button onClick={this.handleInputChangeOne} value={e} expand={this.state.isSelected === e ? "false" : "true"} >{e}</Button>)}
                                        <br />
                                        <ChangeAnsButton onClick={this.handleChangeAnswerOne}>Cancel</ChangeAnsButton>
                                        <SaveAnsButton onClick={this.handleSaveAnswerOne} type="submit">Save</SaveAnsButton>
                                    </div>)

                                // Multiple choice  // 
                                case "multiple checkbox":
                                    return !this.state.expandMulti ? (
                                        <div>
                                            <QuestionH3>{el.title}</QuestionH3>
                                            <FormDiv>
                                                {el.answer.map(e => <Label><input key={e.id} type="checkbox" name={e.value} checked={e.isChecked} />{e.value}</Label>)}
                                            </FormDiv>

                                            {/* leafPage  */}

                                            {this.props.leafPage === "leaf" ? null : <ChangeAnsButton onClick={this.handleChangeAnswerMulti}>Change answer</ChangeAnsButton>}
                                        </div>) : (
                                            <div>
                                                <QuestionH3>{el.title}</QuestionH3>
                                                <form onSubmit={this.handleFormSubmit}>
                                                    <FormDiv>
                                                        {el.options.map(e => <Label><input key={e.id} type="checkbox" checked={e.isChecked} onChange={this.handleInputChange} value={e.value} />{e.value}</Label>)}
                                                    </FormDiv>
                                                    <ChangeAnsButton onClick={this.handleChangeAnswerMulti}>Cancel</ChangeAnsButton>
                                                    <SaveAnsButton onClick={this.handleSaveAnswerMulti} type="submit">Save</SaveAnsButton>
                                                </form>

                                            </div>
                                        )
                                case "upload":
                                    return !this.state.expandUpload ? (
                                        <div>
                                            <QuestionH3>{el.title}</QuestionH3>
                                            {el.answer.map(e => <P> <FontAwesomeIcon icon={faFile} size="2x" style={{ color: "#F8C471", marginRight: "13px" }} /> {e.name} <FontAwesomeIcon icon={faTimes} size="lg" style={{ color: "#868a9c", marginLeft: "13px" }} value={e.name} onClick={this.props.leafPage === "leaf" ? null : this.handleDeleteFile} /></P>)}

                                            {/* leafPage  */}

                                            {this.props.leafPage === "leaf" ? null : <ChangeAnsButton onClick={this.handleChangeAnswerUpload}>Change answer</ChangeAnsButton>}
                                        </div>
                                    ) : (<div>
                                        <QuestionH3>{el.title}</QuestionH3>
                                        {this.state.files.map(e => <p> <FontAwesomeIcon icon={faFile} size="2x" style={{ color: "#F5B041", marginRight: "13px" }} /> {e.name} <FontAwesomeIcon icon={faTimes} size="lg" style={{ color: "#868a9c", marginLeft: "13px" }} value={e.name} onClick={this.handleDeleteFileExpand} /></p>)}
                                        <ContainerUpload>
                                            <ButtonUpload>Upload file</ButtonUpload>
                                            <input type="file" id="file" onChange={this.handleInputUpload} style={{ fontSize: "100px", position: " absolute", left: 0, top: 0, opacity: 0 }} />
                                        </ContainerUpload>
                                        <br />
                                        <ChangeAnsButton onClick={this.handleChangeAnswerUpload}>Cancel</ChangeAnsButton>
                                        <SaveAnsButton onClick={this.handleSaveAnswerUpload} type="submit">Save</SaveAnsButton>
                                    </div>)
                                default:
                                    return console.log("nothing to display")
                            }
                        })}
                    </PreviewWrapper>


                    <StickySide preview style={{ display: this.props.leafPage === "leaf" && "none" }}>
                        <TryButton try="try" first="Free Forever Plan" name="Try SuperOkay" title="Try SuperOkay to create briefs, proposals, and estimates with ease" />
                    </StickySide>

                </PreviewCont>
            </div>
        )
    }

}

export default PreviewBody

