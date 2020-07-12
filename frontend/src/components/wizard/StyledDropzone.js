import React ,{useState} from "react";
import { useDropzone } from "react-dropzone";
import styled from "styled-components";
import axios from 'axios'
import {device} from './device'

const getColor = (props) => {
  if (props.isDragAccept) {
    return "#00E676";
  }
  if (props.isDragReject) {
    return "#FF1744";
  }
  if (props.isDragActive) {
    return "#2196F3";
  }
  return "#EEEEEE";
};
const DropContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-width: 2px;
  border-radius: 2px;
  border-color: ${(props) => getColor(props)};
  border-style: dashed;
  background-color: #FAFAFA;
  color: #BDBDBD;
  outline: none;
  transition: border 0.24s ease-in-out;
  width: 80%;
  height: 180px;
  @media ${device.mobileS} {
   width: 85%;
  height: 100px;

}@media ${device.tablet} {
   width: 85%;
  height: 130px;

}@media ${device.laptop} {
   width: 85%;
  height: 180px;

}
`;

const username = 'Emil'


function StyledDropzone(props) {
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
    acceptedFiles,
  } = useDropzone();

  const [uploadFiles,setUploadFiles]= useState([]);

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

//   setUploadFiles(acceptedFiles);

  const handleUpload = () => {
    // let formData = new FormData();    //formdata object

    // formData.append('name', 'ABC');   //append the values with key, value pair
    // formData.append('age', 20);
    
    let formData = new FormData() 
    console.log(acceptedFiles)
    acceptedFiles.map((file,index) =>{
        formData.append('user', username)
        formData.append('files', file )
    } )
    
    const config = {     
        // headers: { 'content-type': 'multipart/form-data' }
        
    }
    for (var key of formData.entries()) {
        console.log(key[0] + ', ' + key[1])
    }
    axios.post('/upload', formData, config)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });
    // console.log(data)
    // fetch('/test', {
    //     method: 'POST', // or 'PUT'
    //     body: acceptedFiles,
    //   })
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log('Success:', data);
    //   })
    //   .catch((error) => {
    //     console.error('Error:', error);
    //   });
}

  return (
    <div style={{width:"100%"}}>
      <DropContainer
        {...getRootProps({ isDragActive, isDragAccept, isDragReject })}
      >
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </DropContainer>
      <h4>Files</h4>
      <ul>{files}</ul>
      {/* <button onClick={handleUpload}>click</button> */}
   
      </div>);
}
export default StyledDropzone;