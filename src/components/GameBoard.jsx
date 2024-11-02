

export default function GameBoard({onSelectPlayer,board}) {

    

//   const [gameBoard,setGameBoard] = useState(initialGameBoard);

//   function handleClick(rowIndex,colIndex)
//   {
//     setGameBoard((prevGameBoard) => 
//     {
//         const board = [...gameBoard.map(innerArray => [...innerArray])];
//         if(board[rowIndex][colIndex] === null)
//         {
//             board[rowIndex][colIndex] = curPlayerSymbol;
//         }
//         return board;
//     }
//     );
//     onSelectPlayer();

//   }
  return (
    <ol id="game-board">
      {board.map((row, rowindex) => (
        <li key={rowindex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => onSelectPlayer(rowindex,colIndex)} disabled={playerSymbol !== null}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
