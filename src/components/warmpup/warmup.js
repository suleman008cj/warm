import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./style.css";

import getUsers from "../../actions/user";
import User from "../user/user";

export const userContext = React.createContext([]);
function Warmup() {
  const history = useHistory();
  const [data, setData] = useState([]);

  // const getUserData = async () => {
  //   const data = await getUsers();
  //   setData(data);
  // };

  // useEffect(() => {
  //   getUserData();
  // }, []);

  const handleUser = () => {
    // <userContext.Provider value={{ data }}>
    //   <User />
    // </userContext.Provider>;
    history.push("/user");
  };
  return (
    <div className="MainContainer">
      <div className="MainContainer-Header ">
        <p style={{ marginLeft: "10px" }}>Warm Up Application</p>
      </div>
      <div className="MainContainer-innerBox ">
        <p
          style={{ fontWeight: "bold", alignItems: "center" }}
          onClick={handleUser}
        >
          Select User To Proceed
        </p>
      </div>
    </div>
  );
}

export default Warmup;
