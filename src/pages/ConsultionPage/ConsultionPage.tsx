import React,{FC} from 'react'
import Contacts from '../../components/Contacts/Contacts'
import { Navbar } from '../../components/Navbar/Navbar'

const Consultion:FC = () => {
  return (
    <div>
      <Navbar/>
      <h1 className='text-4xl text-center py-20 bg-sky-900 text-white'>КОНСУЛЬТАЦИЯ</h1>
      <div className="container">
     
      <div className="py-10">
        <div>
          <p className="text-4xl my-4">Вводная консультация</p>
          <ul>
            <li>
              <p>Мы с большим удовольствием проконсультируем Вас по любому вопросу связанному с баром по телефону</p>
            </li>
            <li>
              <p className='my-4 font-bold'>Бесплатно</p>
            </li>
            <li>
              <p></p>
            </li>
          </ul>
        </div>
        <div className="">
          <p className="text-4xl my-4">Консультация онлайн</p>
          <ul>
            <li>
              <p>Наши специалисты проведут подробную консультацию в онлайн-формате, где разберут детально все интересующие Вас вопросы по Вашему бару.</p>
            </li>
            <li>
              <p>Предварительно согласовав удобный для Вас день и время</p>
            </li>
            <li>
              <p className='my-4 font-bold'>Стоимость от 100 лари-200лари </p>
            </li>
          </ul>
        </div>
        <div className="">
          <p className="text-4xl my-4">Консультация на объекте</p>
          <ul>
            <li>
              <p>Наш специалист приедет к вам и проведет личную консультацию по всем интересующим барным вопросам:</p>
            </li>
            <li>
              <p>Как увеличить продажи бара.</p>
            </li>
            <li>
              <p>Планирование барного пространства.</p>
            </li>
            <li>
              <p>По выбору проверенных поставщиков оборудования, посуды и барного инвентаря.</p>
            </li>
            <li>
              <p>По выбору поставщиков алкоголя, б/а напиткам по наиболее выгодным условиям и ценам.</p>
            </li>
            <li>
              <p>По разработке коктейльной, барной, чайной, кофейной картам.</p>
            </li>
            <li>
              <p>По сезонным трендам и т.д.</p>
            </li>
            <li>
              <p className='my-4 font-bold'>Стоимость от 300-500лари</p>
            </li>
          </ul>
        </div>
      </div>
    
      </div>
    </div>
  )
}

export default Consultion