import React from "react"

export default class Projects extends React.Component {
    render() {
        return(
            <div className="content">
            <p className="content-box">
            <a href= "https://github.com/acornsquash/FishGame" target="_blank" rel="noreferrer"><em>FishGame</em></a> is a 2D Mobile Game where users can design an underwater landscape and collect unique underwater creatures. Inspired by Neko Atsume's Kitty Collector. Early stages work-in-progress. 
            </p>
            <p className="content-box">

                <a href="https://chrome.google.com/webstore/detail/moonfaze/jkaammejammacclalmefmhkpjcfdcfim" target="_blank" rel="noreferrer"><em>MoonFaze</em></a> is a free extension for Chrome browsers. Designed for werewolves (or people who just want to keep track of the moon), it shows the moon's current phase, in a clean, simple, unobtrusive little popout.

            </p>
            </div>
        )
    }
}

