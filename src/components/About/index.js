import React from 'react';
import coverImage from "../../assets/cover/cover-image2.JPG";



function About() {
    return (
        <section className="my-5">
            <h1 id="about">Who am I?</h1>
            <p>Professional musician turned Full Stack Developer. I've been passionate about connection, the power of computers to connect the world and the internet since AOL was in everyone's home.
<br>
                </br>
                <br>
                </br>
            I own a social justice T-Shirt company, humangoodkind, which donates a portion of proceeds to various progressive and equality minded organizations. 
            </p>
            <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
        </section>
    );
}

export default About;