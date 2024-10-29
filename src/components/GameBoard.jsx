const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({onSelectPlayer,turns}) {

    let gameBoard = initialGameBoard;
    for(const turn of turns)
    {
        const {square,player} = turn;
        const {row,col} = square;
        gameBoard[row][col] = player;

    }

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
      {gameBoard.map((row, rowindex) => (
        <li key={rowindex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => onSelectPlayer(rowindex,colIndex)}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
