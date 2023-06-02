import React from "react";

export default function QuantityButton (props){
    const {text, onclick, disabled} = props;
    return(
        <div className="quantity-btn">
            <button onClick={onclick} disabled={disabled}>{text}</button>
        </div>
    )
}