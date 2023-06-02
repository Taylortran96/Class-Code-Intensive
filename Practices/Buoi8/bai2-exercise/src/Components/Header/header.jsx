import React, {useState} from "react";
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { CartProvider, useCart } from "react-use-cart";

export default function Header(){
    const { cartItems } = useCart();
    const [totalQuantity, setTotalQuantity] = useState(cartItems.length);
    
    const updateTotalQuantity = () => {
        setTotalQuantity(cartItems.length);
      };

    const handleClickCart = () => {
        <div>
            <p>sản phẩm</p>
        </div>
    }
    return(
        <div className="header-wrapper">
            <div className="logo">
                <p>Logo</p>
            </div>
            <div className="search-wrapper">
                <input type="search" placeholder="Tìm kiếm"></input>
                <button>Search</button>
            </div>
            
            <div>
                <i className="logo"><faCartShopping/></i>
                <button onClick={() => setCard} >Add </button>
                <p>Tổng cộng: </p>
            </div>
            
        </div>
    )
}

function Cart (){
    const {isEmpty,totalUniqueItems,items,updateItemQuantity,removeItem} = useCart()
    if(isEmpty) return <p>Your cart is empty</p>;

    return(
        {items.map( (item) => (
            <li key={item.id}></li>
        ))}
    )
}