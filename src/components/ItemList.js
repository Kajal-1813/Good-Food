import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import {addItem} from "../utils/cartSlice";
const ItemList = (props) => {
    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        dispatch(addItem(item));
    }

    const {items,dummy} = props;
    console.log(dummy);
    return (
        <div>
            <div>
                {
                    items.map((item) => 
                    <div key={item.card.info.id} className="m-1 p-3 border-b-2">
                        <div className=" p-1 flex justify-between text-left w-12/12">
                        <div className="truncate w-8/12">
                          <span className="text-left">{ item.card.info.name }</span>
                          <span> : ₹{ item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice }</span>
                          <p className=" mt-6 text-xs text-left truncate">{ item.card.info.description} </p>
                        </div>
                        <div className="w-3/12 ">
                        <div className="absolute">
                        <button className="p-1 bg-white shadow-lg rounded-sm hover:bg-pink-200" onClick = {() => handleAddItem(item)}>Add + </button>
                        </div>
                        <img src= {CDN_URL + item.card.info.imageId} />
                        </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}

export default ItemList;