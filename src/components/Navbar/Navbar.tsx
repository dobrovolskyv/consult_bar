import React, { FC, useState } from 'react'
import { Link } from "react-router-dom"




export const Navbar: FC = () => {
const links = [
    {
        id: 1,
        link: 'Про нас',
        href: 'about'
    },
    {
        id: 2,
        link: 'Доставка',
        href: 'delivery'
    },
    {
        id: 3,
        link: 'Контакты',
        href: 'contacts'
    },
]

    const [nav, setNav] = useState(false)
    return (
        <div className='bg-slate-900  lg:h-14 px-2 '>
            <div className='flex justify-between pt-2 text-white text-lg'>
                <ul className='justify-between w-42 hidden md:flex'>
                    <li className=''>
                        {/* <Link to='/about'>Про нас</Link> */}
                        <Link to='/about'>Ჩვენს შესახებ</Link>
                    </li>
                    <li className='ml-6'>
                        {/* <Link to='/delivery'>Доставка</Link> */}
                        <Link to='/delivery'>მიწოდება</Link>
                    </li>
                    <li className='ml-6'>
                        {/* <Link to='/'>Контакты</Link> */}
                        <Link to='/'>კონტაქტები</Link>
                    </li>
                </ul>
                <div onClick={()=>setNav(!nav)} className='cursor-pointer md:hidden z-20'>
                    { nav ? <p>X</p> : <p>MENU</p>}
                </div>
                {nav && (
                     <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 z-10'>
           
                {links.map(({id, link, href})=>(
                    <li key={id} className='px-4 text-4xl text-white z-50'><Link to={'/'+href}>{link}</Link></li>
                ))}
                </ul> 
                )}
              
                <Link to='/' className='w-3/5 ml-6 md:w-1/5'>CONSULT BAR</Link>
                <div className='flex justify-between hover:bg-white '>
                    <a className='border px-2 md:py-1 md:px-3 rounded hover:text-black' href="tel:+995574079767">+995574079767</a>
                </div>
            </div>
        </div>
    )
}
