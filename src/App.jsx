import { useState, useEffect, CSSProperties } from "react";
import "./index.css";

import Header from "./components/Header";
import Board from "./components/Board";
import Footer from "./components/Footer";

import BarLoader from "react-spinners/BarLoader";

function App() {
    const [boxes, setBoxes] = useState(Array(9).fill(null));
    const [player, setPlayer] = useState("X");
    const [winner, setWinner] = useState(null);

    useEffect(() => {
        resetBoard();
    }, [winner]);

    // loader hooks
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        const timeoutId = setTimeout(() => {
            setLoading(false);
        }, 3000);
        return () => clearTimeout(timeoutId);
    }, []);

    // game logic
    function gameEngine(boxesArray) {
        const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        winningCombinations.forEach((combination) => {
            const [a, b, c] = combination;

            if (
                boxesArray[a] &&
                boxesArray[a] === boxesArray[b] &&
                boxesArray[a] === boxesArray[c]
            ) {
                setWinner(boxesArray[a]);
            } else if (!winner) {
                let filledBoxes = 0;
                boxesArray.forEach((box) => {
                    if (box) {
                        filledBoxes++;
                    }
                });
                if (filledBoxes === 9) {
                    setWinner("Draw");
                }
            }
        });
    }

    // function to change player and update the array value
    let index = 0;
    function handleClick(Clickedindex) {
        setPlayer((prevPlayer) => (prevPlayer === "X" ? "O" : "X"));

        index = Clickedindex;
        const newBoxes = [...boxes];
        newBoxes[index] = player;
        setBoxes(newBoxes, gameEngine(newBoxes));
    }

    // function to reset board
    function resetBoard() {
        setBoxes(new Array(9).fill(null));
        // setWinner(null);
    }

    return (
        <div className="App">
            {/* loading */}
            {loading ? (
                <BarLoader
                    color={"#FFFFFF"}
                    loading={loading}
                    size={150}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
            ) : (
                <div className="App">
                    <Header player={player} winner={winner} />
                    <Board onClickFunction={handleClick} elementArr={boxes} />
                    <Footer onClickFunction={resetBoard} />
                </div>
            )}
        </div>
    );
}

export default App;
