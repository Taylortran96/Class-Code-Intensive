import React from "react";
import ProductListForm from "./Product/product-form";

export default function Main(props) {
    const {products,onAdd} = props;

    return(
        <main className="product-list-wrapper">
            <h1>Danh sách sản phẩm</h1>
            <div className="product-items-wrapper">
                {products.map((product) =>( 
                    <ProductListForm 
                    key={product.id} 
                    product={product} 
                    onAdd={onAdd} 
                    />
                ))}
            </div>
            
        </main>
        
    )
};
