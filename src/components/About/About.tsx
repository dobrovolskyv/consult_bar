import React, {FC} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay} from 'swiper'
import 'swiper/css';
import "swiper/css/effect-fade";


const About:FC = () => {
  return (
    <div className="about__inner container sm:flex sm:flex-col mt-10 lg:mt-40 w-4/5 md:flex-col lg:flex-row lg:justify-between">
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
    className="w-4/5 lg:w-80 z-10"
  >
    <SwiperSlide><img className='w-full' src="/image/cocktail_1.jpg" alt="" /></SwiperSlide>
    <SwiperSlide><img className='w-full' src="/image/cocktail_2.jpg" alt="" /></SwiperSlide>
    <SwiperSlide><img className='w-full' src="/image/cocktail_3.jpg" alt="" /></SwiperSlide>
    <SwiperSlide><img className='w-full' src="/image/cocktail_4.jpg" alt="" /></SwiperSlide>


  
  </Swiper>
      </div>
      <div className="about__right sm:mt-4 ">
      <div className="about__decsr sm:w-full lg:ml-10 ">
                {/* <p className='text-lg'>Consult Bar - это барная консалтинговая компания, объединяющая сильнейших мастеров барного и ресторанного бизнеса.
                    Основатели компании Добровльский Влад и Занекидзе Якоб, около 12 лет в барной индустрии, 3 года руководили барами в Санкт-Петербурге и Батуми.
                    За нашими плечами открытие и перезагрузка около 10 баров под ключ.
                    Поддерживаем крепкие отношения с ведущими производителями и поставщиками в барной индустрии.
                    Оказываем услуги по постановке баров как с полного нуля, так и перезагружаем существующие.</p> */}
                <p className='text-lg'>Consult Bar - არის ბარის საკონსულტაციო კომპანია, რომელიც აერთიანებს ბარისა და რესტორნების ბიზნესის უძლიერეს ოსტატებს.
                    კომპანიის დამფუძნებლები Dobrovlsky Vlad და Zanekidze Yakob, დაახლოებით 12 წელი ბარის ინდუსტრიაში, 3 წელი ხელმძღვანელობდნენ ბარებს სანქტ-პეტერბურგში და ბათუმში.
                    ჩვენი მხრების უკან არის დაახლოებით 10 ანაზრაურების ზოლის გახსნა და გადატვირთვა.
                    ჩვენ ვინარჩუნებთ ძლიერ ურთიერთობებს ბარის ინდუსტრიის წამყვან მწარმოებლებთან და მომწოდებლებთან.
                    ჩვენ გთავაზობთ ზოლის დაყენების სერვისებს როგორც ნულიდან, ისე არსებულის გადატვირთვაზე</p>
    
            </div>
      </div>
    </div>
   
  )
}

export default About