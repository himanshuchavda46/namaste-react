import React,{useState,useEffect} from "react";
import {useParams} from "react-router-dom"
import {useDispatch} from "react-redux";
import ShimmerSkeleton from "./ShimmerSkeleton"

import {CDN_URL} from "../utils/constants"
import {addItem} from "../utils/cartSlice"

const RestaurantMenu = () => {
    // read dynamic routing
    const {id} = useParams();
    const [resetaurant,setRestaurant] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        fetchRestaurantDetails();
    }, []);

    async function fetchRestaurantDetails(){
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.022505&lng=72.5713621&restaurantId=${id}`);
        const jsonData = await  data.json();
        setRestaurant(jsonData?.data?.cards?.[0]?.card?.card?.info || {})
    }

    const handleAddItem = () => {
        dispatch(addItem(resetaurant?.name))
    }

    return !resetaurant  ? <ShimmerSkeleton/>   :  (
        <div className="res-card-details" style={{backgroundColor: "#f0f0f0"}}>
            <img
                className="res-logo"
                alt=""
                src={`${CDN_URL}/${resetaurant?.cloudinaryImageId}`}
            />
            <div className="flex items-center justify-between">
                <div>
                    <h3 className="p-2">{resetaurant?.name}</h3>
                    <h4 className="p-2">{resetaurant?.cuisines?.join(", ")}</h4>
                    <h4 className="p-2">{resetaurant?.avgRating} stars</h4>
                </div>
                <button className="p-2 bg-black text-white h-[40px]" onClick={handleAddItem}>Add Item</button>
            </div>


        </div>
    )
}

export default RestaurantMenu;
