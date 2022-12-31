import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Pad from "./Pad";

const App = () => {
  const arr = [
    {
      keyCode: 81,
      key: "Q",
      sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    },
    {
      keyCode: 87,
      key: "W",
      sound: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
    },
    {
      keyCode: 69,
      key: "E",
      sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    },
    {
      keyCode: 65,
      key: "A",
      sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    },
    {
      keyCode: 83,
      key: "S",
      sound: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    },
    {
      keyCode: 68,
      key: "D",
      sound: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    },
    {
      keyCode: 90,
      key: "Z",
      sound: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    },
    {
      keyCode: 88,
      key: "X",
      sound: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
    },
    {
      keyCode: 67,
      key: "C",
      sound: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
    },
  ];

  const [activeKey, setActiveKey] = useState("");

  return (
    <div className="container">
      <div id="drum-machine">
        <h2 className="text-center">Drum Machine</h2>
        <div id="display">{activeKey}</div>
        <div className="drum-pads">
          {arr.map((clip) => (
            <Pad clip={clip} key={clip.keyCode} setActiveKey={setActiveKey} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
