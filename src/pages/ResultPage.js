import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useNavigate } from "react-router-dom";

export default function ResultPage() {
   const navigate = useNavigate();
   const [menu, setMenu] = useState([]);
   useEffect(() => {
      //Filters
       function getFilters() {
          const filters = [];
         if(localStorage.getItem("spicy")){
            filters.push("spicy")
         }
         if(localStorage.getItem("sodt")){
            filters.push("sodt")
         }
         if(localStorage.getItem("mildt")){
            filters.push("mildt")
         }
         if(localStorage.getItem("krydret")){
            filters.push("krydret")
         }
         if(localStorage.getItem("friture")){
            filters.push("friture")
         }
         if(localStorage.getItem("plantebaseret")){
            filters.push("plantebaseret")
         }
         if(localStorage.getItem("smasulten")){
            filters.push("smasulten")
         }
         return filters
      };

      async function getData() {
         const response = await fetch("./data/da_menu.json");
         const data = await response.json();
         const filters = getFilters();
         const results = data.filter((item) => filters.includes(item.tags));
         results.sort(() => Math.random() - 0.5);
            function checkSafetyTags(){
               const safetyresults = [];
            if(localStorage.getItem("nuts")){
            const nonuts = results.filter(item => item.safetytags !== "nuts");
            nonuts.forEach(element => {
               safetyresults.push(element);
            });
         }
         if(localStorage.getItem("gluten")){
            const nogluten = results.filter(item => item.safetytags !== "gluten");
            nogluten.forEach(element => {
               safetyresults.push(element);
            });
         }
         if(localStorage.getItem("laktose")){
            const nolaktose = results.filter(item => item.safetytags !== "laktose");
            nolaktose.forEach(element => {
               safetyresults.push(element);
            });
         }
         console.log(safetyresults);
         return safetyresults;
      }
      const safetyresults = checkSafetyTags();
         if(localStorage.getItem("nuts")||localStorage.getItem("laktose")||localStorage.getItem("gluten"))
         {
         setMenu(safetyresults);
         }
         else {
            setMenu(results)
         }
      }

       
     
      getData();
   }, []);

function handleClick(menuItem){
   console.log(menuItem.slug);
   navigate(`/restaurant/${menuItem.slug}`)
}
   return (
      <div className="resultpage">
         <div className="result-banner">
         <h1>Discover</h1>
         </div>
         <p>Swipe igennem og opdag nye retter</p>
         <div>
            <Swiper
         spaceBetween={20}
            slidesPerView={1.9}
            centeredSlides={true}
            loop={true}
            mousewheel={true}
            preventClicks={true}
            preventClicksPropagation={true}>

            {menu.map((menuItem)=>(
               <SwiperSlide key={menuItem.id}>
                  <div className="resultcard" onClick={event => handleClick(menuItem)}>
                  <h2>{menuItem.name}</h2>
                  <h3>{menuItem.restaurant}</h3>
                  <img src={menuItem.image_url} alt={menuItem.name}/>
                  </div>
               </SwiperSlide>
            ))}
            </Swiper>
         </div>
      </div>
   );
}
