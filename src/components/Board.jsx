import React, { useState } from "react";

export default function Board(props) {
    return (
        <>
            <div className="Board">
                <div className="board-item" onClick={props.function}>{props.move}</div>
                <div className="board-item" onClick={props.function}>{props.move}</div>
                <div className="board-item" onClick={props.function}>{props.move}</div>
                <div className="board-item" onClick={props.function}>{props.move}</div>
                <div className="board-item" onClick={props.function}>{props.move}</div>
                <div className="board-item" onClick={props.function}>{props.move}</div>
                <div className="board-item" onClick={props.function}>{props.move}</div>
                <div className="board-item" onClick={props.function}>{props.move}</div>
                <div className="board-item" onClick={props.function}>{props.move}</div>
            </div>
        </>
    );
}
