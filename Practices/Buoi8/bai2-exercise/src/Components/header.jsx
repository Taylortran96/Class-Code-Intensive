import React from "react";
import { FaShoppingCart } from "react-icons/fa";

export default function Header(props){
    const {countCartItems} =props;
    
    return(
        <div className="header-wrapper">
            <div className="logo">
                <p>Logo</p>
            </div>
            <div className="search-wrapper">
                <input type="search" placeholder="Tìm kiếm"></input>
                <button>Search</button>
            </div>
            
            <div className="cart-wrapper">
                <FaShoppingCart/>
                {countCartItems ? (
                    <button className="badge">{countCartItems}</button>
                ): ('')}   
            </div>
        </div>
    )
}

