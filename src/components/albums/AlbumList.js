import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import warmupApi from "../../apis/warmup";
import "./style.css";

function Albums(props) {
  const [albums, setAlbums] = useState([]);
  const history = useHistory();

  const getAlbums = async () => {
    const res = await warmupApi("albums");
    setAlbums(res.data);
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
