import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  // State for To store time
  const [time, setTime] = useState(0);

  // State for to check stopwatch running or not
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interValId;

    if (isRunning) {
      interValId = setInterval(() => setTime(time + 1), 10);
    }

    return () => clearInterval(interValId);
  }, [isRunning, time]);

  // Hours calculation
  const hours = Math.floor(time / 360000);

  // Minutes calculation
  const minutes = Math.floor((time % 360000) / 6000);

  // Seconds calculation
  const seconds = Math.floor((time % 6000) / 100);

  // Milliseconds calculation
  const milliseconds = time % 100;


  // Hnadle for start and stop timer
  const handleStartStopClick = () => {
    setIsRunning((prev) => !prev);
  };

  // Handle for reset timer
  const handleReset = () => {
    setTime(0);
  };

  return (
    <div className="App">
      <h1>Stopwatch</h1>
      <p>
        Time: {minutes.toString()}:
        {seconds.toString().padStart(2, 0)}
      </p>
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
