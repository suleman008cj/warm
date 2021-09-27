import React, { useEffect, useState } from "react";
import "./style.css";
import warmupApi from "../../apis/warmup";

function PostDetails(props) {
  const [postData, setPostData] = useState({});
  const [comments, setComments] = useState([]);

  const getPost = async () => {
    const res = await warmupApi(`posts/${props.location.state.id}`);
    setPostData(res.data);
  };

  const getComments = async () => {
    const res = await warmupApi(`posts/${props.location.state.id}/comments`);
    setComments(res.data);
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
