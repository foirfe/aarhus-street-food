import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay"
import { useNavigate } from "react-router-dom";

export default function CuratedRestaurants() {
   const navigate = useNavigate();
   const [curatedPlaces, setCuratedPlaces] = useState([]);
   useEffect(() => {
      async function getData() {
         const response = await fetch("./data/da_curatedplaces.json");
         const data = await response.json();
         setCuratedPlaces(data);
         console.log(curatedPlaces);
      }
      getData();
   }, []);

   function handleClick(event) {
      const id = event.currentTarget.id;
      navigate(`/restaurant/${curatedPlaces[id]?.slug}`);
   }
   return (
      <div>
         <Swiper
            spaceBetween={20}
            slidesPerView={1.9}
            centeredSlides={true}
            loop={true}
            slideToClickedSlide={true}
            preventClicks={true}
            preventClicksPropagation={true}
            autoplay={{delay: 2000 }}
         >
            <SwiperSlide id={0} onClick={handleClick}>
               <div className="curatedplace">
                  <h2>{curatedPlaces[0]?.name}</h2>
                  <img src={curatedPlaces[0]?.image_url} alt={curatedPlaces[0]?.name} />
               </div>
            </SwiperSlide>
            <SwiperSlide id={1} onClick={handleClick}>
               <div className="curatedplace">
                  <h2>{curatedPlaces[1]?.name}</h2>
                  <img src={curatedPlaces[1]?.image_url} alt={curatedPlaces[1]?.name} />
               </div>
            </SwiperSlide>
            <SwiperSlide id={2} onClick={handleClick}>
               <div className="curatedplace">
                  <h2>{curatedPlaces[2]?.name}</h2>
                  <img src={curatedPlaces[2]?.image_url} alt={curatedPlaces[2]?.name} />
               </div>
            </SwiperSlide>
            <SwiperSlide id={3} onClick={handleClick}>
               <div className="curatedplace">
                  <h2>{curatedPlaces[3]?.name}</h2>
                  <img src={curatedPlaces[3]?.image_url} alt={curatedPlaces[3]?.name} />
               </div>
            </SwiperSlide>
            <SwiperSlide id={4} onClick={handleClick}>
               <div className="curatedplace">
                  <h2>{curatedPlaces[4]?.name}</h2>
                  <img src={curatedPlaces[4]?.image_url} alt={curatedPlaces[4]?.name} />
               </div>
            </SwiperSlide>
            ...
         </Swiper>
      </div>
   );
}
