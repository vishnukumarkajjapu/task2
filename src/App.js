import { useState } from "react";
import "./App.css";
import Cal from "./components/cal";

const list = [
  {
    value: 1,
  },
  {
    value: 2,
  },
  {
    value: 3,
  },
  {
    value: "del",
  },
  {
    value: 4,
  },
  {
    value: 5,
  },
  {
    value: 6,
  },
  {
    value: "+",
  },
  {
    value: 7,
  },
  {
    value: 8,
  },
  {
    value: 9,
  },
  {
    value: "-",
  },
  {
    value: 0,
  },
  {
    value: "=",
  },
  {
    value: "/",
  },
];

function App() {
  const [cal, setcal] = useState("");
  const [val, setval] = useState(0);
  const handleClick = (value) => {
    if (value === "del") {
      setcal("");
    }
    if (value === "=" || value === "/" || value === "-" || value === "+") {
      setcal(cal + value);
    } else {
      setcal(cal + parseInt(value));
    }
  };
  return (
    <div className="grid place-content-center h-screen">
      <div className="h-auto bg-blue-600 text-white rounded">
        <div className="h-[100px] text-right px-2 py-1">{cal}</div>
        <div className="h-auto bg-black py-6">
          <div className="grid grid-cols-4 gap-2">
            {list.map((i) => {
              return <Cal data={i} handleClick={handleClick} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
