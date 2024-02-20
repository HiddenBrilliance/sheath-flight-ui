import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MyFlightInformation from "./Components/MyFlightInformation/MyFlightInformation";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <MyFlightInformation></MyFlightInformation>
      </div>
    </>
  );
}

export default App;
