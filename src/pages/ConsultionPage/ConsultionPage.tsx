import React,{FC} from 'react'
import Contacts from '../../components/Contacts/Contacts'
import { Navbar } from '../../components/Navbar/Navbar'

const Consultion:FC = () => {
  return (
    <div>
      <Navbar/>
      {/* <h1 className='text-4xl text-center py-20 bg-sky-900 text-white'>КОНСУЛЬТАЦИЯ</h1> */}
      <h1 className='text-4xl text-center py-20 bg-sky-900 text-white'>ᲙᲝᲜᲡᲣᲚᲢᲐᲪᲘᲐ</h1>
      <div className="container">
     
      <div className="py-10">
        <div>
          {/* <p className="text-4xl my-4">Вводная консультация</p> */}
          <p className="text-4xl my-4">გაცნობითი კონსულტაცია</p>
          <ul>
            <li>
              {/* <p>Мы с большим удовольствием проконсультируем Вас по любому вопросу связанному с баром по телефону</p> */}
              <p>ბართან დაკავშირებულ ნებისმიერ საკითხზე სიამოვნებით მოგაწოდებთ ტელეფონით</p>
            </li>
            <li>
              {/* <p className='my-4 font-bold'>Бесплатно</p> */}
              <p className='my-4 font-bold'>Უფასოდ</p>
            </li>
            <li>
              <p></p>
            </li>
          </ul>
        </div>
        <div className="">
          {/* <p className="text-4xl my-4">Консультация онлайн</p> */}
          <p className="text-4xl my-4">ონლაინ კონსულტაცია</p>
          <ul>
            <li>
              {/* <p>Наши специалисты проведут подробную консультацию в онлайн-формате, где разберут детально все интересующие Вас вопросы по Вашему бару.</p> */}
              <p>ჩვენი სპეციალისტები ჩაატარებენ დეტალურ კონსულტაციას ონლაინ ფორმატში, სადაც დეტალურად გაანალიზებენ ყველა იმ კითხვას, რომელიც გაინტერესებთ თქვენს ბართან დაკავშირებით.</p>
            </li>
            <li>
              {/* <p>Предварительно согласовав удобный для Вас день и время</p> */}
              <p>თქვენთვის მოსახერხებელი დღისა და დროის წინასწარ მოწყობით</p>
            </li>
            <li>
              {/* <p className='my-4 font-bold'>Стоимость от 100 лари-200лари </p> */}
              <p className='my-4 font-bold'>ღირებულება 100- 200 ლარი</p>
            </li>
          </ul>
        </div>
        <div className="">
          {/* <p className="text-4xl my-4">Консультация на объекте</p> */}
          <p className="text-4xl my-4">ადგილზე კონსულტაცია</p>
          <ul>
            <li>
              {/* <p>Наш специалист приедет к вам и проведет личную консультацию по всем интересующим барным вопросам:</p> */}
              <p>ჩვენი სპეციალისტი მოვა თქვენთან და ჩაატარებს პერსონალურ კონსულტაციას ბარის ყველა საინტერესო საკითხზე:</p>
            </li>
            <li>
              {/* <p>Как увеличить продажи бара.</p> */}
              <p>როგორ გავზარდოთ ბარის გაყიდვები.</p>
            </li>
            <li>
              {/* <p>Планирование барного пространства.</p> */}
              <p>ბარის სივრცის დაგეგმვა.</p>
            </li>
            <li>
              {/* <p>По выбору проверенных поставщиков оборудования, посуды и барного инвентаря.</p> */}
              <p>აღჭურვილობის, ჭურჭლისა და ბარის მარაგის სანდო მომწოდებლების არჩევისას.</p>
            </li>
            <li>
              {/* <p>По выбору поставщиков алкоголя, б/а напиткам по наиболее выгодным условиям и ценам.</p> */}
              <p>ალკოჰოლის მომწოდებლების არჩევისას, სასმელი სვამს ყველაზე ხელსაყრელ პირობებში და ფასებში.</p>
            </li>
            <li>
              {/* <p>По разработке коктейльной, барной, чайной, кофейной картам.</p> */}
              <p>კოქტეილის, ბარის, ჩაის, ყავის ბარათების შემუშავებაზე.</p>
            </li>
            <li>
              {/* <p>По сезонным трендам и т.д.</p> */}
              <p>სეზონური ტენდენციების მიხედვით და ა.შ.</p>
            </li>
            <li>
              {/* <p className='my-4 font-bold'>Стоимость от 300-500лари</p> */}
              <p className='my-4 font-bold'>ღირებულება 300-500 ლარი</p>
            </li>
          </ul>
        </div>
      </div>
    
      </div>
    </div>
  )
}

export default Consultion