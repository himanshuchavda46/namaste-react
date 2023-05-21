import React, {useState,useEffect} from "react";
import RestaurantCard from "./RestaurantCard";
import ShimmerSkeleton from "./ShimmerSkeleton";

import {resData} from "../utils/mockData"

const Body = () => {
    const [listOfRestaurants,setListOfRestaurats] = useState([]);
    const [isLoading,setIsLoading] = useState(false);

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
    if(listOfRestaurants.length === 0 && !isLoading) return "No Data";
    return isLoading ? <ShimmerSkeleton/> : (
        <div className="body">
            <div className="filterContainer">
                <button className="filter-btn" onClick={() => {
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
