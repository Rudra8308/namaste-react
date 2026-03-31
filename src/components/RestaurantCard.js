import React from "react";
import {starbucks} from "../../Assets/download.jpeg";

const RestaurantCard = (props) => {
    const {data} = props;
    console.log(data);
    return(
        <div className="res-card">
        <img src={starbucks}/>
        <h3>{data.name}</h3>
        <h4>{data.cuisines.join(", ")}</h4>
        <h4>{data.avgRating} ⭐️ ({data.totalRatingsString})</h4>
        <h4>{data.sla.deliveryTime} mins</h4>
        
        </div>
    )
}

export default RestaurantCard;