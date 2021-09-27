import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import "./style.css";

function Albums(props) {
  const [albums, setAlbums] = useState([]);
  const history = useHistory();

  const getAlbums = async () => {
    let res;
    try {
      res = await fetch(`https://jsonplaceholder.typicode.com/albums`);
      const data = await res.json();
      setAlbums(data);
      return { status: "success" };
    } catch (e) {
      if (!e.response || !e.response.data) {
        return { status: "error", type: "network", message: "Network Error" };
      }
      return { status: "error", ...e.response.data };
    }
  };

  useEffect(() => {
    getAlbums();
  }, []);

  return (
    <div className="albumContainer">
      <div className="albumContainer-Header ">
        <p style={{ marginLeft: "10px" }}>Warm Up Application</p>

        <p style={{ marginLeft: "10px" }}>Albums</p>
      </div>
      {albums.length &&
        albums.map((data, index) => {
          return (
            <div key={data.id} className="albumContainer-innerBox">
              <p
                style={{ marginLeft: "10px" }}
                onClick={() => history.push("/photos", { id: data.id })}
              >
                {data.title}
              </p>
            </div>
          );
        })}
    </div>
  );
}

export default Albums;
