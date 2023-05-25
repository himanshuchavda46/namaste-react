import React from "react";
import {Link} from "react-router-dom"

import {CDN_URL} from "../utils/constants"

const RestaurantCard = (props) => {
    const {resData} = props;
    const {id, cloudinaryImageId, name, cuisines, avgRating, costForTwo, deliveryTime} = resData?.data;
    return (
        <Link to={`restaurant/${id}`}>
            <div className="res-card" style={{backgroundColor: "#f0f0f0"}} >
                <img
                    className="res-logo"
                    alt=""
                    src={`${CDN_URL}/${resData.data.cloudinaryImageId}`}
                />
                <h3 className="text-xl p-1 font-black">{name}</h3>
                <h4 className="text-md p-1">{cuisines?.join(", ")}</h4>
                <h4 className="text-md p-1">{avgRating} stars</h4>
                <h4 className="text-md p-1"> {costForTwo / 100}</h4>
                <h4 className="text-md p-1">{deliveryTime} minutes</h4>
            </div>
        </Link>
    );
}

export default RestaurantCard;
