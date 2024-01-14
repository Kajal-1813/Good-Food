import {useSelector} from "react-redux";
import { clearCart } from "../utils/cartSlice";
import {useDispatch} from "react-redux";
import { CDN_URL } from "../utils/constants";

const Cart = () => {
    const dispatch = useDispatch();

    const cartItems = useSelector((store)=> store.cart.item);
    console.log(cartItems);
    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return (
        <div className="m-20">
            <div>
            {cartItems?.length === 0 && (
             <h1 className="text-center"> Cart is empty. Add Items to the cart!🛒</h1>
            )}
            </div>
            <div className="border-black">
            {
            cartItems.map((item) => (
                <div className="w-6/12 mx-auto my-4 flex border-black bg-slate-500 text-white">
            <div className="m-4 p-4 w-8/12 shadow-lg flex">{item.card.info.name} -  ₹{item.card.info.price ? item.card.info.price : item.card.info.defaultPrice /100}</div>
            <img
            className="rounded-lg w-3/12 shadow-lg p-2 "
            alt="res-logo"
            src={CDN_URL + item.card.info.imageId}
            />
            </div>
            ) )
            }
            </div>
            <div>
                <button className=" mx-auto my-4 p-4 flex bg-pink-800 text-white justify-end" onClick = {handleClearCart}>Clear Cart</button>
            </div>
        </div>
    )
}

export default Cart;