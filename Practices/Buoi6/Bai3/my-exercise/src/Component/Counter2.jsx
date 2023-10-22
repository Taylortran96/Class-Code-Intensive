import React from "react";
import Button from "./Button";
import { useState } from "react";

export default function Counter2 (){
    const [counter2, setCounter2] = useState(0)

    const handleAdd = () => {
        setCounter2(counter2 + 1);
    };
    
    const handleReset = () => {
        setCounter2(0);
    };
    
    const handleMinus = () => {
        setCounter2(counter2 - 1);
    };

    return(
        <div className="counter2-container">
            <h1>Count 2: {counter2}</h1>
            <div className="button-wrapper">
                <Button onclick={handleMinus} text="-"/>
                <Button onclick={handleReset} text="Reset"/>
                <Button onclick={handleAdd} text="+"/>
            </div>
        </div>
    )
}