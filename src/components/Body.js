import RestuarantCard from "./RestuarantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfResturant, setListOfResturant] = useState([]);
  const [inputText, setInputText] = useState("");
  const [filteredResturant, setFilteredResturant] = useState([]);
  useEffect(() => {
    // console.log("useEffect Calleed")
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.239907453306518&lng=86.98135815560819&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setListOfResturant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredResturant(  json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  return listOfResturant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search-container">
          <input
            type="text"
            value={inputText}
            onChange={(e) => {
              setInputText(e.target.value);
            }}
          />
          <button
            type="button"
            onClick={() => {
              console.log(inputText);
           

              const filterRestaurant = (filteredList = listOfResturant.filter(
                (res) => res.info.name.toLowerCase().includes(inputText.toLowerCase())
              ));
              setFilteredResturant(filterRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="btn-filter"
          onClick={() => {
            filteredList = listOfResturant.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfResturant(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredResturant.map((restaurant) => (
          <RestuarantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
