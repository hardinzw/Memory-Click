import React from "react";
import "./style.css";

function CharacterCard(props) {
    return (
        <div className="img" onClick={event => props.clickEvent(event.target.src)}>
            <img alt={props.name} src={props.image} />
        </div>
    );
};

export default CharacterCard;