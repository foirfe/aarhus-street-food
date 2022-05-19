import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
   const navigate = useNavigate();
   const [places, setPlaces] = useState([]);

   useEffect(() => {
      async function getData() {
         const response = await fetch("./data/da_places.json");
         const data = await response.json();
         setPlaces(data);
      }
      getData();
   }, []);
   console.log(places);

   function handleClick(){
      navigate("/udforsk")
   }
   
   function handleRestaurantClick()
   {
     navigate(`/restaurant/${this.slug}`)
      }
 


   return (
      <div className="homepage">
         <h1>Velkommen til</h1>
         <img src="" alt="Aarhus Street Food" />
         <div>
            <p>
               Lyst til at prøve noget nyt? Prøv vores nye <span onClick={handleClick}>discover</span> funktion og find din nye yndlingsret
            </p>
            <button onClick={handleClick}>Prøv den her</button>
         </div>
         <div>
            <h2>Ugens udvalgte boder</h2>
         </div>
         <div>
            {places.map(place => (
               <div key={place.id} onClick={handleRestaurantClick}>
                  <h3>{place.name}</h3>
                  <img src={place.image_url} alt={place.name} />
               </div>
            ))}
         </div>
      </div>
   );
}
