import React from "react";
import '../style/projects.css';

import insta from '../media/insta.png';
import tic from '../media/tic-tac-toe.png';
import waldo from '../media/waldo.png';
import weather from '../media/weather.png';


const Projects = () => {
    return (
        <section className="projects" id="projects">
            <div className="projects-header">
                <h1 id="projects-title">Projects</h1>
                <hr className="projects-lines"></hr>
            </div>
            <div className="projects-content">
                <div className="project">
                    <img className="project-image" src={insta} alt=""></img>
                    <div className="project-info">
                        <h2 className="project-name">Instagram Clone</h2>
                        <p className="project-paragraph">This was the last project of the Javascript section in <span className="programming-lang">TOP</span>. I had to code for days to connect all the components together. I used Firebase for the <span className="programming-lang">backend</span>.</p>
                        <div className="project-links">
                            <button className="project-button navigation-button">
                                <a href="/">Code</a>
                            </button>
                            <button className="project-button navigation-button">
                                <a href="/">Live Website</a>
                            </button>
                        </div>
                    </div>

                    

                    
                </div>
                <hr className="projects-lines"></hr>
                <div className="project">
                    <img className="project-image" src={weather} alt=""></img>
                    <div className="project-info">
                        <h2 className="project-name">Weather App</h2>
                        <p className="project-paragraph">Simple weather app that lets you search a city or a state and fetches information from a weather website's <span className="programming-lang">API</span>. Took me a couple of hours to make. Nothing complicated here!</p>
                        <div className="project-links">
                            <button className="project-button navigation-button">
                                <a href="/">Code</a>
                            </button>
                            <button className="project-button navigation-button">
                                <a href="/">Live Website</a>
                            </button>
                        </div>
                    </div>
                </div>
                <hr className="projects-lines"></hr>
                <div className="project">
                    <img className="project-image" src={waldo} alt=""></img>
                    <div className="project-info">
                        <h2 className="project-name">Where's Waldo?</h2>
                        <p className="project-paragraph">Where's Waldo?</p>
                        <div className="project-links">
                            <button className="project-button navigation-button">
                                <a href="/">Code</a>
                            </button>
                            <button className="project-button navigation-button">
                                <a href="/">Live Website</a>
                            </button>
                        </div>
                    </div>
                    
                </div>
                <hr className="projects-lines"></hr>
                <div className="project">
                    <img className="project-image" src={tic} alt=""></img>
                    <div className="project-info">
                        <h2 className="project-name">Tic-Tac-Toe</h2>
                        <p className="project-paragraph">Self-explanatory</p>    
                        <div className="project-links">
                            <button className="project-button navigation-button">
                                <a href="/">Code</a>
                            </button>
                            <button className="project-button navigation-button">
                                <a href="/">Live Website</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects;