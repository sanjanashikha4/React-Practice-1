import RestuarantCard from "./RestuarantCard";
import resList from "../../utils/mockData";
import { useState } from "react";



const Body = () => {
    const [listOfResturant, setListOfResturant] = useState(resList
        
    )
  return (
    <div className="body">
      <div className="filter">
        <button
          className="btn-filter"
          onClick={() => {
            filteredList = listOfResturant.filter((res) => res.info.avgRating > 4);
           setListOfResturant(filteredList)
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {listOfResturant.map((restaurant) => (
          <RestuarantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
