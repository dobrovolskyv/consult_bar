import React, {FC} from 'react'
import { Link } from 'react-router-dom'

const Services:FC = () => {
  return (
    <div className='container my-40'>
        <h2 className='text-4xl text-center'>Услуги</h2> 
        <p className='text-center text-lg mt-4 mb-10'>Мы предлагаем эффективные инстументы для повышения продуктивности баров</p>
        <div className='grid grid-cols-3 gap-4'>
            <Link to='/consultion' className='relative'>
                <img  src="https://imgs.search.brave.com/0SgL1AdP8QT9INubp0gofNTlWLqfGfo82jKRaJfn8YI/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9tZWRp/YS50aW1lb3V0LmNv/bS9pbWFnZXMvMTAy/ODc1NjI1L2ltYWdl/LmpwZw" alt="" />
                <p className=' text-3xl absolute top-1/3 left-1/3 text-white'>Консультации</p>
            </Link>
            <Link to='/audit' className='relative'>
                <img  src="https://imgs.search.brave.com/0SgL1AdP8QT9INubp0gofNTlWLqfGfo82jKRaJfn8YI/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9tZWRp/YS50aW1lb3V0LmNv/bS9pbWFnZXMvMTAy/ODc1NjI1L2ltYWdl/LmpwZw" alt="" />
                <p className=' text-3xl absolute top-1/3 left-1/3 text-white'>Аудит бара</p>
            </Link>
            <Link to='/menu' className='relative'>
                <img  src="https://imgs.search.brave.com/0SgL1AdP8QT9INubp0gofNTlWLqfGfo82jKRaJfn8YI/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9tZWRp/YS50aW1lb3V0LmNv/bS9pbWFnZXMvMTAy/ODc1NjI1L2ltYWdl/LmpwZw" alt="" />
                <p className=' text-3xl absolute top-1/3 left-1/3 text-white'>Разработка меню</p>
            </Link>
            <Link to='/description' className='relative'>
                <img  src="https://imgs.search.brave.com/0SgL1AdP8QT9INubp0gofNTlWLqfGfo82jKRaJfn8YI/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9tZWRp/YS50aW1lb3V0LmNv/bS9pbWFnZXMvMTAy/ODc1NjI1L2ltYWdl/LmpwZw" alt="" />
                <p className=' text-3xl absolute top-1/3 left-1/3 text-white'>Подписка на барные услуги</p>
            </Link>
            <Link to='/escort' className='relative'>
                <img  src="https://imgs.search.brave.com/0SgL1AdP8QT9INubp0gofNTlWLqfGfo82jKRaJfn8YI/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9tZWRp/YS50aW1lb3V0LmNv/bS9pbWFnZXMvMTAy/ODc1NjI1L2ltYWdl/LmpwZw" alt="" />
                <p className=' text-3xl absolute top-1/3 left-1/3 text-white'>Сопровождение бара</p>
            </Link>
            <Link to='/key' className='relative'>
                <img  src="https://imgs.search.brave.com/0SgL1AdP8QT9INubp0gofNTlWLqfGfo82jKRaJfn8YI/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9tZWRp/YS50aW1lb3V0LmNv/bS9pbWFnZXMvMTAy/ODc1NjI1L2ltYWdl/LmpwZw" alt="" />
                <p className=' text-3xl absolute top-1/3 left-1/3 text-white'>Бар под ключ</p>
            </Link>
        </div>
        
      
    </div>
  )
}

export default Services