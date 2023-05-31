import React from "react";

export default function Button (props){
    const {text, onclick} = props;
    return(
        <button onClick={onclick}>{text}</button>
    )
}