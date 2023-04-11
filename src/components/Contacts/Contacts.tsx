import React,{FC} from 'react'

const Contacts:FC = () => {
  return (
    <div className='bg-sky-900 '>

   
    <div className='container py-10 px-2 lg:px-10'>
      {/* <h2 className='text-4xl text-center my-4 text-white'>НАШИ КОНТАКТЫ</h2> */}
      <h2 className='text-4xl text-center my-4 text-white'>ჩვენი კონტაქტები</h2>
      {/* <p className='text-2xl text-cent my-4 text-white' >Заполните форму и получите <span className='font-bold'>Бесплатную консультацию</span></p> */}
      <p className='text-2xl text-cent my-4 text-white' >შეავსეთ ფორმა და მიიღეთ <span className='font-bold'>უფასო კონსულტაცია</span></p>
      <div className="flex justify-between items-center">
      <img className='w-1/5' src="https://www.seekpng.com/png/full/6-65087_mezcalian-stallion-old-fashioned-cocktail-png.png" alt="" />
        <form action="#" className='flex flex-col w-3/5 my-10 ml-10'>
          <input  className='w-full mt-4 h-10 border rounded-md border-slate-900 p-4' type="text" placeholder='name'/>
          <input className='w-full mt-4 h-10 border rounded-md border-slate-900 p-4' type="email" placeholder='email'/>
          <input className='w-full mt-4 h-10 border rounded-md border-slate-900 p-4' type="tel" placeholder='tel'/>
          <textarea className='w-full mt-4 h-20 border rounded-md border-slate-900 p-4' name="" placeholder='ваш комментарий'></textarea>
          {/* <button className='border rounded-md mt-10 h-10 bg-slate-900 text-white'>Отправить</button> */}
          <button className='border rounded-md mt-10 h-10 bg-slate-900 text-white'>გაგზავნა</button>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Contacts