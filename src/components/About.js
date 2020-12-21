// placeholder on how to use reactstrap if I decide to use it.
// import { Container, Row, Col, Jumbotron, Card, CardImg, CardText } from "reactstrap"

import React from 'react'
import myPic from "../assets/img/will-photo.jpg";

function About() {
    return (
        <section className="my-5" >
            <h1 id="about">Who am I?</h1>
            <img src={myPic} className="my-2" style={{ width: "35%" }} alt="profilePic" />
            <div className="my-2">
                <p>
                    With our world changing rapidly, I decided it was time to try something new. I particularily enjoy solving puzzles and strategy games, so coding is a natural fit for me. Coding is very interesting to me because it allows me to use my creativity in new ways.</p>
            </div>
        </section >
    )
}

export default About