import React from "react";

export default function Header(props) {
    return (
        <div className="Header">
            Player: &emsp;
            <span className="Player">{props.player}</span>

            <span className="winStatus"></span>
        </div>
    );
}
