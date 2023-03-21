import React, {FC} from 'react'
import {Link} from "react-router-dom"

export const Navbar: FC = () => {
  return (
    <div className='bg-slate-800 h-12 px-2'>
        <div className='flex justify-between pt-2 text-white text-lg'>
        <ul className='flex justify-between w-42'>
            <li className=''>
                <Link to='/about'>Про нас</Link>
            </li>
            <li className='ml-6'>
                <Link to='/delivery'>Доставка</Link>
            </li>
            <li className='ml-6'>
                <Link to='/'>Контакты</Link>
            </li>
        </ul>
        <Link to='/' className='w-1/5'>CONSULT BAR</Link>
        <div className='flex w-40 justify-between'>
            <p>tel</p>
            <p>socials</p>
        </div>
        </div>
    </div>
  )
}
