import React from "react";

export default function Board(props) {
    return (
        <>
            <div className="Board">
                <div className="board-item" onClick={props.function}></div>
                <div className="board-item" onClick={props.function}></div>
                <div className="board-item" onClick={props.function}></div>
                <div className="board-item" onClick={props.function}></div>
                <div className="board-item" onClick={props.function}></div>
                <div className="board-item" onClick={props.function}></div>
                <div className="board-item" onClick={props.function}></div>
                <div className="board-item" onClick={props.function}></div>
                <div className="board-item" onClick={props.function}></div>
            </div>
        </>
    );
}
