import React from "react";
import QuantityButton from "./product-btn";

export default function QuantityChange({quantity, onQuantityChange,currentQuantity}) {

    const handleAdd = () =>{
        onQuantityChange(quantity + 1);
    }
    const handleReset = () => {
        onQuantityChange(0);
    };
    
    const handleMinus = () => {
        onQuantityChange(quantity - 1)
    }
    const handleQuantity= (value) =>{
        if (quantity <= 0){
            <p>Hết hàng</p>;
            alert("Hết hàng")
        } else{
            <p>Còn hàng</p>;
            alert("Còn hàng")
            
        }
    }
    return(
        <div className="quantity-wrapper">
            <div className="quantity-change">
                <QuantityButton onclick={handleAdd} text="+" />
                <QuantityButton onclick={handleReset} text="Reset" />
                <QuantityButton onclick={handleMinus} text="-"/>
            </div>
            <div className="current-quantity">
                <QuantityButton onclick={handleQuantity} text="Số lượng hiện tại"/>
            </div>
        </div>
    )
}