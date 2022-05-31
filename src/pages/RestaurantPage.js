import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CircleFlag } from "react-circle-flags";
import MenuCard from "../components/MenuCard";

export default function RestaurantPage() {
   const params = useParams();
   const placeSlug = params.slug;
   const [place, setPlace] = useState([]);
   const [menu, setMenu] = useState([]);
   
   useEffect(()=>{
      //Fetch af boder og menukort for at så kunne finde hvilken bod der er blevet valgt baseret af params.
      async function getPlaceAndMenu(){
         const response = await fetch("../data/da_places.json");
         const data = await response.json();
         const filterRestaurant = data.filter(item => placeSlug.includes(item.slug));
         const Restaurantname = filterRestaurant[0].name
         setPlace(filterRestaurant);
         const response2 = await fetch("../data/da_menu.json");
         const data2 = await response2.json();
         const filterMenu = data2.filter(item => Restaurantname.includes(item.restaurant));
         setMenu(filterMenu)
      }
      getPlaceAndMenu();
   },[placeSlug, place.name])

   return (
   <div className="restaurantpage">
{place.map(selectedplace =>(
   <div key={selectedplace.id}>
      <div className="restaurantheader">
      <h1>{selectedplace.name}</h1>
      <img src={selectedplace.image_url} alt={selectedplace.name}/>
      </div>
      <div className="moreinfo">
         <div className="nationality">
         <CircleFlag countryCode={selectedplace.countrycode}/>
      <p>{selectedplace.nationality}</p>
      </div>
      <p>{selectedplace.desc}</p>
      </div>
   </div>
))}
<div className="menu">
{menu.map(menuItem =>(  
   <MenuCard key={menuItem.id} menuItem={menuItem}/>
))}
</div>
   </div>
)
}
