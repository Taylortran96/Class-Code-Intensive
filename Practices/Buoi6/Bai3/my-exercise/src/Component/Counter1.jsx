import React from "react";
import Button from "./Button";
import { useState } from "react";

export default function Counter1 (){
    const [counter1, setCounter1] = useState(0)

    const handleAdd = () => {
        setCounter1(counter1 + 1);
    };
    
    const handleReset = () => {
        setCounter1(0);
    };
    
    const handleMinus = () => {
        setCounter1(counter1 - 1);
    };

    return(
        <div className="counter1-container">
            <h1>Count 1: {counter1}</h1>
            <div className="button-wrapper">
                <Button onclick={handleMinus} text="-"/>
                <Button onclick={handleReset} text="Reset"/>
                <Button onclick={handleAdd} text="+"/>
            </div>
        </div>
    )
}