import React from "react";
import "semantic-ui-css/semantic.min.css";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import SongList from "./components/SongList";

function App() {
  const songs = useSelector((state) => state.songs);
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <SongList songs={songs} />
        </div>
      </div>
    </div>
  );
}

export default App;
