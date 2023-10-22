import React, { useState } from 'react';
import './Addtodo.css';

function Addtodo (props){
    return(
        <form className="addtodo">
            <input type={props.type} placeholder={props.placeholder} />
            <button type = {props.type} onClick={props.onClick}>{props.children}</button>
        </form>
    )
}
export default Addtodo;