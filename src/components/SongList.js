import React from "react";

const SongList = ({ songs }) => {
  return (
    <div className="ui divided list">
      {songs.map((song) => {
        return (
          <div className="item" key={song.title}>
            <div className="right floated content">
              <button className="ui button primary">Select</button>
            </div>
            <div className="content">{song.title}</div>
          </div>
        );
      })}
    </div>
  );
};

export default SongList;
