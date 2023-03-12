import React, { FC } from 'react'
import { Navbar } from '../../components/Navbar/Navbar'

const MenuPage: FC = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h2>Разработка меню</h2>
        <p>Компания CONSULT BAR профессионально занимаемся разработкой меню для ресторанов, баров, кофеен, кафе и ночных клубов уже более 10 лет</p>

        <ul>
          <li>
            <p>500+</p>
            <p>Разработано рецептов</p>
          </li>
          <li>
            <p>198</p>
            <p>Реализовано меню</p>
          </li>
          <li>
            <p>
              Реализовано меню
              400 000+</p>
            <p>Продано наших смешанных напитков в ресторанах</p>
          </li>
          <li>
            <p>13 лет</p>
            <p>В барной индустрии</p>
          </li>
        </ul>
      <div className="wrapper">
        <div className="flex justify-between">
          <div className="">
          <h3>Коктейльное меню</h3>
          <p>Разработаем для вашего заведения коктейльное меню с учетом всех последних трендов, с учетом концепции, локации и подходящими себестоимостями и т.д.</p>
          <p>Стоимость от 70000</p>
          </div>
          <img className='w-2/5' src="https://imgs.search.brave.com/1VcAgOfKxPfMZKj0cvqESf_gTBEtVZLuEelktRmzIk0/rs:fit:1152:1200:1/g:ce/aHR0cHM6Ly9iZWxs/eWZ1bGwubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIxLzA0/L1NlYWJyZWV6ZS1D/b2NrdGFpbC1ibG9n/LTExNTJ4MTUzNi5q/cGc" alt="df" />
        </div>
        <div className="flex justify-between">
          <div className="">
          <h3>Чайное меню</h3>
          <p>Наш профессиональный чайный-сомелье разработает для вашего заведения чайное меню с учетом всех последних тенденций, региональных предпочтений и формата заведения</p>
          <p>Стоимость от 50 000</p>
          </div>
          <img className='w-2/5' src="https://imgs.search.brave.com/1VcAgOfKxPfMZKj0cvqESf_gTBEtVZLuEelktRmzIk0/rs:fit:1152:1200:1/g:ce/aHR0cHM6Ly9iZWxs/eWZ1bGwubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIxLzA0/L1NlYWJyZWV6ZS1D/b2NrdGFpbC1ibG9n/LTExNTJ4MTUzNi5q/cGc" alt="df" />
        </div>
        <div className="flex justify-between">
          <div className="">
          <h3>Кофейное меню</h3>
          <p>Наш профессиональный бариста разработает для вашего заведения кофейное меню с учетом всех последних трендов и возможностей вашего заведения</p>
          <p>Стоимость от 50 000 </p>
          </div>
          <img className='w-2/5 ' src="https://imgs.search.brave.com/1VcAgOfKxPfMZKj0cvqESf_gTBEtVZLuEelktRmzIk0/rs:fit:1152:1200:1/g:ce/aHR0cHM6Ly9iZWxs/eWZ1bGwubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIxLzA0/L1NlYWJyZWV6ZS1D/b2NrdGFpbC1ibG9n/LTExNTJ4MTUzNi5q/cGc" alt="df" />
        </div>
        <div className="flex justify-between">
          <div className="">
          <h3>Коктейльное меню</h3>
          <p>Разработаем для вашего заведения коктейльное меню с учетом всех последних трендов, с учетом концепции, локации и подходящими себестоимостями и т.д.</p>
          <p>Стоимость от </p>
          </div>
          <img className='w-2/5' src="https://imgs.search.brave.com/1VcAgOfKxPfMZKj0cvqESf_gTBEtVZLuEelktRmzIk0/rs:fit:1152:1200:1/g:ce/aHR0cHM6Ly9iZWxs/eWZ1bGwubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIxLzA0/L1NlYWJyZWV6ZS1D/b2NrdGFpbC1ibG9n/LTExNTJ4MTUzNi5q/cGc" alt="df" />
        </div>
        <div className="flex justify-between">
          <div className="">
          <h3>Стоимость разработки одного рецепта</h3>
          <p>Разработаем для вашего заведения коктейльное меню с учетом всех последних трендов, с учетом концепции, локации и подходящими себестоимостями и т.д.</p>
          <p>5 000</p>
          </div>
          <img className='w-2/5' src="https://imgs.search.brave.com/1VcAgOfKxPfMZKj0cvqESf_gTBEtVZLuEelktRmzIk0/rs:fit:1152:1200:1/g:ce/aHR0cHM6Ly9iZWxs/eWZ1bGwubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIxLzA0/L1NlYWJyZWV6ZS1D/b2NrdGFpbC1ibG9n/LTExNTJ4MTUzNi5q/cGc" alt="df" />
        </div>
    
      </div>
      </div>
    </div>
  )
}

export default MenuPage