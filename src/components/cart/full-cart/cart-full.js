import { CartItem } from "../cart-item/cart-item";
import './cart-full.css';
import classNames from "classnames";

export const CartFull = (props) => {

    let itemsCart = props.cartItems;
    let totalPrice = props.cartItems.reduce((total, product) => total += product.price, 0);
    let isNeedScroll = itemsCart.length > 4;

    return (
        <div className="cart-full-inner">
            <div className="cart-full-content">
                <div className="cart__bread-crumbs">
                    <ul className='cart__bread-crumbs-list'>
                        <li className="cart__bread-crumb cart__bread-crumb-active">Item in Cart <span className="cart-crumbs-separator">/</span></li>
                        <li className="cart__bread-crumb">Delivery Info <span className="cart-crumbs-separator">/</span></li>
                        <li className="cart__bread-crumb">Payment</li>
                    </ul>
                </div>
                <div className="cart-full-content">
                    <div className={classNames("cart-items", { cartItemsScroll: isNeedScroll })}>
                        {props.cartItems.map((el) => {
                            return (
                                <CartItem itemsCart={itemsCart} cartItem={el} />
                            )
                        })}
                    </div>
                    <div className="cart-btns">
                        <div className="cart-total">
                            <span className="cart-total-price-title">Total</span>
                            <span className="cart-total-price-price">$ {(Math.floor(totalPrice * 100) / 100).toFixed(2)}</span>
                        </div>
                        <button className="empty-cart-btn">Further</button>
                        <button className="empty-cart-btn full-cart-btn" onClick={(props.closeCart)}>View Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}



