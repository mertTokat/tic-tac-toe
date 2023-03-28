import React, { useState } from "react";

export default function Grid(props){
  const [winner, setWinner] = useState("");

  const clickHandler = (event) => {
    
    if(props.turn === "F" || props.turn === "S"){
      ; // don't do anything, the game's finished
    }
    else{
      
      let row = parseInt(event.target.className[0]);
      let column = parseInt(event.target.className[1]);

      if(props.cells[row][column] !== ""){
        return;
      }
      
      const newCells = [...props.cells];
      newCells[row][column] = props.turn;
      props.setCells(newCells);
      // you're here
      if(props.cells[row][0] === props.cells[row][1] && props.cells[row][1] === props.cells[row][2]){
        console.log(props.turn + " wins!");
        setWinner(props.turn);
        props.setTurn("F");
        return;
      }
      else if(props.cells[0][column] === props.cells[1][column] && props.cells[1][column] === props.cells[2][column]){
        console.log(props.turn + " wins!");
        setWinner(props.turn);
        props.setTurn("F");
        return;
      }
      else if(row === column && props.cells[0][0] === props.cells[1][1] && props.cells[1][1] === props.cells[2][2]){
        console.log(props.turn + " wins!");
        setWinner(props.turn);
        props.setTurn("F");
        return;
      }
      else{
        if(props.turn === "X"){
          props.setTurn("O");
        }
        else if(props.turn === "O"){
          props.setTurn("X");
        }
      }

    }

  } // end of click handler
    
  const startButtonHandler = (event) => {
    if(props.turn === "S"){
      props.setTurn("X");
    }
    else{
      props.setTurn("X");
      props.setCells([["","",""],["","",""],["","",""]]);
      setWinner("");
    }
  }
    
    return(
      <div className="wrapper">
          <h1>Tic-Tac-Toe</h1>
        <div className="grid">
          {
            props.cells.map((i, iNum) => {
              return (
                <React.Fragment key={iNum}>
                  <button key={3*iNum} className={iNum + "0"} onClick={clickHandler}>{i[0]}</button>
                  <button key={3*iNum + 1} className={iNum + "1"} onClick={clickHandler}>{i[1]}</button>
                  <button key={3*iNum + 2} className={iNum + "2"} onClick={clickHandler}>{i[2]}</button>
                </React.Fragment>
              )
            })
          }
          
        </div>
        <button className="start-button" onClick={startButtonHandler}>{props.turn === "S" ? "Start" : "Reset"}</button>
        <span className="winner">{winner !== "" && (winner + " wins!")}</span>
      </div>
    )
  };

