
import React from "react";
import './cart-item.css';
import deleteIcon from './img/delete.png'
import { useDispatch } from "react-redux";
import { addCounter } from "../../../redux/reducers/reducer";
import { removeCounter } from "../../../redux/reducers/reducer";
import { deleteItemFromCart } from "../../../redux/reducers/reducer";


export const CartItem = (props) => {

    let itemsCartData = props.cartItem;
    const dispatch = useDispatch();

    function addCount() {
        dispatch(addCounter(itemsCartData));
    }

    function delCount() {
        dispatch(removeCounter(itemsCartData));
    }

    function deleteItem() {
        dispatch(deleteItemFromCart(itemsCartData));
    }

    return (
        <div className="cart-item-inner" data-test-id='cart-card'>
            <img src={`https://training.cleverland.by/shop${itemsCartData.image}`} alt="product-img" className="cart-item-img" />
            <div className="cart-item-info">
                <p className="cart-item-name">{itemsCartData.name}</p>
                <p className="cart-item-details">{itemsCartData.color},{itemsCartData.size} </p>
                <div className="cart-price-info">
                    <div className="cart-count-decrease" onClick={delCount} data-test-id='minus-product'>-</div>
                    <div className="cart-count-number">{itemsCartData.count}</div>
                    <div className="cart-count-increase" onClick={addCount} data-test-id='plus-product'>+</div>
                    <div className="cart-total-price" >$ {itemsCartData.price}</div>
                </div>
            </div>
            <div className="cart-delete-icon" data-test-id='remove-product'>
                <img src={deleteIcon} alt="delete-icon" onClick={deleteItem} /></div>
        </div>
    )
}



