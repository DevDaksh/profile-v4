import React from 'react';
import github from '../assets/github.svg'
import insta from '../assets/insta.svg'
import twitter from '../assets/twitter.svg'

export default function Header() {

    return (
        <div className='background-container'>
            <div className="background">
            </div>
            <div className="background-shade">
            </div>
            <div className="header">
                <img src='./assets/mesa.jpg' className='mesa' alt="Mesa Mesa" />
                <span className="name">
                    Daksh Kulshrestha
                </span>
                <span className="head-bio">
                    Full Stack Web Engineer
                </span>
                <div className="links">
                    <a href="https://github.com/DevDaksh" target="__blank"><img src={github} alt="Github Logo" /></a>
                    <a href="https://instagram.com/daksh_js" target="__blank"><img src={insta} alt="Github Logo" /></a>
                    <a href="https://twitter.com/dawksh" target="__blank"><img src={twitter} alt="Github Logo" /></a>
                </div>
            </div>
        </div>
    )
}
