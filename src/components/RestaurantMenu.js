import RestaurantCard from "./RestaurantCard";
import {useState} from "react";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [showIndex,setShowIndex] = useState(0);
     const { resId } = useParams();
     const dummy="Data";

    const menuItems  = useRestaurantMenu(resId);
    const { name, cuisines, costForTwoMessage } = menuItems?.data?.cards[0]?.card?.card?.info|| {};

    const { itemCards } =
    menuItems?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card || {};
    const categories =
    menuItems?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    return menuItems.length === 0? <Shimmer/> :(
        <>
        <div className="text-center w-200 overflow-hidden whitespace-no-wrap">
                        <h1 className="font-bold my-10 text-2xl truncate">{name}</h1>
                        <h1 className="truncate">{cuisines.join(",") }</h1>
                        <h1 className="truncate">{costForTwoMessage}</h1>
                        { categories.map((category,index)=>  
                        <RestaurantCategory
                         data= {category?.card?.card}
                         showItems ={index === showIndex ? true : false}
                         setShowIndex={()=> setShowIndex(index)}
                         dummy = {dummy}
                         /> 
                         )}
            
        </div>
        </>
    )
}

export default RestaurantMenu;