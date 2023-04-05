import React, {FC} from 'react'
import { Navbar } from '../../components/Navbar/Navbar'

const Delivery: FC=()=> {
  return (
    <div>
      <Navbar/>
        <h2 className='text-4xl text-center py-20 bg-sky-900 text-white'>Доставка коктейлей</h2>
      <div className="container py-20">
        <p className='text-xl'>Так же, вы можете закать у нас коктейли для вечеринки, дня рождения, любого вашег опраздника или просто , что бы хорошо провести вечер</p>
        <p className='text-xl mt-4'>Мы приготовим вам коктейли или премиксы, расфосуем по бутылкам и привезем вам домой. Вам останется только смешать и налить дома в бокал и добавить лёд.</p>
        <p className='text-xl mt-4'>Ассортимент коктейлей на заказ уточняйте по телефону.</p>
      </div>
    </div>
  )
}

export default Delivery