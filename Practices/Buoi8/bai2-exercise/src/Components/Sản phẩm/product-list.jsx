import React from "react";
import data from "./product-data.json";
import QuantityChange from "./quantity-change";
import QuantityButton from "./quantity-btn";
import { useCart } from "react-use-cart";

export default function ProductListComponent(){
    const { addToCart } = useCart();
    const [quantity, setQuantity] = useState(0);

    const handleAddToCart = () => {
        if (quantity > 0) {
          addToCart({ ...product, quantity });
          setQuantity(0);
        }
      };
    const handleQuantityChange = (value) => {
        setQuantity(value);
    };
    const { addItem } = useCart();

    return(
        <div className="product-list-wrapper">
            {data.map((element) => (
                <div key={element.id} className="product-element">
                    <img src={element.imgUrl} alt={element["product-name"]}/>
                    <p>{element["product-name"]}</p>
                    <p>Giá cả: VND{element.price.toLocaleString()}/sp</p>
                    <p>Số lượng: {quantity}</p>
                    <QuantityChange
                        quantity={quantity}
                        onQuantityChange={handleQuantityChange}
                    />
                    <QuantityButton onclick={()=> (addItem(element))} text="Add to cart" disabled={quantityChange === 0}/>
                </div>
            ))}
        </div>
    )
}