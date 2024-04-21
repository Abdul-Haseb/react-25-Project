/* eslint-disable react/prop-types */
// Import necessary hooks and components from React and React Icons
import { useState } from "react"; // Hook to manage state in functional components
import { useEffect } from "react"; // Hook to perform side effects in functional components
import "./style.css";
// Define the Tic Tac Toe game component
export default function TicTacToe() {
  // Define state variables using the useState hook
  const [square, setSquare] = useState(Array(9).fill("")); // State to represent the squares of the game board
  const [isXTurn, setIsXTurn] = useState(true); // State to track whose turn it is (X or O)
  const [status, setStatus] = useState(""); // State to display game status (Next player, Winner, or Draw)

  // Function to handle click on each square
  const handleClick = (getCurrentBox) => {
    // Make a copy of the current state array representing the game board
    const copySquare = [...square];

    // Check if there's already a winner or if the square is already clicked
    if (handleWinner(copySquare) || copySquare[getCurrentBox]) return;

    // Update the clicked square with 'X' or 'O' based on whose turn it is
    copySquare[getCurrentBox] = isXTurn ? (
      <span
        style={{
          color: "blue",
        }}
      >
        X
      </span>
    ) : (
      <span style={{ color: "red" }}>O</span>
    );

    // Toggle the turn to the next player
    setIsXTurn(!isXTurn);

    // Update the state with the new square array
    setSquare(copySquare);
  };

  // Function to check for a winner
  function handleWinner() {
    // Define winning patterns
    const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // Rows
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], // Columns
      [0, 4, 8],
      [2, 4, 6], // Diagonals
    ];

    // Iterate through winning patterns
    for (let i = 0; i < winningPatterns.length; i++) {
      const [x, y, z] = winningPatterns[i];

      // Check if the squares match and return the winner (X or O)
      if (square[x] && square[x] === square[y] && square[x] === square[z]) {
        return square[x];
      }
    }

    // Return null if no winner
    return null;
  }

  // Function to handle game reset
  const handleReset = () => {
    // Reset the turn to 'X' and reset the game board
    setIsXTurn(true);
    setSquare(Array(9).fill(""));
  };

  // useEffect hook to update game status
  useEffect(() => {
    // Check for winner or draw and update status accordingly
    if (!handleWinner(square) && square.every((item) => item !== "")) {
      setStatus(`This is a Draw, please Restart The game`);
    } else if (handleWinner(square)) {
      setStatus(
        `The winner is ${handleWinner(square)}, Please Restart the game`
      );
    } else {
      setStatus(`Next player ${isXTurn ? "X" : "O"}`);
    }
  }, [square, isXTurn]);

  // Render the Tic Tac Toe game board and game status
  return (
    <div className="tic-tac-toe-container">
      {/* Render the game board as a grid of squares */}
      <div className="row">
        <Box value={square[0]} onClick={() => handleClick(0)} />
        <Box value={square[1]} onClick={() => handleClick(1)} />
        <Box value={square[2]} onClick={() => handleClick(2)} />
      </div>
      <div className="row">
        <Box value={square[3]} onClick={() => handleClick(3)} />
        <Box value={square[4]} onClick={() => handleClick(4)} />
        <Box value={square[5]} onClick={() => handleClick(5)} />
      </div>
      <div className="row">
        <Box value={square[6]} onClick={() => handleClick(6)} />
        <Box value={square[7]} onClick={() => handleClick(7)} />
        <Box value={square[8]} onClick={() => handleClick(8)} />
      </div>
      {/* Display game status */}
      <h1>{status}</h1>
      {/* Button to reset the game */}
      <button className="restart" onClick={handleReset}>
        Restart
      </button>
    </div>
  );
}

function Box({ value, onClick }) {
  return (
    <button className="box" onClick={onClick}>
      {value}
    </button>
  );
}
