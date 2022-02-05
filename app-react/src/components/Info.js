import React from 'react';
import profilePic from "../images/react-icon.png"

export default function Info() {
    return (
        <nav>
            <img src={profilePic} className="nav--icon" />
            <h3 className="nav--logo_text">ReactFacts</h3>
            <h4 className="nav--title">React Course - Project 1</h4>
        </nav>
    )
}