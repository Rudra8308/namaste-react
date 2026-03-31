import React from "react";
import data from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState(data);

    const getFilteredRestaurants = () =>{
        const filteredList = listOfRestaurants.filter((res)=>res.info.avgRating>4);
        console.log(filteredList);
        setListOfRestaurants(filteredList);
    }
  return (
    <div className="body">
      <button 
        className="filter-btn"
        onClick={()=>{getFilteredRestaurants()}}>
            Top Rated Restaurants
      </button>
      <div className="res-container">
        {listOfRestaurants.map((restaurants)=>
            (<RestaurantCard key={restaurants.info.id} data={restaurants.info}/>)
        )}
      </div>

    </div>
  );
};

export default Body;