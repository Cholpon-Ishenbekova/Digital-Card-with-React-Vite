import React from "react"
import Twitter from "../assets/TwitterIcon.svg"
import Facebook from "../assets/FacebookIcon.svg"
import GitHub from "../assets/GitHubIcon.svg"
import Linkedin from "../assets/LinkedinIcon.svg"
import Instagram from "../assets/InstagramIcon.svg"

export default function Footer(){
    return (
        <footer>
        <ul className="social">
            <li><a href="#"><img src={Twitter} alt="Twitter" /></a></li>
            <li><a href="#"><img src={Facebook} alt="Facebook" /></a></li>
            <li><a href="#"><img src={Instagram} alt="Instagram" /></a></li>
            <li><a href="#"><img src={Linkedin} alt="Linkedin" /></a></li>
            <li><a href="#"><img src={GitHub} alt="GitHub" /></a></li>
        </ul>
        </footer>
    )
}