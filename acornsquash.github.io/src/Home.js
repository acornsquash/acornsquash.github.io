import React from "react"
import Boat from "./boat.jpg"

export default class Home extends React.Component {
    render() {
        return(
            <div className="content-home">
                <div className="content-box-home">
                <h1 id="dash">{">"} {">"} {">"}</h1>
            <p>Hi! I'm Ina, fullstack software engineer and asipiring roof gardener living in Brooklyn, NY.<a href="https://docs.google.com/document/d/e/2PACX-1vTg4I39Svxnn1VD62cioRS8OMSMTiXRewTX7lUIYOhGhOu_6s6yJTJe5ju002TNp7hKrbVWB6yhJY94/pub" target="_blank" rel="noopener noreferrer"><button>Résumé</button></a></p>


<p><img id="me" src={Boat} alt="It's me at work"></img> </p>
</div>
</div>

        )       

    }
}