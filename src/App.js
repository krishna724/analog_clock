import React, { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  let a = new Date();
  const [time, setTime] = useState(a);
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="clock">
      <div
        className="hour_hand"
        style={{
          transform: `rotateZ(${
            (time.getHours() + time.getMinutes() / 60) * 30
          }deg)`
        }}
      />
      <div
        className="min_hand"
        style={{
          transform: `rotateZ(${
            (time.getMinutes() + time.getSeconds() / 60) * 6
          }deg)`
        }}
      />
      <div
        className="sec_hand"
        style={{
          transform: `rotateZ(${time.getSeconds() * 6}deg)`
        }}
      />
      <span className="twelve">&#x216B;</span>
      <span className="six">&#8549;</span>
      <span className="three">&#8546;</span>
      <span className="nine">&#8552;</span>
    </div>
  );
}
