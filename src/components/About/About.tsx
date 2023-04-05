import React, {FC} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay} from 'swiper'
import 'swiper/css';
import "swiper/css/effect-fade";


const About:FC = () => {
  return (
    <div className="about__inner container flex justify-between mt-40 w-4/5">
      <div className="about__left">
         <Swiper
    spaceBetween={30}
    centeredSlides={true}
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
    
    effect={"fade"}
    modules={[Autoplay, EffectFade]}
    loop={true}
    className="  w-1/5"
  >
    <SwiperSlide><img className='w-full' src="/image/cocktail_1.jpg" alt="" /></SwiperSlide>
    <SwiperSlide><img className='w-full' src="/image/cocktail_2.jpg" alt="" /></SwiperSlide>
    <SwiperSlide><img className='w-full' src="/image/cocktail_3.jpg" alt="" /></SwiperSlide>
    <SwiperSlide><img className='w-full' src="/image/cocktail_4.jpg" alt="" /></SwiperSlide>


  
  </Swiper>
      </div>
      <div className="about__right">
      <div className="about__decsr ml-10">
                <p className='text-lg'>Consult Bar - это барная консалтинговая компания, объединяющая сильнейших мастеров барного и ресторанного бизнеса.
                    Основатели компании Добровльский Влад и Занекидзе Якоб, около 12 лет в барной индустрии, 3 года руководили барами в Санкт-Петербурге и Батуми.
                    За нашими плечами открытие и перезагрузка около 10 баров под ключ.
                    Поддерживаем крепкие отношения с ведущими производителями и поставщиками в барной индустрии.
                    Оказываем услуги по постановке баров как с полного нуля, так и перезагружаем существующие.</p>
    
            </div>
      </div>
    </div>
   
  )
}

export default About