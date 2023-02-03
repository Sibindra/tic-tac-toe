import { useState } from "react";

import Header from "./components/Header";
import Board from "./components/Board";

import "./index.css";

function App() {
    const [boxes, setBoxes] = useState(Array(9).fill(null));

    // console.log(boxes)
    const [player, setPlayer] = useState("X");

    function changePlayer() {
        setPlayer((prevPlayer) => (prevPlayer === "X" ? "O" : "X"));
    }

    return (
        <div className="App">
            <Header player={player} />

            <Board onClickFunction={changePlayer} element={boxes} />
        </div>
    );
}

export default App;
