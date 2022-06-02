import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay"
import { useNavigate } from "react-router-dom";
import { CircleFlag } from "react-circle-flags";

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
         >
            <SwiperSlide id={0} onClick={handleClick}>
               <div className="curatedplace">
                  <img src={curatedPlaces[0]?.image_url} alt={curatedPlaces[0]?.name} />
                  <div className="curated_nationality">
                  <h2>{curatedPlaces[0]?.name}</h2>
                  <div className="nationality">
                  <CircleFlag countryCode={curatedPlaces[0]?.countrycode}/>
                  <p>{curatedPlaces[0]?.nationality}</p>
                  </div>
                  </div>
               </div>

            </SwiperSlide>
            <SwiperSlide id={1} onClick={handleClick}>
               <div className="curatedplace">
                  <img src={curatedPlaces[1]?.image_url} alt={curatedPlaces[1]?.name} />
                  <div className="curated_nationality">
                  <h2>{curatedPlaces[1]?.name}</h2>
                  <div className="nationality">
                  <CircleFlag countryCode={curatedPlaces[1]?.countrycode}/>
                  <p>{curatedPlaces[1]?.nationality}</p>
                  </div>
                  </div>
               </div>
            </SwiperSlide>
            <SwiperSlide id={2} onClick={handleClick}>
               <div className="curatedplace">
                  <img src={curatedPlaces[2]?.image_url} alt={curatedPlaces[2]?.name} />
                  <div className="curated_nationality">
                  <h2>{curatedPlaces[2]?.name}</h2>
                  <div className="nationality">
                  <CircleFlag countryCode={curatedPlaces[2]?.countrycode}/>
                  <p>{curatedPlaces[2]?.nationality}</p>
                  </div>
                  </div>
               </div>
            </SwiperSlide>
            <SwiperSlide id={3} onClick={handleClick}>
               <div className="curatedplace">
                  <img src={curatedPlaces[3]?.image_url} alt={curatedPlaces[3]?.name} />
                  <div className="curated_nationality">
                  <h2>{curatedPlaces[3]?.name}</h2>
                  <div className="nationality">
                  <CircleFlag countryCode={curatedPlaces[3]?.countrycode}/>
                  <p>{curatedPlaces[3]?.nationality}</p>
                  </div>
                  </div>
               </div>
            </SwiperSlide>
            <SwiperSlide id={4} onClick={handleClick}>
               <div className="curatedplace">
                  <img src={curatedPlaces[4]?.image_url} alt={curatedPlaces[4]?.name} />
                  <div className="curated_nationality">
                  <h2>{curatedPlaces[4]?.name}</h2>
                  <div className="nationality">
                  <CircleFlag countryCode={curatedPlaces[4]?.countrycode}/>
                  <p>{curatedPlaces[4]?.nationality}</p>
                  </div>
                  </div>
               </div>
            </SwiperSlide>
            ...
         </Swiper>
      </div>
   );
}
