import React,{useState,useEffect} from "react";
import {useParams} from "react-router-dom"
import ShimmerSkeleton from "./ShimmerSkeleton"

import {CDN_URL} from "../utils/constants"

const RestaurantMenu = () => {
    // read dynamic routing
    const {id} = useParams();
    const [resetaurant,setRestaurant] = useState(null);

    useEffect(() => {
        fetchRestaurantDetails();
    }, []);

    async function fetchRestaurantDetails(){
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.022505&lng=72.5713621&restaurantId=${id}`);
        const jsonData = await  data.json();
        setRestaurant(jsonData?.data?.cards?.[0]?.card?.card?.info || {})
    }

    return !resetaurant  ? <ShimmerSkeleton/>   :  (
        <div className="res-card-details" style={{backgroundColor: "#f0f0f0"}}>
            <h1> Restaurant Id: {id}</h1>
            <img
                className="res-logo"
                alt=""
                src={`${CDN_URL}/${resetaurant?.cloudinaryImageId}`}
            />
            <h3>{resetaurant?.name}</h3>
            <h4>{resetaurant?.cuisines?.join(", ")}</h4>
            <h4>{resetaurant?.avgRating} stars</h4>
        </div>
    )
}

export default RestaurantMenu;
