import React from "react";
import Card from "./components/Card";
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
          avatar={
            "https://cdn.iconscout.com/icon/free/png-256/avatar-366-456318.png"
          }
          caption={
            "Check this pic out and let me know what you think in the comments below!"
          }
        />
        <Card
          name={"Michael Jordan"}
          time={"1:23 AM"}
          avatar={
            "https://cdn.iconscout.com/icon/premium/png-512-thumb/avatar-147-116515.png"
          }
        />
        <Card time={"8:09 PM"} />
        <Card
          name={"Princess Peach"}
          time={"6:48 AM"}
          avatar={
            "https://cdn.iconscout.com/icon/free/png-512/miss-1420030-1201760.png"
          }
          caption={
            "Words truly fail me when attempting to describe this picture. How does this make you feel?"
          }
        />
      </header>
    </div>
  );
}

export default App;
