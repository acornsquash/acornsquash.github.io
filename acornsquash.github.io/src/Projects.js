import React from "react"

export default class Projects extends React.Component {
    render() {
        return(
            <div className="content">
            <p className="content-box">
            <a href= "https://price-less.herokuapp.com/" target="_blank" rel="noreferrer"><em>Priceless</em></a> was inspired by the popular facebook group, buy nothing. We aim to promote mutual aid and neighborhood connections by creating a platform where users can post unwanted household items and neighbors can browse and request items they want or need. Includes a map! 
            </p>
            <p className="content-box">

                <a href="https://chrome.google.com/webstore/detail/moonfaze/jkaammejammacclalmefmhkpjcfdcfim" target="_blank" rel="noreferrer"><em>MoonFaze</em></a> is a free extension for Chrome browsers Designed for werewolves (or people who just want to keep track of the moon), it shows the moon's current phase, in a clean, simple, unobtrusive little popout. Also available in German.

            </p>
            </div>
        )
    }
}

