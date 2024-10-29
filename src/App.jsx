import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { useState } from "react";
import Log from './components/Log.jsx';
function App() {

  const [gameTurns,setGameTurns] = useState([]);
  const [activePlayer,setActivePlayer] = useState('X');

  function selectActivePlayer(rowIndex,colIndex)
  {
    setActivePlayer((curActivePlayer) => curActivePlayer === 'X'?'O':'X');
    setGameTurns((prevGameTurns) =>
    {
        let curPlayer = 'X';
        if(activePlayer.length > 0 && activePlayer === 'X')
        {
          curPlayer = 'O';
        }
        const currentTurns = [
        {square : {row:rowIndex,col:colIndex}, player : curPlayer },
        ...prevGameTurns,
        ];

      return currentTurns;
        
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive ={activePlayer === 'X'}/>
          <Player initialName="Player 2" symbol="O" isActive ={activePlayer === 'O'}/>
        </ol>
        <GameBoard onSelectPlayer={selectActivePlayer} turns = {gameTurns}/>
      </div>
      <Log />
    </main>
  );
}

export default App;
