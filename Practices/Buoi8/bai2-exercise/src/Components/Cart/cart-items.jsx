import React,{useContext} from "react";
import numeral from 'numeral';

export default function CartItems(props) {
    const {cartItems,onAdd,onMinus,onRemove} = props;
    const itemsPrice = cartItems.reduce((a,c) => a + c.price * c.quantity, 0);
    const taxPrice = itemsPrice * 0.15;
    const shippingPrice = itemsPrice > 100000 ? 0 : 10000;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;
    return(
        <aside className="cart-items-container" >
            <h1>Giỏ hàng</h1>
            <div style={{fontWeight:"bold", color:"red", fontSize:"20px",textAlign:"center"}} >
                {cartItems.length === 0 && <div>Cart đang trống</div>}
            </div>
            <div className="cart-wrapper">
                {cartItems.map((item) => (
                    <div key={item.id} className="cart-items">
                        <div className="col-1">{item.name}</div>
                        <div className="col-2">
                            <button onClick={() => onAdd(item)} className="add">+</button>
                            <button onClick={() => onMinus(item)} className="minus">-</button>
                            <button onClick={() => onRemove(item)} className="remove">remove</button>
                        </div>

                        <div className="col-3">
                            {item.quantity} * VND{numeral(item.price).format('0,0.00')}
                        </div>
                    </div>
            ))}

            <div>
                {cartItems.length !== 0 && (
                    <>
                    <hr></hr>
                    <div className="cart-items">
                      <div className="col-1">Items Price</div>
                      <div className="col-3">VND{numeral(itemsPrice).format('0,0.00')}</div>
                    </div>
                    <div className="cart-items">
                      <div className="col-1">Tax Price</div>
                      <div className="col-3 text-right">VND{numeral(taxPrice).format('0,0.00')}</div>
                    </div>
                    <div className="cart-items">
                      <div className="col-1">Shipping Price</div>
                      <div className="col-3">
                        VND{numeral(shippingPrice).format('0,0.00')}
                      </div>
                    </div>
        
                    <div className="cart-items">
                      <div className="col-1">
                        <strong>Total Price</strong>
                      </div>
                      <div className="col-3">
                        <strong>VND{numeral(totalPrice).format('0,0.00')}</strong>
                      </div>
                    </div>
                    <hr />
                    <div className="cart-btn">
                      <button onClick={() => alert('Thanh toán')}>
                        Thanh toán
                      </button>
                    </div>
                  </>
                )}
            </div>
            </div>
        </aside>
    )
};
