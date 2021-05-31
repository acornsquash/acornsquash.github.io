import React from "react"
import { Link } from "react-router-dom"

export default class Contact extends React.Component {
    render() {
        return(
            <div className="content">
                <div className="content-box">
            <h3>Contact Me</h3>
            <h5>I love hearing from people!</h5>
            <h3>Email:</h3><h5>ageeab@gmail.com</h5>
            <h3><Link to="https://github.com/acornsquash">Github</Link></h3>
            <h3><Link to="https://www.linkedin.com/in/inaagee/">LinkedIn</Link></h3>
            </div>
            </div>

        )
    }
}