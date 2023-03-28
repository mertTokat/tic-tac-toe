import React from "react";
import Grid from "./Grid";
import {useState} from "react";

function App() {
  const [cells, setCells] = useState([["","",""], ["","",""], ["","",""]]);
  const [turn, setTurn] = useState("S"); // X, O, or F (for finished), or S (start)

  return (
    <div className="App">
      <Grid cells={cells} turn={turn} setTurn={setTurn} setCells={setCells}/>
    </div>
  );
}

export default App;
