import React from 'react';
import profilePic from "../images/profile-pic.png"

export default function Info() {
    return (
        <nav>
            <img src={profilePic} className="info--icon" />

            <h1 className="info--centered">Tyler Kim</h1>
            <h3 className="info--centered">Full Stack Developer</h3>
            <h4 className="info--centered">tylertaewook.github.io</h4>
            <div className="info--centered">
                <button>Email</button>
                <button>LinkedIn</button>
            </div>
        </nav>
    )
}