import React from "react";
import {Link} from "react-router-dom"

import {CDN_URL} from "../utils/constants"

const RestaurantCard = (props) => {
    const {resData} = props;
    const {id, cloudinaryImageId, name, cuisines, avgRating, costForTwo, deliveryTime} = resData?.data;
    return (
        <Link to={`restaurant/${id}`}>
            <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
                <img
                    className="res-logo"
                    alt=""
                    src={`${CDN_URL}/${resData.data.cloudinaryImageId}`}
                />
                <h3>{name}</h3>
                <h4>{cuisines?.join(", ")}</h4>
                <h4>{avgRating} stars</h4>
                <h4>{costForTwo / 100}</h4>
                <h4>{deliveryTime} minutes</h4>
            </div>
        </Link>
    );
}

export default RestaurantCard;
