import React from "react";
import '../style/contact.css';

import email from '../media/email.svg';
import github from '../media/github.svg';

const Contact = () => {

    return (
        <section className="contact" id="contact">
            <div className="contact-header">
                <h1 id="about-title">Contact</h1>
                <hr className="about-lines"></hr>
            </div>
            <div className="contact-content">
                <div className="contact-stuff">
                    <img className="contact-image" src= {github} alt=""></img>
                    <h3 className="contact-h3">@acandan2</h3>
                </div>
                <div className="contact-stuff">
                    <img className="contact-image" src= {email} alt=""></img>
                    <h3 className="contact-h3">atilaycandan2@gmail.com</h3>
                </div>
            </div>
        </section>
    )

}

export default Contact;