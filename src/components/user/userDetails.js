import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import "./style.css";

function UserDetails(props) {
  const [user, setUser] = useState();
  const history = useHistory();

  const getUser = async () => {
    let res;
    try {
      res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${props.location.state.id}`
      );
      const data = await res.json();
      setUser(data);
      return { status: "success" };
    } catch (e) {
      if (!e.response || !e.response.data) {
        return { status: "error", type: "network", message: "Network Error" };
      }
      return { status: "error", ...e.response.data };
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="userContainer">
      <div className="userContainer-Header ">
        <p style={{ marginLeft: "10px" }}>Warm Up Application</p>

        <p style={{ marginLeft: "10px" }}>User</p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div className="userContainer-DetailsBox">
          {user && (
            <div>
              <p>Name:{user.name}</p>

              <p>User Name : {user.username}</p>

              <p>Email : {user.email}</p>

              <p>Address : {user.address.street}</p>
              <p>Phone : {user.phone}</p>
              <p>Website : {user.website}</p>
            </div>
          )}
        </div>
        <div>
          <div className="userContainer-PostBox">
            <p
              style={{ margin: "20px" }}
              onClick={() =>
                history.push("/posts", { id: props.location.state.id })
              }
            >
              {" "}
              Post
            </p>
          </div>
          <div className="userContainer-PostBox">
            <p
              style={{ margin: "20px" }}
              onClick={() => history.push("/albums")}
            >
              Albums
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
