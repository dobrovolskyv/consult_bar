import React, { FC } from 'react'
import { Navbar } from '../../components/Navbar/Navbar'

const MenuPage: FC = () => {
  return (
    <div>
      <Navbar />
        {/* <h2 className='text-4xl text-center py-20 bg-sky-900 text-white'>Разработка меню</h2> */}
        <h2 className='text-4xl text-center py-20 bg-sky-900 text-white'>მენიუს განვითარება</h2>
      <div className="container py-10 px-1">
        {/* <p className='text-2xl '>Компания CONSULT BAR профессионально занимаемся разработкой меню для ресторанов, баров, кофеен, кафе и ночных клубов уже более 10 лет</p> */}
        <p className='text-2xl '>CONSULT BAR 10 წელზე მეტია პროფესიონალურად ავითარებს მენიუს რესტორნების, ბარების, ყავის მაღაზიების, კაფეებისა და ღამის კლუბებისთვის.</p>
        <ul className='flex flex-col md:flex-row justify-between align-middle mt-4'>
          <li className='w-56'>
            <p className='text-2xl md:text-4xl font-bold'>500+</p>
            <p className='text-xl mt-2'>Разработано рецептов</p>
          </li>
          <li className='w-56'>
            <p className='text-2xl md:text-4xl font-bold'>28</p>
            <p className='text-xl mt-2'>Реализовано меню</p>
          </li>
          <li className='w-56'>
            <p className='text-2xl md:text-4xl font-bold'>50 000+</p>
            <p className='text-xl mt-2'>Продано наших смешанных напитков в ресторанах</p>
          </li>
          <li className='w-56'>
            <p className='text-2xl md:text-4xl font-bold'>13 лет</p>
            <p className='text-xl mt-2'>В барной индустрии</p>
          </li>
        </ul>
      <div className="wrapper mt-20 w-full md:w-4/5 m-auto">
        <div className="flex flex-col-reverse md:flex-row justify-between">
          <div className=" w-full md:w-3/5 mr-10">
          {/* <h3 className='text-2xl mb-4'>Коктейльное меню</h3> */}
          <h3 className='text-2xl mb-4'>კოქტეილის მენიუ</h3>
          {/* <p>Разработаем для вашего заведения коктейльное меню с учетом всех последних трендов, с учетом концепции, локации и подходящими себестоимостями и т.д.</p> */}
          <p>ჩვენ შევიმუშავებთ კოქტეილის მენიუს თქვენი დაწესებულებისთვის, ყველა უახლესი ტენდენციის გათვალისწინებით, კონცეფციის, ადგილმდებარეობის და შესაფერისი ხარჯების გათვალისწინებით და ა.შ.</p>
          {/* <p className='font-bold mt-4'>Стоимость от 1000 лари до 3000 лари </p> */}
          <p className='font-bold mt-4'>ღირებულება 1000 ლარიდან 3000 ლარამდე </p>
          </div>
          <img className='w-5/5 md:w-2/5' src="https://imgs.search.brave.com/1VcAgOfKxPfMZKj0cvqESf_gTBEtVZLuEelktRmzIk0/rs:fit:1152:1200:1/g:ce/aHR0cHM6Ly9iZWxs/eWZ1bGwubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIxLzA0/L1NlYWJyZWV6ZS1D/b2NrdGFpbC1ibG9n/LTExNTJ4MTUzNi5q/cGc" alt="df" />
        </div>
        <div className="flex justify-between flex-col-reverse md:flex-row-reverse mt-12">
          <div className="w-full md:w-3/5 ml-10">
          {/* <h3 className='text-2xl mb-4'>Чайное меню</h3> */}
          <h3 className='text-2xl mb-4'>ჩაის მენიუ</h3>
         
          {/* <p>Наш профессиональный чайный-сомелье разработает для вашего заведения чайное меню с учетом всех последних тенденций, региональных предпочтений и формата заведения</p> */}
          <p>ჩვენი პროფესიონალი ჩაის სომელიე შეიმუშავებს ჩაის მენიუს თქვენი დაწესებულებისთვის, ყველა უახლესი ტენდენციის, რეგიონული პრეფერენციებისა და დაწესებულების ფორმატის გათვალისწინებით.</p>
         {/* <p>разрабатывается фруктовые горячие и холодные чаи</p> */}
         <p>მუშავდება ხილის ცხელი და ცივი ჩაი</p>
          {/* <p className='font-bold mt-4'>Стоимость от 500 лари</p> */}
          <p className='font-bold mt-4'>ფასი 500 ლარიდან</p>
          </div>
          <img className='w-full md:w-2/5' src="https://www.m24.ru/b/d/nBkSUhL2hFUum82wJr6BrNOp2Z318Ji-miDHnvyDoGuQYX7XByXLjCdwu5tI-BaO-42NvWWBK8AqGfS8kjIzIymM8G1N_xHb1A=-hbbDq2N9Bi-2C4pFFsqNg.jpg" alt="df" />
        </div>
        <div className="flex flex-col-reverse md:flex-row justify-between mt-12">
          <div className="w-full md:w-3/5 mr-10">
          {/* <h3 className='text-2xl mb-4'>Кофейное меню</h3> */}
          <h3 className='text-2xl mb-4'>ყავის მენიუ</h3>
          {/* <p>Наш профессиональный бариста разработает для вашего заведения кофейное меню с учетом всех последних трендов и возможностей вашего заведения</p> */}
          <p>ჩვენი პროფესიონალი ბარისტა შეიმუშავებს ყავის მენიუს თქვენი დაწესებულებისთვის, თქვენი დაწესებულების ყველა უახლესი ტენდენციისა და შესაძლებლობების გათვალისწინებით.</p>
         {/* <p>разрабатывается фруктовые горячие и холодные чаи</p> */}
         <p>მუშავდება ხილის ცხელი და ცივი ჩაი</p>
          {/* <p className='font-bold mt-4'>Стоимость от 500 лари </p> */}
          <p className='font-bold mt-4'>ფასი 500 ლარიდან</p>
          </div>
          <img className='w-full md:w-2/5' src="https://media.gettyimages.com/id/1035061554/photo/a-cup-of-latte-on-wooden-table.jpg?s=612x612&w=gi&k=20&c=q6a54UxjkweHyKcN2sGlFSRxPcKJpviNFwCEkdSvZIE=" alt="df" />
        </div>
        <div className="flex justify-between flex-col-reverse md:flex-row-reverse mt-12">
          <div className="w-full md:w-3/5 ml-10">
          {/* <h3 className='text-2xl mb-4'>барное меню</h3> */}
          <h3 className='text-2xl mb-4'>ბარის მენიუ</h3>
          {/* <p> Разработаем барное меню под ключ с учетом региональных предпочтений , концепции вашего заведения, последних трендов и по самым выгодным закупочным ценам, т.к. мы тесно сотрудничаем со многими поставщиками и производимыми в сегменте HoReCa</p> */}
          <p> ჩვენ შევიმუშავებთ ანაზრაურების ბარის მენიუს რეგიონალური პრეფერენციების, თქვენი დაწესებულების კონცეფციის, უახლესი ტენდენციების და ყველაზე ხელსაყრელი შესყიდვის ფასების გათვალისწინებით, რადგან ჩვენ მჭიდროდ ვთანამშრომლობთ HoReCa სეგმენტის ბევრ მომწოდებელთან და მწარმოებელთან</p>
          {/* <p className='font-bold mt-4'>Стоимость от 1000 до 2000 лари</p> */}
          <p className='font-bold mt-4'>Стоимость от 1000 до 2000 лари</p>
          </div>
          <img className='w-full md:w-2/5' src="/image/cocktail_2.jpg" alt="df" />
        </div>
        <div className="flex flex-col-reverse md:flex-row justify-between mt-12">
          <div className="w-full md:w-3/5 mr-10">
          {/* <h3 className='text-2xl mb-4'>винное меню</h3> */}
          <h3 className='text-2xl mb-4'>ღვინის მენიუ</h3>
          {/* <p>Наш профессиональный сомелье разработает для вашего заведения винное меню с учетом всех последних тенденций, концепции и региональных предпочтений</p> */}
          <p>ჩვენი პროფესიონალი სომელიე შეიმუშავებს ღვინის მენიუს თქვენი დაწესებულებისთვის, ყველა უახლესი ტენდენციის, კონცეფციისა და რეგიონალური პრეფერენციების გათვალისწინებით.</p>
          {/* <p className='font-bold mt-4'>Стоимость от 1000</p> */}
          <p className='font-bold mt-4'>ფასი 1000 ლარიდან</p>
          </div>
          <img className='w-full md:w-3/5' src="/image/wine2.jpg" alt="df" />
        </div>
        <div className="flex justify-between flex-col-reverse md:flex-row-reverse mt-12">
          <div className="w-full md:w-3/5 ml-10">
          {/* <h3 className='text-2xl mb-4'>Стоимость разработки одного рецепта</h3> */}
          <h3 className='text-2xl mb-4'>ერთი რეცეპტის შემუშავების ღირებულება</h3>
          {/* <p>Разработаем для вашего заведения коктейльное меню с учетом всех последних трендов, с учетом концепции, локации и подходящими себестоимостями и т.д.</p> */}
          <p>ჩვენ შევიმუშავებთ კოქტეილის მენიუს თქვენი დაწესებულებისთვის, ყველა უახლესი ტენდენციის გათვალისწინებით, კონცეფციის, ადგილმდებარეობის და შესაფერისი ხარჯების გათვალისწინებით და ა.შ.</p>
          {/* <p className='font-bold mt-4'>100 лари</p> */}
          <p className='font-bold mt-4'>100 ლარი</p>
          </div>
          <img className='w-full md:w-2/5' src="/image/cocktail_4.jpg" alt="df" />
        </div>
    
      </div>
      </div>
    </div>
  )
}

export default MenuPage