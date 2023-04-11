import React, {FC} from 'react'
import { Link } from 'react-router-dom'


const Services:FC = () => {
  return (
    <div className='container my-40'>
        {/* <h2 className='text-4xl text-center'>Услуги</h2>  */}
        <h2 className='text-4xl text-center'>სერვისები</h2> 
        {/* <p className='text-center text-lg mt-4 mb-10'>Мы предлагаем эффективные инстументы для повышения продуктивности баров</p> */}
        <p className='text-center text-lg mt-4 mb-10'>ჩვენ გთავაზობთ ეფექტურ ინსტრუმენტებს ბარის პროდუქტიულობის გასაზრდელად</p>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
            <Link to='/consultion' className='services__box relative'>
                <img className='' src="/image/card.jpg" alt="" />
                {/* <p className=' text-3xl absolute inset-y-1/3   inset-x-1/4 text-white z-10'>Консультации</p> */}
                <p className=' text-3xl absolute inset-y-1/3   inset-x-1/4 text-white z-10'>კონსულტაციები</p>
            </Link>
            <Link to='/audit' className='services__box relative' >
                <img  src="/image/card.jpg" alt="" />
                {/* <p className=' text-3xl absolute inset-y-1/3  inset-x-1/4 pl-4 text-white z-10'>Аудит бара</p> */}
                <p className=' text-3xl absolute inset-y-1/3  inset-x-1/4 pl-4 text-white z-10'>ბარის აუდიტი</p>
            </Link>
            <Link to='/menu' className='services__box relative'>
                <img  src="/image/card.jpg" alt="" />
                {/* <p className=' text-3xl absolute inset-y-1/3  inset-x-1/4 text-white z-10'>Разработка меню</p> */}
                <p className=' text-3xl absolute inset-y-1/3  inset-x-1/4 text-white z-10'>მენიუს განვითარება</p>
            </Link>
            <Link to='/description' className='services__box relative'>
                <img  src="/image/card.jpg" alt="" />
                {/* <p className=' text-3xl absolute inset-y-1/3  inset-x-1/4 text-white z-10'>Подписка на барные услуги</p> */}
                <p className=' text-3xl absolute inset-y-1/3  inset-x-1/4 text-white z-10'>ბარის სერვისების გამოწერა</p>
            </Link>
            <Link to='/escort' className='services__box relative'>
                <img  src="/image/card.jpg" alt="" />
                {/* <p className=' text-3xl absolute inset-y-1/3  inset-x-1/4 text-white z-10'>Сопровождение бара</p> */}
                <p className=' text-3xl absolute inset-y-1/3  inset-x-1/4 text-white z-10'>ბარის ესკორტი</p>
            </Link>
            <Link to='/key' className='services__box relative'>
                <img  src="/image/card.jpg" alt="" />
                {/* <p className=' text-3xl absolute inset-y-1/3  inset-x-1/4 text-white z-10'>Бар под ключ</p> */}
                <p className=' text-3xl absolute inset-y-1/3  inset-x-1/4 text-white z-10'>ანაზრაურების ბარი</p>
            </Link>
        </div>
        
      
    </div>
  )
}

export default Services