import React from "react";
import logo from "./Assets/home-delivery.png";
import starbucks from "./Assets/download.jpeg";
import data from "./data.json";

/* 
- Header
    - Log
    - Nav Items
- Body
    - Search
    - RestaurantCotainer
        - RestaurantCards
            - Image
            - Name
            - ratings
            - cuisines
            - delivery time
- Footer
    - Copyright
    - Links

*/


const Header = () => {
  return (
    <div className="header">
        <img
          className="logo"
          src={logo}
        />
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
  );
};

const RestaurantCard = (props) => {
    const {data} = props;
    console.log(data);
    return(
        <div className="res-card">
        <img src="./Assets/download.jpeg"/>
        <h3>{data.name}</h3>
        <h4>{data.cuisines.join(", ")}</h4>
        <h4>{data.avgRating} ⭐️ ({data.totalRatingsString})</h4>
        <h4>{data.sla.deliveryTime} mins</h4>
        
        </div>
    )
}

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {data.data.map((restaurants)=>
            (<RestaurantCard key={restaurants.info.id} data={restaurants.info}/>)
        )}
      </div>

    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header/>
      <Body/>
    </div>
  );
};

export default AppLayout;
