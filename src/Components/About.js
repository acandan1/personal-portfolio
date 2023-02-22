import React from "react";
import '../style/about.css';

import robot from '../media/robot.jpg';

const About = () => {

    return (
        <section className="about" id="about">
            <div className="about-header">
                <h1 id="about-title">About</h1>
                <hr className="about-lines"></hr>
            </div>
            <div className="about-content">
                <div className="about-information">
                    <img src={robot} alt="Mr Robot" id="mr-robot"></img>
                    <div className="about-paragraph">
                        <p>I started my web development journey with <span className="programming-lang">Django</span> at <span className="age">15</span> years of age. Even though I didn't get too much into front-end stuff back then, Django taught me the fundamentals.</p>
                        <p>Now at <span className="age">19</span>, I'm fascinated by what web development has to offer. It's hella fun to bring ideas to life and make a complicated website that is also pleasing to the eye.</p>
                        <p>I used <span className="programming-lang">ReactJS</span> for this website btw.</p>
                    </div>
                </div>
                <div className="about-development">
                    <div className="development-stuff">
                        <h1>Programming Languages</h1>
                        <div className="about-images">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="" className="development-lang"/>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt="" className="development-lang"/>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="" className="development-lang"/>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="" className="development-lang"/>
                        </div>
                    </div>
                    <hr className="about-lines"></hr>

                    <div className="development-stuff">
                        <h1>Front End</h1>
                        <div className="about-images">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="" className="development-lang"/>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" alt="" className="development-lang"/>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="" className="development-lang"/>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="" className="development-lang"/>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="" className="development-lang"/>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="" className="development-lang"/>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="" className="development-lang"/>
                        </div>
                    </div>
                    <hr className="about-lines"></hr>

                    <div className="development-stuff">
                        <h1>Back End</h1>
                        <div className="about-images">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="" className="development-lang"/>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="" className="development-lang"/>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="" className="development-lang"/>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="" className="development-lang"/>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg" alt="" className="development-lang"/>
                        </div>
                    </div>
                    <hr className="about-lines"></hr>

                    <div className="development-stuff">
                        <h1>Other</h1>
                        <div className="about-images">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="" className="development-lang"/>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="" className="development-lang"/>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg" alt="" className="development-lang"/>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" alt="" className="development-lang"/>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yarn/yarn-original.svg" alt="" className="development-lang"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default About;