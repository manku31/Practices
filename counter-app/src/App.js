import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [isCounting, setIsCounting] = useState(false);
  const [count, setCount] = useState(0);

  function handleClick() {
    setIsCounting((prev) => !prev);
    setCount((prev) => prev + 1);
  }

  function handleReset() {
    setCount(0);
  }

  useEffect(() => {
    let timer;
    if (isCounting) {
      timer = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [isCounting]);

  return (
    <div className="App">
      <h1>count : {count}</h1>
      <button onClick={handleClick}>
        {isCounting ? "Click to stop" : "Click to start"}
      </button>
      <button style={{ marginLeft: 10 }} onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}

export default App;
