import React from "react"
import PhotoPort from "../assets/porfolio_photo.jpg"

export default function Header(){
    return (
        <header>
        <img src = {PhotoPort} className = "photo_port"/>
        <h1 className="name">Laura Smith</h1>
        <h2 className ="job">Frontend Developer</h2>
        <p className="website">laurasmith.website</p>
        <a href="#" className = "email"> Email</a>
        </header>
    )
}
