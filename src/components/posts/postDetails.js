import React, { useEffect, useState } from "react";
import "./style.css";

function PostDetails(props) {
  const [postData, setPostData] = useState({});
  const [comments, setComments] = useState([]);

  const getPost = async () => {
    let res;
    try {
      res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${props.location.state.id}`
      );
      const data = await res.json();
      setPostData(data);
      return { status: "success" };
    } catch (e) {
      if (!e.response || !e.response.data) {
        return { status: "error", type: "network", message: "Network Error" };
      }
      return { status: "error", ...e.response.data };
    }
  };

  const getComments = async () => {
    let res;
    try {
      res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${props.location.state.id}/comments`
      );
      const data = await res.json();
      setComments(data);
      return { status: "success" };
    } catch (e) {
      if (!e.response || !e.response.data) {
        return { status: "error", type: "network", message: "Network Error" };
      }
      return { status: "error", ...e.response.data };
    }
  };

  useEffect(() => {
    getPost();
    getComments();
  }, []);

  return (
    <div className="postContainer">
      <div className="postContainer-Header ">
        <p style={{ marginLeft: "10px" }}>Warm Up Application</p>

        <p style={{ marginLeft: "10px" }}>Post Details</p>
      </div>
      <div className="postContainer-innerBox">
        <p style={{ marginLeft: "10px" }}>
          {postData && postData.title
            ? `Post Name : ${postData.title}`
            : "Loading..."}
        </p>
      </div>
      {comments.length &&
        comments.map((data, index) => {
          return (
            <div key={data.id} className="postContainer-innerBox">
              <p style={{ marginLeft: "10px" }}>{data.body}</p>
            </div>
          );
        })}
    </div>
  );
}

export default PostDetails;
