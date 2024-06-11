import { useState } from "react";
import Square from "./Square";

function Board() {
const [state ,setState] = useState(Array(9).fill(null))
const [isXTurn, setisXTurn] = useState(true)

console.log("State", state);

  const checkWinner = () => {
    const winnerLogic = [
      [0,3,6],
      [1,4,7],
      [2,5,8], 
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,4,8],
      [2,4,6]
    ];

    for (let logic of winnerLogic) {
      const [a,b,c] = logic;
      if(state[a] !== null && state[a]=== state[b] && state[a] === state[c]){
        return state[a];
      }
    }
    return false; 
  };

  const isWinner = checkWinner();

  const handleClick= (index) => {
    if (state[index] !== null){
      return;
    }
    const copyState = [...state];
    copyState[index] = isXTurn ? 'X' : 'O'
    setState(copyState)
    setisXTurn(!isXTurn)
  }

  const handlePlay = () => {
    setState(Array(9).fill(null))
  }

  return (
    
    <div className="board-container">
     { isWinner ? (
       <> {isWinner} won the game <button style={{backgroundColor: "pink", borderRadius: "20px"}}  onClick={handlePlay}>Play Again</button> </>
      ) : (
      <>
      <h3 style={{fontFamily: "monospace", color: "yellow"}}>Player {isXTurn ? "X" : "O"} please make your move</h3>
       <div className="board-row">
      <Square border={"0 3px 3px 0"} onClick={()=> handleClick(0)} value={state[0]} />
      <Square border={"0 3px 3px 3px"} onClick={()=> handleClick(1)} value={state[1]} />
        <Square border={"0 0 3px 3px "} onClick={()=> handleClick(2)} value={state[2]} />
      </div>
      <div className="board-row">
        <Square border={" 3px 3px  3px 0"} onClick={()=> handleClick(3)} value={state[3]} />
        <Square border={"3px"} onClick={()=> handleClick(4)} value={state[4]} />
        <Square border={" 3px 0 3px 3px"} onClick={()=> handleClick(5)} value={state[5]} />
      </div>
      <div className="board-row">
        <Square border={" 3px 3px 0 0"} onClick={()=> handleClick(6)} value={state[6]} />
        <Square border={"3px 3px 0 3px"} onClick={()=> handleClick(7)} value={state[7]} />
        <Square border={" 3px 0 0 3px "} onClick={()=> handleClick(8)} value={state[8]} />
      </div>  </>) }
    
    </div>
    
  );
}

export default Board;
