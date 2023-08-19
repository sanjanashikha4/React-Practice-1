import { CDN_URL } from "../../utils/constant";

const RestuarantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, costForTwo, avgRatingString, id } =
    resData?.info;
  
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="restaurant-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo} For Two</h4>
      <h4>{avgRatingString} stars</h4>
    </div>
  );
};

export default RestuarantCard;
