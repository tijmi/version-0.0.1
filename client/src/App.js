//import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
require('dotenv').config()

function App() {
  useEffect (() => {
    console.log(process.env.REACT_APP_GET_ALL_POSTS)
    axios.get(process.env.REACT_APP_GET_ALL_POSTS).then((response) => {
      console.log(response);
    })
  }, []) // weet ik veel, ik gebruik nog steeds ff die pedro gast om me te helpen een beetje ooh oof maakt nie uit
  return <div className="App"></div>;

  // voor uploaden van afbeeldingen
  // const [image, setImage] = useState("");
  // function handleImage(e) {
  //   console.log(e.target.files);
  //   setImage(e.target.files[0]);
  // }
  // function handleApi() {
  //   const formData = new FormData();
  //   formData.append("image", image);
  //   formData.append("pfp", "yes");
  //   const filetype = image.name.split('.').pop();

  //   formData.append("filetype", filetype )
  //   console.log('hello')
  //   console.log(image)
  //   console.log(formData)
  //   console.log(process.env.REACT_APP_EDIT_USERPROFILE)
  //   axios
  //     .post(`${process.env.REACT_APP_EDIT_USERPROFILE}/1`, formData, {  
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //       },
  //     })
  //     .then((res) => {
  //       console.log(res);
  //     });
  // }
  // return (
  //   <div>
  //     <input type="file" name="file" onChange={handleImage} />
  //     <button onClick={handleApi}>submit</button>
  //   </div>
  // );
}

export default App;
