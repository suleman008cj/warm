import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import "./style.css";
import warmupApi from "../../apis/warmup";

function Post(props) {
  const [posts, setPosts] = useState([]);
  const history = useHistory();

  const getPosts = async () => {
    const res = await warmupApi("posts");
    setPosts(res.data);
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
