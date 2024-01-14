import { MENU_API } from "./constants";
import { useState,useEffect} from "react";

const useRestaurantMenu = (resId) => {
    const [menuItems,setMenuItems] = useState([]);

    useEffect(() => {
        fetchData();
    },[])


    const fetchData = async () => {
       try { 
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        setMenuItems(json);
        const categories =
        json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
          (c) =>
            c.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
        );

    }  catch (error) {
        console.error('Error fetching data:', error.message);
    }
    };

    return menuItems;
}
export default useRestaurantMenu;