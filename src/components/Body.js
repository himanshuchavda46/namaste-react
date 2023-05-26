import React, {useState,useEffect,useContext} from "react";
import RestaurantCard from "./RestaurantCard";
import ShimmerSkeleton from "./ShimmerSkeleton";
import useOnline from "../utils/useOnline"
import {resData} from "../utils/mockData"
import UserContext from "../utils/UserContext"

const Body = () => {
    const [listOfRestaurants,setListOfRestaurats] = useState([]);
    const [isLoading,setIsLoading] = useState(false);
    const isOnline = useOnline();
    const {user,setUser} = useContext(UserContext);

    useEffect(() => {
       fetchRestaurants();
    }, []);

    async function fetchRestaurants(){
        setIsLoading(true);
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.022505&lng=72.5713621&page_type=DESKTOP_WEB_LISTING");
        const jsonData = await data.json();
        setListOfRestaurats(jsonData?.data?.cards?.[2]?.data?.data?.cards);
        setIsLoading(false);
    }
    if(!isOnline) return "You are offline";
    if(listOfRestaurants.length === 0 && !isLoading) return "No Data";
    return isLoading ? <ShimmerSkeleton/> : (
        <div className="body">
            <input className="p-1 m-1 border border-black"
                    placeholder="user name"
                   value={user.name}
                   onChange={(e)=>setUser({
                ...user,
                name: e.target.value
            })} />
            <h1 className="font-bold p-1 m-1 text-xl">Hello {user.name}</h1>
            <div className="filterContainer">
                <button className="filter-btn p-2 m-2 bg-black text-white" onClick={() => {
                    const filterList = listOfRestaurants.filter((res)=> res.data.avgRating > 4);
                    setListOfRestaurats(filterList);
                }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {
                    ((a=5),console.log(a))
                }
                {listOfRestaurants?.map((res,index)=>(<RestaurantCard key={res.data.id} resData={res}/>))}
            </div>
        </div>
    )
}

export default Body;
