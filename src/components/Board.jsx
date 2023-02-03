import React from "react";

export default function Board(props) {
    return (
        <>
            <div className="Board">
                {props.elementArr.map((element, index) => (
                    <div
                        className="board-item"
                        key={index}
                        onClick={()=>props.onClickFunction(index)}
                    >
                        {element}
                    </div>
                ))}
            </div>
        </>
    );
}
