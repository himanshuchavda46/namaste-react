import React from "react";
import {Link} from "react-router-dom"
import {useDispatch} from "react-redux"
import {addItem,removeItem} from "../utils/cartSlice"

import {CDN_URL} from "../utils/constants"

const RestaurantCard = (props) => {
    const {resData} = props;
    const {id, cloudinaryImageId, name, cuisines, avgRating, costForTwo, deliveryTime} = resData?.data;
    const dispatch = useDispatch();

    const handleAddItem = (e) => {
        e.preventDefault();
        dispatch(addItem(name))
    }
    const handleRemoveItem = (e) => {
        e.preventDefault();
        dispatch(removeItem(name))
    }
    return (
        <Link to={`restaurant/${id}`}>
            <div className="res-card relative" style={{backgroundColor: "#f0f0f0"}} >
                <img
                    className="res-logo"
                    alt=""
                    src={`${CDN_URL}/${resData.data.cloudinaryImageId}`}
                />
                <h3 className="text-xl p-1 font-black">{name}</h3>
                <h4 className="text-md p-1">{cuisines?.join(", ")}</h4>
                <h4 className="text-md p-1">{avgRating} stars</h4>
                <h4 className="text-md p-1"> {costForTwo / 100}</h4>
                <div className="flex justify-between items-center absolute bottom-4 right-4">
                    <button className="p-1 mr-2 bg-black text-white h-[40px]" onClick={handleAddItem}>Add Item</button>
                    <button className="p-1 bg-black text-white h-[40px]" onClick={handleRemoveItem}>Remove Item</button>
                </div>
            </div>
        </Link>
    );
}

export default RestaurantCard;
