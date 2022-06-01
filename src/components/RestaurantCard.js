import { CircleFlag } from "react-circle-flags";
import { useNavigate } from "react-router-dom";

export default function RestaurantCard({ place }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/restaurant/${place.slug}`);
  }

  return (
    <div onClick={handleClick} className="restaurantcard">
      <img src={place.image_url} alt={place.name} />
      <div className="nameandnationality">
        <div className="nationality">
      <CircleFlag countryCode={place.countrycode} />
              <p>{place.nationality}</p>
        </div>
        <h3>{place.name}</h3>
      </div>
    </div>
  );
}
