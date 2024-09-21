import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import { useRef } from "react";

function App() {
  // State for To store time
  const [time, setTime] = useState(0);

  // State for to check stopwatch running or not
  const [isRunning, setIsRunning] = useState(false);
  const timerId = useRef(null);

  useEffect(() => {
    if (isRunning) {
      const id = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
      timerId.current = id;
      return () => clearInterval(id);
    } else {
      clearInterval(timerId.current);
      timerId.current = null;
    }
  }, [isRunning]);

  const formatTime = () => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  // Hnadle for start and stop timer
  const handleStartStopClick = () => {
    setIsRunning((prev) => !prev);
  };

  // Handle for reset timer
  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  return (
    <div className="App">
      <h1>Stopwatch</h1>
      <p>Time: {formatTime()}</p>
      <div className="btn">
        <button onClick={handleStartStopClick}>
          {isRunning ? "Stop" : "Start"}
        </button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
