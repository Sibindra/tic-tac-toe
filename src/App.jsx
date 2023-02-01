import { useState } from "react";

import Header from "./components/Header";
import Board from "./components/Board";

import "./index.css";

function App() {
    const [player, setPlayer] = useState("X");

    function changePlayer() {
        setPlayer((prevPlayer) => (prevPlayer === "X" ? "O" : "X"));
    }

    return (
        <div className="App">
            <Header player={player} />
            <Board function={changePlayer} move={player} />
        </div>
    );
}

export default App;
