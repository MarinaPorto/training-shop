import { useDispatch } from "react-redux";

export const CashPaymentItem = (props) => {
    console.log("CashPaymentItem", props)


    const dispatch = useDispatch();

    let totalPrice = props.totalPrice;


    let values={
        paymentMethod: "Сash",
        card: "",
        cardDate: '',
        cardCVV: '',                    
        cashEmail: ""                   
    }

    return (

        <div className='delivery-info-inner'>
            <div className="cart-total">
                <span className="cart-total-price-title">Total</span>
                <span className="cart-total-price-price">$ {totalPrice}</span>
            </div>
            <div className="cart-btns">
                <button className="empty-cart-btn" type="submit" onClick={() => {
                    console.log("заказ готов")
                }}>READY</button>
                <button className="empty-cart-btn full-cart-btn" onClick={() => { dispatch({ type: "OPEN_DELIVERY_ITEM" }) }}>View Cart</button>
            </div>
        </div>
    )
}



