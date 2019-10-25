import React from "react";
import Card from "./components/Card";
import { avatarList, captionList, imageList } from "./data/CardData";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-text">
          <h2>React Social Card Example</h2>
          <p>
            A social card mockup with static placeholders for dynamic content.
          </p>
        </div>
        <Card
          name={"Orange Julius"}
          avatar={avatarList[0]}
          caption={captionList[0]}
          postImage={imageList[1]}
        />
        <Card
          name={"Michael Jordan"}
          time={"1:23 AM"}
          avatar={avatarList[1]}
          postImage={imageList[3]}
        />
        <Card time={"8:09 PM"} caption={captionList[2]} />
        <Card
          name={"Princess Peach"}
          time={"6:48 AM"}
          avatar={avatarList[2]}
          postImage={imageList[2]}
        />
      </header>
    </div>
  );
}

export default App;
