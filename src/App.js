import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";


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

const AppLayout = () => {
  return (
    <div className="app">
      <Header/>
      <Body/>
    </div>
  );
};

export default AppLayout;
