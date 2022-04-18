import { CartItem } from "../cart-item/cart-item";
import './cart-full.css';
import classNames from "classnames";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
export const CartFull = (props) => {

    let itemsCart = props.cartItems;
    let totalPrice = props.cartItems.reduce((total, product) => total += product.price, 0);
    let isNeedScroll = itemsCart.length > 4;
    let totalPiceRounded = (Math.floor(totalPrice * 100) / 100).toFixed(2);
    let [isNextItem, setIsNextItem] = useState(false);
    let isDeliveryMenu = useSelector(state => state.cartItems.isDeliveryMenu);
    let isPaymentMenu = useSelector(state => state.cartItems.isPaymentMenu);
    let isCartMenu = useSelector(state => state.cartItems.isCartMenu);
    const dispatch = useDispatch();


    return (
        <div className="cart-full-inner">
            <div className="cart-full-content">
                <div className="cart__bread-crumbs">
                    <ul className='cart__bread-crumbs-list'>
                        <li className={classNames("cart__bread-crumb", { cartBreadCrumbActive: isCartMenu })}>Item in Cart <span className="cart-crumbs-separator">/</span></li>
                        <li className={classNames("cart__bread-crumb", { cartBreadCrumbActive: isDeliveryMenu })}>Delivery Info <span className="cart-crumbs-separator">/</span></li>
                        <li className={classNames("cart__bread-crumb", { cartBreadCrumbActive: isPaymentMenu })}>Payment</li>
                    </ul>
                </div>
                <div className="cart-full-content">
                    <div className={classNames("cart-items", { cartItemsScroll: isNeedScroll, cartItemsHidden: isNextItem })}>
                        {props.cartItems.map((el) => {
                            return (
                                <CartItem itemsCart={itemsCart} cartItem={el} />
                            )
                        })}
                    </div>
                    <div className={classNames("cart-btns", { cartItemsHidden: isNextItem })}>
                        <div className="cart-total">
                            <span className="cart-total-price-title">Total</span>
                            <span className="cart-total-price-price">$ {totalPiceRounded}</span>
                        </div>
                        <button className={classNames("empty-cart-btn", { cartItemsHidden: isNextItem })}
                            onClick={() => {
                                setIsNextItem(true);
                                dispatch({ type: "OPEN_DELIVERY_ITEM", totalPiceRounded })
                            }
                            } >Further</button>
                        <button className={classNames("empty-cart-btn full-cart-btn", { cartItemsHidden: isNextItem })} onClick={(props.closeCart)}>View Cart</button>
                    </div>
                </div>
            </div>
        </div >
    )
}



