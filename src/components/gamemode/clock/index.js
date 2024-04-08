import React, { useState, useEffect } from "react";
import "./style.css";
const Clock = ({ time, onCountDown, onStop }) => {
  // const [time, setTime] = useState(initialSecs);

  // useEffect(() => {
  //   if (time > 0) {
  //     setTimeout(() => {
  //       const newTime = time - 1;
  //       setTime(newTime);
  //     }, 1000);
  //   } else {
  //     onStop();
  //     setTime(initialSecs);
  //   }
  // }, [time]);

  useEffect(() => {
    if (time > 0) {
      setTimeout(() => {
        onCountDown && onCountDown(time - 1);
      }, 1000);
    } else {
      onStop && onStop();
    }
  }, [time]);

  const minutes = Math.floor(time / 60);
  const seconds = time - minutes * 60;

  return (
    <div className="clock">
      {minutes.toString().padStart(2, "0")}:
      {seconds.toString().padStart(2, "0")}
    </div>
  );
};

export default Clock;
