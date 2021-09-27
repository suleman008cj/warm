import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./style.css";
import warmupApi from "../../apis/warmup";

function UserList() {
  const [userList, setUserList] = useState([]);
  const history = useHistory();

  const getUserList = async () => {
    const res = await warmupApi("users");
    setUserList(res.data);
  };

  useEffect(() => {
    getUserList();
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

export default UserList;
