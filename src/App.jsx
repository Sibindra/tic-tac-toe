import { useState } from "react";
import "./index.css";

import Header from "./components/Header";
import Board from "./components/Board";
import Footer from "./components/Footer";

function App() {
    const [boxes, setBoxes] = useState(Array(9).fill(null));
    const [player, setPlayer] = useState("X");

    let index = 0;
    function handleClick(Clickedindex) {
        index = Clickedindex;
        setPlayer((prevPlayer) => (prevPlayer === "X" ? "O" : "X"));
        const newBoxes = [...boxes];
        newBoxes[index] = player;
        setBoxes(newBoxes);
    }

    function resetBoard() {
        setBoxes(new Array(9).fill(null));
    }

    return (
        <div className="App">
            <Header player={player} />
            <Board onClickFunction={handleClick} elementArr={boxes} />
            <Footer onClickFunction={resetBoard} />
        </div>
    );
}

export default App;
