
import React from "react";
import QuantityButton from "./quantity-btn";

export default function QuantityChange({ quantity, onQuantityChange, onAddToCart}){

    const handleAdd = () =>{
        onQuantityChange(quantity + 1);
    }
    const handleReset = () => {
        onQuantityChange(0);
    };
    
    const handleMinus = () => {
        if (quantityChange > 0) {
            onQuantityChange(quantity - 1);
        }
    }
    return(
        <div className="quantity-wrapper">
            <div className="quantity-change">
                <QuantityButton onclick={handleAdd} text="+"/>
                <QuantityButton onclick={handleReset} text="Reset"/>
                <QuantityButton onclick={handleMinus} text="-"/>
            </div>
        </div>
    )
}


