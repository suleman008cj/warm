import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./style.css";

// import getUsers from "../../actions/user";
// import { userContext } from "../warmpup/warmup";

function User() {
  // const data = useContext(userContext);
  const [userList, setUserList] = useState([]);
  const history = useHistory();

  const getUserData = async () => {
    let res;
    try {
      res = await fetch(`https://jsonplaceholder.typicode.com/users`);
      const data = await res.json();
      setUserList(data);
      return { status: "success" };
    } catch (e) {
      if (!e.response || !e.response.data) {
        return { status: "error", type: "network", message: "Network Error" };
      }
      return { status: "error", ...e.response.data };
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div className="userContainer">
      <div className="userContainer-Header ">
        <p style={{ marginLeft: "10px" }}>Warm Up Application</p>
      </div>
      <div style={{ marginTop: "20px" }}>
        {userList.length &&
          userList.map((data, index) => {
            return (
              <div
                key={data.id}
                className="userContainer-innerBox"
                onClick={() => {
                  history.push("/userdetails", { id: data.id });
                }}
              >
                <p>Name:{data.name}</p>
                <br />
                <p>User Name : {data.username}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default User;
