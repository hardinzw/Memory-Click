import React from "react";
import "./style.css";

function CharacterCard(props) {
    return (
        <div className="card" onClick={event => props.clickEvent(event.target.src)}>
                <img className="img-container" alt={props.name} src={props.image} />
        </div>
    );
};

export default CharacterCard;