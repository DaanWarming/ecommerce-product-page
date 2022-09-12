import { useState } from "react"
import CartIcon from "../Images/icon-cart.svg"
import Minus from "../Images/icon-minus.svg"
import Plus from "../Images/icon-plus.svg"


function ItemsDisplay({subtraction, addition, addToCart, itemCount, handleChange}) {
    return (
        <div>
            <div className="product-info-container">
                <section>
                    <p className="sneaker-company">SNEAKER COMPANY</p>
                    <h2 className="item-name">Fall Limited Edition Sneakers</h2>
                    <p className="item-description">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
                    <div className="product-price-container">
                        <div className="price-and-discount-container">
                            <p><data value="125.00" className="price">$125.00</data></p>
                            <p className="discount">50%</p>
                        </div>
                        <p className="prev-price"><s>$250.00</s></p>
                    </div>
                </section>
                <section className="add-to-cart-container">
                    <div className="item-count-container" >
                        <div className="plus-minus-container">
                            <img src={Minus} onClick={subtraction} className="item-minus"></img>
                            <img src={Plus} onClick={addition}  className="item-plus"></img>
                        </div>
                        <input value={itemCount} onChange={handleChange} className="item-input"></input>
                    </div>
                    <div>
                        <button onClick={addToCart} className="add-to-cart-btn">Add to cart</button>
                    </div>
                    
                </section>
                
            </div>
        </div>
    )
}

export default ItemsDisplay