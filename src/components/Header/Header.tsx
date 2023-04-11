import React,{FC} from 'react'
import { Navbar } from '../Navbar/Navbar'
import '../../index.scss'



const Header:FC = () => {
  return (
    <div className='header_bg h-auto'>
        <Navbar/>
        <div className="container text-white text-center py-10  lg:py-40 z-10">
            <h1 className='p-5 text-4xl md:text-9xl z-10'>CONSULT BAR</h1>
            {/* <p className='text-3xl lg:text-5xl'>Мы сделаем ваш бар лучше!</p> */}
            <p className='text-3xl lg:text-5xl'>ჩვენ გავაუმჯობესებთ თქვენს ბარს!</p>
        </div>
    </div>
  )
}

export default Header