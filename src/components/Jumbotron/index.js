import React from "react";
import "./style.css";

function Jumbotron(props) {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-2">Do You Have the Power?</h1>
                <p className="lead">Click on an image to harness the power of Gray Skull, but don't click on any more than once!</p>
            </div>
        </div>
    );
}

export default Jumbotron;