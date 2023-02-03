import { useState } from "react";

import Header from "./components/Header";
import Board from "./components/Board";

import "./index.css";

function App() {
    const [boxes, setBoxes] = useState(Array(9).fill(null));
    const [player, setPlayer] = useState("X");

    let index = 0;
    function handleClick(Clickedindex) {
        index = Clickedindex;

        // change player alternatiely
        setPlayer((prevPlayer) => (prevPlayer === "X" ? "O" : "X"));

        const newBoxes = [...boxes];
        newBoxes[index] = player;
        setBoxes(newBoxes);

        // console.log(boxes)
        console.log("index = " + index);
    }

    return (
        <div className="App">
            <Header player={player} />

            <Board
                onClickFunction={handleClick}
                elementArr={boxes}
            />
        </div>
    );
}

export default App;
