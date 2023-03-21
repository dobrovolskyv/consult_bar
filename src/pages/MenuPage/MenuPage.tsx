import React, { FC } from 'react'
import { Navbar } from '../../components/Navbar/Navbar'

const MenuPage: FC = () => {
  return (
    <div>
      <Navbar />
        <h2 className='text-4xl text-center py-20 bg-sky-900 text-white'>Разработка меню</h2>
      <div className="container">
        <p className='text-2xl '>Компания CONSULT BAR профессионально занимаемся разработкой меню для ресторанов, баров, кофеен, кафе и ночных клубов уже более 10 лет</p>

        <ul className='flex justify-between align-middle mt-4'>
          <li className='w-56'>
            <p className='text-4xl font-bold'>500+</p>
            <p className='text-xl mt-2'>Разработано рецептов</p>
          </li>
          <li className='w-56'>
            <p className='text-4xl font-bold'>198</p>
            <p className='text-xl mt-2'>Реализовано меню</p>
          </li>
          <li className='w-56'>
            <p className='text-4xl font-bold'>400 000+</p>
            <p className='text-xl mt-2'>Продано наших смешанных напитков в ресторанах</p>
          </li>
          <li className='w-56'>
            <p className='text-4xl font-bold'>13 лет</p>
            <p className='text-xl mt-2'>В барной индустрии</p>
          </li>
        </ul>
      <div className="wrapper mt-20 w-3/5 m-auto">
        <div className="flex justify-between">
          <div className=" w-3/5 mr-10">
          <h3 className='text-2xl mb-4'>Коктейльное меню</h3>
          <p>Разработаем для вашего заведения коктейльное меню с учетом всех последних трендов, с учетом концепции, локации и подходящими себестоимостями и т.д.</p>
          <p className='font-bold mt-4'>Стоимость от 1000 лари до 3000 лари </p>
          </div>
          <img className='w-2/5' src="https://imgs.search.brave.com/1VcAgOfKxPfMZKj0cvqESf_gTBEtVZLuEelktRmzIk0/rs:fit:1152:1200:1/g:ce/aHR0cHM6Ly9iZWxs/eWZ1bGwubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIxLzA0/L1NlYWJyZWV6ZS1D/b2NrdGFpbC1ibG9n/LTExNTJ4MTUzNi5q/cGc" alt="df" />
        </div>
        <div className="flex justify-between flex-row-reverse mt-12">
          <div className="w-3/5 ml-10">
          <h3 className='text-2xl mb-4'>Чайное меню</h3>
         
          <p>Наш профессиональный чайный-сомелье разработает для вашего заведения чайное меню с учетом всех последних тенденций, региональных предпочтений и формата заведения</p>
         <p>разрабатывается фруктовые горячие и холодные чаи</p>
          <p className='font-bold mt-4'>Стоимость от 500 лари</p>
          </div>
          <img className='w-2/5' src="https://imgs.search.brave.com/1VcAgOfKxPfMZKj0cvqESf_gTBEtVZLuEelktRmzIk0/rs:fit:1152:1200:1/g:ce/aHR0cHM6Ly9iZWxs/eWZ1bGwubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIxLzA0/L1NlYWJyZWV6ZS1D/b2NrdGFpbC1ibG9n/LTExNTJ4MTUzNi5q/cGc" alt="df" />
        </div>
        <div className="flex justify-between mt-12">
          <div className="w-3/5 mr-10">
          <h3 className='text-2xl mb-4'>Кофейное меню</h3>
          <p>Наш профессиональный бариста разработает для вашего заведения кофейное меню с учетом всех последних трендов и возможностей вашего заведения</p>
         <p>разрабатывается фруктовые горячие и холодные чаи</p>
          <p className='font-bold mt-4'>Стоимость от 500 лари </p>
          </div>
          <img className='w-2/5 ' src="https://imgs.search.brave.com/1VcAgOfKxPfMZKj0cvqESf_gTBEtVZLuEelktRmzIk0/rs:fit:1152:1200:1/g:ce/aHR0cHM6Ly9iZWxs/eWZ1bGwubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIxLzA0/L1NlYWJyZWV6ZS1D/b2NrdGFpbC1ibG9n/LTExNTJ4MTUzNi5q/cGc" alt="df" />
        </div>
        <div className="flex justify-between flex-row-reverse mt-12">
          <div className="w-3/5 ml-10">
          <h3 className='text-2xl mb-4'>барное меню</h3>
          <p> Разработаем барное меню под ключ с учетом региональных предпочтений , концепции вашего заведения, последних трендов и по самым выгодным закупочным ценам, т.к. мы тесно сотрудничаем со многими поставщиками и производимыми в сегменте HoReCa</p>
          <p className='font-bold mt-4'>Стоимость от 1000 до 2000 лари</p>
          </div>
          <img className='w-2/5' src="https://imgs.search.brave.com/1VcAgOfKxPfMZKj0cvqESf_gTBEtVZLuEelktRmzIk0/rs:fit:1152:1200:1/g:ce/aHR0cHM6Ly9iZWxs/eWZ1bGwubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIxLzA0/L1NlYWJyZWV6ZS1D/b2NrdGFpbC1ibG9n/LTExNTJ4MTUzNi5q/cGc" alt="df" />
        </div>
        <div className="flex justify-between mt-12">
          <div className="w-3/5 mr-10">
          <h3 className='text-2xl mb-4'>винное меню</h3>
          <p>Наш профессиональный сомелье разработает для вашего заведения винное меню с учетом всех последних тенденций, концепции и региональных предпочтений</p>
          <p className='font-bold mt-4'>Стоимость от 1000</p>
          </div>
          <img className='w-2/5' src="https://imgs.search.brave.com/1VcAgOfKxPfMZKj0cvqESf_gTBEtVZLuEelktRmzIk0/rs:fit:1152:1200:1/g:ce/aHR0cHM6Ly9iZWxs/eWZ1bGwubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIxLzA0/L1NlYWJyZWV6ZS1D/b2NrdGFpbC1ibG9n/LTExNTJ4MTUzNi5q/cGc" alt="df" />
        </div>
        <div className="flex justify-between flex-row-reverse mt-12">
          <div className="w-3/5 ml-10">
          <h3 className='text-2xl mb-4'>Стоимость разработки одного рецепта</h3>
          <p>Разработаем для вашего заведения коктейльное меню с учетом всех последних трендов, с учетом концепции, локации и подходящими себестоимостями и т.д.</p>
          <p className='font-bold mt-4'>100 лари</p>
          </div>
          <img className='w-2/5' src="https://imgs.search.brave.com/1VcAgOfKxPfMZKj0cvqESf_gTBEtVZLuEelktRmzIk0/rs:fit:1152:1200:1/g:ce/aHR0cHM6Ly9iZWxs/eWZ1bGwubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIxLzA0/L1NlYWJyZWV6ZS1D/b2NrdGFpbC1ibG9n/LTExNTJ4MTUzNi5q/cGc" alt="df" />
        </div>
    
      </div>
      </div>
    </div>
  )
}

export default MenuPage