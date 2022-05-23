import { useNavigate } from "react-router-dom"

export default function RestaurantCard({place}){
const navigate = useNavigate();

    function handleClick(){
        navigate(`/restaurant/${place.slug}`)
    }

    return(

<div  onClick={handleClick} className="restaurantcard">
                  <h3>{place.name}</h3>
                  <img src={place.image_url} alt={place.name} />
</div>
    )
}