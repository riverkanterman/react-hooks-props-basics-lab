import React from "react";
import About from "./About"
import user from "../data/user"

function Links(props){
    return (
        <div>
            <h3>Links</h3>
            <a href={props.github}>{props.github}</a>
            <a href={props.linkedin}>{props.linkedin}</a>
        </div>
    )
}

export default Links