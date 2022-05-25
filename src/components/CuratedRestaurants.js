import { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { EffectFade } from 'swiper';


export default function CuratedRestaurants()
{
    const [curatedPlaces, setCuratedPlaces] = useState([]);
    useEffect(()=>{
        async function getData(){
            const response = await fetch("./data/da_curatedplaces.json");
            const data = await response.json();
            setCuratedPlaces(data);
            console.log(curatedPlaces);
        }
        getData();
    },[])

    return(
        <div>
            
    
        
        <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[EffectFade]} effect="cards"
        >
     
              <SwiperSlide><div className="curatedplace">
                  <h2>{curatedPlaces[0]?.name}</h2>
                  <img src={curatedPlaces[0]?.image_url} alt={curatedPlaces[0]?.name}/>
                </div></SwiperSlide>
        <SwiperSlide><div className="curatedplace">
                  <h2>{curatedPlaces[1]?.name}</h2>
                  <img src={curatedPlaces[1]?.image_url} alt={curatedPlaces[1]?.name}/>
                </div></SwiperSlide>
            <SwiperSlide>
            <div className="curatedplace">
                  <h2>{curatedPlaces[2]?.name}</h2>
                  <img src={curatedPlaces[2]?.image_url} alt={curatedPlaces[2]?.name}/>
                </div></SwiperSlide>
            <SwiperSlide>
            <div className="curatedplace">
                  <h2>{curatedPlaces[3]?.name}</h2>
                  <img src={curatedPlaces[3]?.image_url} alt={curatedPlaces[3]?.name}/>
                </div></SwiperSlide>
            <SwiperSlide>
            <div className="curatedplace">
                  <h2>{curatedPlaces[4]?.name}</h2>
                  <img src={curatedPlaces[4]?.image_url} alt={curatedPlaces[4]?.name}/>
                </div></SwiperSlide>
        ...
      </Swiper>
        
      </div>
    )
}