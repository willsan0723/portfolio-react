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
                In a world that evolves swiftly, I've embraced change and embarked on a new journey. Formerly captivated by the intricacies of puzzles and strategy games, my transition to coding felt like a seamless progression. Coding has become a fascinating avenue for me, providing a platform to channel my creativity in novel ways. Armed with a recently earned Master of Software Development degree, I bring a robust educational foundation to my endeavors. As I navigate through this dynamic field, my passion for problem-solving and strategic thinking continues to drive my exploration of innovation and endless possibilities.
                </p>
            </div>
        </section >
    )
}

export default About