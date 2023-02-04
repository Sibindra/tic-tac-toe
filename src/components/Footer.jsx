import React from "react";

export default function Footer(props) {
    return (
        <div className="Footer">
            <button className="reset-btn" onClick={props.onClickFunction}>Reset Board</button>
        </div>
    );
}
