import React from "react";

export default function Header(props) {
    return (
        <div className="Header">
            <span className="PlayerStatus">
                Player: &emsp;
                <span className="Player">{props.player}</span>
            </span>

            <span className="winStatus">
                Winner: &emsp;
                <span className="Winner">{props.winner}</span>

            </span>
        </div>
    );
}
