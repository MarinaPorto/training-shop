import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export const CashPaymentItem = (props) => {

    const dispatch = useDispatch();
    let totalPrice = props.totalPrice;
    let orderedProducts = useSelector(state => state.cart.itemsInCart);
    let deliveryData = useSelector(state => state.cartItems.data);
    let orderedProductsData = orderedProducts.map(element => {
        return {
            "name": element.name,
            "size": element.size,
            "color": element.color,
            "quantity": element.count
        }
    });

    let orderInformation =

    {
        "products": orderedProductsData,
        "deliveryMethod": deliveryData.deliveryMethod,
        "paymentMethod": "Сash",
        "totalPrice": totalPrice,
        "phone": deliveryData.phone.replace(/[ ()]/g, ''),
        "email": deliveryData.email,
        "country": deliveryData.country,
        "cashEmail": "",
        "city": deliveryData.city,
        "street": deliveryData.street,
        "house": deliveryData.house,
        "apartment": deliveryData.apartment,
        "postcode": deliveryData.postcode,
        "storeAddress": deliveryData.storeAddress,
        "card": "",
        "cardDate": "",
        "cardCVV": ""
    }


    return (
        <div className='delivery-info-inner'>
            <div className="cart-total">
                <span className="cart-total-price-title">Total</span>
                <span className="cart-total-price-price">$ {totalPrice}</span>
            </div>
            <div className="cart-btns">
                <button className="empty-cart-btn" type="submit" onClick={() => {
                    dispatch({ type: "POST_ORDER", orderInformation })
                    dispatch({ type: "OPEN_COMPLETION_ITEM" })
                }}>READY</button>
                <button className="empty-cart-btn full-cart-btn" onClick={() => { dispatch({ type: "OPEN_DELIVERY_ITEM" }) }}>View Cart</button>
            </div>
        </div>
    )
}



