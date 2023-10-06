import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import {  Link } from "react-router-dom";

function Profile() {
  let { id } = useParams();
  const [username, setUsername] = useState("");
  const [listOfPosts, setListOfposts] = useState([]);
  const useraccessToken = localStorage.getItem("useraccessToken");
  const [Useracc, setUseracc] = useState()

  let navigate = useNavigate();

  useEffect( () => {
    axios
      .get(`${process.env.REACT_APP_GET_INFO}/${id}`, {
        headers: {
          serveraccessToken: localStorage.getItem("serveraccessToken"),
        },
      })
      .then((response) => {
        setUsername(response.data);
      });
    axios
      .get(`${process.env.REACT_APP_PROFILE_PAGE}/${id}`, {
        headers: {
          serveraccessToken: localStorage.getItem("serveraccessToken"),
        },
      })
      .then((response) => {
        setListOfposts(response.data);
      });
      if (useraccessToken != null) {
         axios
          .get(process.env.REACT_APP_LOGGED_IN, {
            headers: { useraccessToken: useraccessToken },
          })
          .then((response) => {
            if (!response.data.error) {
              if(response.data.id == id) {
                setUseracc(true)
              }
            } 
          });
      }
  }, []);
  return (
    <div>
      <div className="profilePageContainer">
        <div className="info">
          <h1> Username: {username.username} </h1>
          <p>{username.bio}</p>
          <img src={`https://server.fillyourfreetime.com/${username.pfp}`}style={{ width: 200, height: 200 }}/>
          {Useracc? <Link to="/editprofile" className="button2">edit profile</Link> : <div></div>}
        </div>
      </div>
      <div className="listOfPosts">
        {listOfPosts.reverse().map((value, key) => {
          return (
            <div
            className={value.image ? "postImage" : "post"}
              onClick={() => {
                navigate(`/post/${value.id}`);
              }}
            >
              <div className="card-header"> {value.posttitle} </div>
              <div className="body">{value.posttext}</div>
              {value.image ? (
                <img src={"server.fillyourfreetime/"}style={{ width: 400, height: 200 }}/>
              ) : (
                <div></div>
              )}
              <div className="footer">{value.username}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Profile;
