import React,{FC} from 'react'
import { Navbar } from '../Navbar/Navbar'
import '../../index.scss'



const Header:FC = () => {
  return (
    <div className='header_bg '>
        <Navbar/>
        <div className="container text-white text-center  pt-20 md:pt-30">
            <h1 className='p-5 text-4xl md:text-9xl'>CONSULT BAR</h1>
            <p className='text-5xl'>Мы сделаем ваш бар лучше!</p>
        </div>
    </div>
  )
}

export default Header