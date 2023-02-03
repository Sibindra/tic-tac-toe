import React from "react";

export default function Board(props) {
    return (
        <>
            <div className="Board">
                {props.element.map((element, index) => (
                    <div
                        className="board-item"
                        key={index}
                        onClick={props.onClickFunction}
                    >
                        {element}
                    </div>
                ))}
            </div>
        </>
    );
}
