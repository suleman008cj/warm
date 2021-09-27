import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import "./style.css";

function Post(props) {
  const [posts, setPosts] = useState([]);
  const history = useHistory();

  const getPosts = async () => {
    let res;
    try {
      res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
      const data = await res.json();
      setPosts(data);
      return { status: "success" };
    } catch (e) {
      if (!e.response || !e.response.data) {
        return { status: "error", type: "network", message: "Network Error" };
      }
      return { status: "error", ...e.response.data };
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="postContainer">
      <div className="postContainer-Header ">
        <p style={{ marginLeft: "10px" }}>Warm Up Application</p>

        <p style={{ marginLeft: "10px" }}>Post</p>
      </div>
      {posts.length &&
        posts.map((data, index) => {
          return (
            <div key={data.id} className="postContainer-innerBox">
              <p
                style={{ marginLeft: "10px" }}
                onClick={() => history.push("/postDetails", { id: data.id })}
              >
                {data.title}
              </p>
            </div>
          );
        })}
    </div>
  );
}

export default Post;
