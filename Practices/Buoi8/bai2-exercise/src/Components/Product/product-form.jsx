import React from "react";
import QuantityButton from "./product-btn";
import numeral from 'numeral';

export default function ProductListForm(props) {
    const {product,onAdd,quantity} = props;
    
    return(
        <div className="products" key={product.id}>
            <img src={product.imgUrl} alt={product.name}/>
            <p className="product-font">{product.name}</p>
            <p>Giá cả: VND {numeral(product.price).format('0,0.00')}/sp</p>
            <p>Số lượng trong kho: {product.quantity}</p>
            <QuantityButton 
                onclick={() => onAdd(product)}
                text="Add to cart"
            />
            <p>Số lượng hiện tại: {quantity}</p>

    </div>
    )
};
