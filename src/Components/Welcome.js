import React from "react";
import '../style/welcome.css';

const Welcome = () => {

    return (
        <section className="hero" id="hero">
            <div className="hero-information">
                <div className="hero-introduction">
                    <p className="hero-paragraph" id="welcome-1">Hi!</p>
                    <p className="hero-paragraph" id="welcome-2">My name is <span id="my-name">Atilay</span>.</p>
                    <hr></hr>
                    <p className="hero-paragraph" id="welcome-3">I'm a <span id="full-stack">full-stack</span> web developer.</p>
                </div>
            </div>
        </section>
    )
}

export default Welcome;