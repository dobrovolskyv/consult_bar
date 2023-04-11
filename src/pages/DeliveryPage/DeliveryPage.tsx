import React, {FC} from 'react'
import { Navbar } from '../../components/Navbar/Navbar'

const Delivery: FC=()=> {
  return (
    <div>
      <Navbar/>
        {/* <h2 className='text-4xl text-center py-20 bg-sky-900 text-white'>Доставка коктейлей</h2> */}
        <h2 className='text-4xl text-center py-20 bg-sky-900 text-white'>კოქტეილის მიწოდება</h2>
      <div className="container py-20">
        {/* <p className='text-xl'>Так же, вы можете закать у нас коктейли для вечеринки, дня рождения, любого вашег опраздника или просто , что бы хорошо провести вечер</p> */}
        <p className='text-xl'>ასევე, შეგიძლიათ კოქტეილები მოაყაროთ წვეულებაზე, დაბადების დღეზე, ნებისმიერ დღესასწაულზე ან უბრალოდ კარგი საღამოსთვის</p>
        {/* <p className='text-xl mt-4'>Мы приготовим вам коктейли или премиксы, расфосуем по бутылкам и привезем вам домой. Вам останется только смешать и налить дома в бокал и добавить лёд.</p> */}
        <p className='text-xl mt-4'>ჩვენ მოგიმზადებთ კოქტეილებს ან პრემიქსებს, ჩამოვასხამთ და მოგიტანთ სახლში. თქვენ უბრალოდ უნდა აურიოთ და სახლში ჩაასხით ჭიქაში და დაამატეთ ყინული.</p>
        {/* <p className='text-xl mt-4'>Ассортимент коктейлей на заказ уточняйте по телефону.</p> */}
        <p className='text-xl mt-4'>ტელეფონით მიუთითეთ კოქტეილების ასორტიმენტი.</p>
      </div>
    </div>
  )
}

export default Delivery