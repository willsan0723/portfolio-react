// placeholder on how to use reactstrap if I decide to use it.
// import { Container, Row, Col, Jumbotron, Card, CardImg, CardText } from "reactstrap"

import React from 'react'
import myPic from "../assets/img/will-photo.jpg";

function About() {
    return (
        <section className="my-5" >
            <h1 id="about">Who am I?</h1>
            <img src={myPic} className="my-2" style={{ width: "25%" }} alt="profilePic" />
            <div className="my-2">
                <p>
                In a rapidly evolving world, I have embraced change and embarked on a new journey. Previously, I was captivated by the intricacies of puzzles and strategy games, and transitioning to coding felt like a natural progression. Coding has become a fascinating avenue for me, providing a platform to channel my creativity in innovative ways. With a recently earned Master of Software Development degree, I bring a strong educational foundation to my endeavors. As I navigate through this dynamic field, my passion for problem-solving and strategic thinking continues to drive my exploration of innovation and endless possibilities.       
                </p>
            </div>
        </section >
    )
}

export default About