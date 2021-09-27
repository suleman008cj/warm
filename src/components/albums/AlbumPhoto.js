import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import "./style.css";
import warmupApi from "../../apis/warmup";

function AlbumPhoto(props) {
  const [albums, setAlbums] = useState([]);
  const history = useHistory();

  const getAlbumPhotos = async () => {
    const res = await warmupApi(`albums/${props.location.state.id}/photos`);
    setAlbums(res.data);
  };

  useEffect(() => {
    getAlbumPhotos();
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
            <div key={data.id}>
              <p
                style={{ marginLeft: "10px" }}
                onClick={() => history.push("/photos", { id: data.id })}
              >
                {`Title : ${data.title}`}
                <br />
                {`Album Id : ${data.albumId}`}
              </p>
              <img src={data.thumbnailUrl} />
            </div>
          );
        })}
    </div>
  );
}

export default AlbumPhoto;
