import { useState } from "react"
import Icon from "../Images/icon-cart.svg"
import OpenMenu from "../Images/icon-menu.svg"
import CloseMenu from "../Images/icon-close.svg"
import Logo from "../Images/logo.svg"
import Delete from "../Images/icon-delete.svg"





function NavLinks({shoppingCart, deleteItem}) {
    const [showCart, newShowCart] = useState(false)
    const [showMenu, newShowMenu] = useState(false)

    const props = shoppingCart.item


    function onClickImg() {
        newShowCart(!showCart)
    }

    function onClickMenu() {
        newShowMenu(!showMenu)
    }


    function MobileMenu() {
        if (showMenu) {
            return (
                <div className="Mobile-menu-opened">
                    <div className="Mobile-Menu-content">
                        <img src={CloseMenu} onClick={onClickMenu} className="close-menu"></img>
                        <ul>
                            <li className="mobile-links"><a href="#" className="mob-link-text">Collections</a></li>
                            <li className="mobile-links"><a href="#" className="mob-link-text">Men</a></li>
                            <li className="mobile-links"><a href="#" className="mob-link-text">Women</a></li>
                            <li className="mobile-links"><a href="#" className="mob-link-text">About</a></li>
                            <li className="mobile-links"><a href="#" className="mob-link-text">Contact</a></li>
                        </ul>
                    </div>
                </div>
                
            )
        } else {
            return (
                <div>
                </div>
            )
        }
    }
    

    function ShoppingCart() {
        if (showCart) {
            if (shoppingCart.length === 0) {
                return (
                    <div className="shopping-cart">
                        <div className="cart-header">
                            <p className="cart-title">Cart</p>
                        </div>
                        <div className="cart-content-empty">
                            <p className="cart-empty">Your cart is empty.</p>
                        </div>
                    </div>
                )
            } else {
                return (
                    <div className="shopping-cart">
                        <div className="cart-header">
                            <p className="cart-title">Cart</p>
                        </div>
                        <div className="cart-content">
                            <div className="cart-item">
                                <img src={props.image} className="cart-item-thumb" />
                                <div className="cart-item-text">
                                    <p>{props.name}</p>
                                    <p>${props.price} x {props.count} <span className="cart-item-price">${props.price * props.count}</span></p>
                                </div>
                                <img src={Delete} onClick={deleteItem}></img>
                            </div>
                        </div>
                        <button className="checkout-btn">Checkout</button>
                    </div>
                )
            }
            
        } else {
            return (
                <div>
                </div>
            )
        }
    }

    function DesktopMenu() {
        return (
            <div className="desktop-menu-content">
                <ul className="desktop-links-container">
                    <li><a href="#" className="desktop-links">Collections</a></li>
                    <li><a href="#" className="desktop-links">Men</a></li>
                    <li><a href="#" className="desktop-links">Women</a></li>
                    <li><a href="#" className="desktop-links">About</a></li>
                    <li><a href="#" className="desktop-links">Contact</a></li>
                </ul>
            </div>
    )}

    

    return (
        <div>
            <nav className="navigation">
                <img src={OpenMenu} className="open-menu-icon" onClick={onClickMenu}></img>
                <a href="#" className="logo"><img src={Logo}></img></a>
                <DesktopMenu />
                <img src={Icon} onClick={onClickImg} className="shopping-cart-icon"></img>   
            </nav>
            <ShoppingCart />
            <MobileMenu />
        </div>
        
    )
}


export default NavLinks