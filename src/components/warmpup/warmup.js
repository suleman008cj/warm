import React from "react";
import { useHistory } from "react-router-dom";
import "./style.css";

export const userContext = React.createContext([]);
function Warmup() {
  const history = useHistory();

  const handleUser = () => {
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
