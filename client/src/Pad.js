import React, { useCallback, useEffect, useRef } from "react";

const Pad = ({ clip, setActiveKey }) => {
  const audio = useRef();
  const playSound = useCallback(
    (id) => {
      const audio2 = document.getElementById(id);
      audio2.play();
      setActiveKey(id);
    },
    [setActiveKey]
  );

  const handleKeyPress = useCallback(() => {
    playSound(clip.key);
  }, [playSound, clip.key]);

  useEffect(() => {
    document.addEventListener("keydown", (event) => {
      if (event.key.toUpperCase() === clip.key) {
        handleKeyPress();
      }
    });
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [clip.key, handleKeyPress]);

  return (
    <>
      <div
        className="drum-pad btn btn-secondary p-4 m-3"
        key={clip.key}
        id={`${Math.floor(Math.random() * 50)}`}
        onClick={(event) => {
          return event.target.innerText === clip.key ? playSound(clip.key) : "";
        }}
      >
        {clip.key}
        <audio src={clip.sound} id={clip.key} className="clip" ref={audio} />
      </div>
    </>
  );
};

export default Pad;
