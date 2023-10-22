import React from "react";


export default function QuantityButton (props){
    const {text, onclick, disabled,onChange} = props;
    return(
        <div className="quantity-btn">
            <button onClick={onclick} disabled={disabled} onChange={onChange}>{text}</button>
        </div>
    )
}
