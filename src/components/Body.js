import RestoCard ,{IsVeg}from "./RestoCard";
import {useState, useEffect ,useContext} from "react";
import {Link} from "react-router-dom";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";


const Body = () => {

    const [newList,setNewList] = useState([]);
    const [searchText,setSearchText] = useState("");
    const [filterList,setFilterList]= useState([]);
    // const [api,setApi] = useState("");

    const VegRestoCard = IsVeg(RestoCard);

    useEffect(() => {
        fetchData();
    },[])

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:8080/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING');
            const json = await response.json();
            console.log(json);
            setNewList( json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setFilterList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        } catch (error) {
            console.error('Error fetching data:', error.message);
        }
    };

    if (!useOnlineStatus()) {
        return <h1>"Oops, your internet is not working!</h1>
    }
    const { loggedInUser, setUserName } = useContext(userContext);

    return newList.length == 0?  <Shimmer/> : (
        <div className="body">
            <div className="flex justify-end">
                <div className="m-7 p-3 h-16 bg-slate-400">
                <input type = "text" className="p-2"  placeholder="Search for restaurants...." value={searchText} onChange = {(e)=> {setSearchText(e.target.value)}}/>
                <button className=" bg-violet-300  border-black p-2" onClick = {()=> {
                    const filterList = newList.filter((res)=> 
                        res.info.name.toLowerCase().includes(searchText.toLowerCase())
                    );
                    setFilterList(filterList);
                    }}>🔍
                </button>
                </div>

                <button className="m-7 p-3 h-16 bg-slate-400" onClick ={()=> {
                   const filter= newList.filter(
                        (resto ) => resto.info.avgRating>4.2 
                    );
                    setFilterList(filter);
                    }}
                    >Highest Rated Restaurants</button>
                <div className="m-7 p-3 h-16 bg-slate-400">
                <label className="p-2 m-2">UserName</label>
                <input
                    className="border border-black p-2 "
                    value={loggedInUser}
                    placeholder="Set your username..."
                    onChange={(e) => setUserName(e.target.value)}
                  />
                 </div>
            </div>
            <div className="flex flex-wrap m-10 my-5">
                {
                     filterList.map((restaurant) => (
                    <Link
                    key = {restaurant?.info.id} 
                    to={"/restaurants/" + restaurant?.info.id} > 
                    {
                       restaurant?.info.promoted  ? <VegRestoCard  resData={restaurant?.info}/> :  <RestoCard  resData={restaurant?.info}/>
                    }  
                    </Link>
                    ))

                }

            </div>

        </div>
    )
}

export default Body;