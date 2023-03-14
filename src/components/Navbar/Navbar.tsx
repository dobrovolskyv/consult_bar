import React, {FC} from 'react'
import {Link} from "react-router-dom"

export const Navbar: FC = () => {
  return (
    <div className='bg-slate-800 h-12 px-2'>
        <div className='flex justify-between pt-2 text-white text-lg'>
        <ul className='flex justify-between w-24'>
            <li className='ml-2.5'>
                <Link to='/about'>about</Link>
            </li>
            <li className='ml-2.5'>
                <Link to='/delivery'>delivery</Link>
            </li>
            <li className='ml-2.5'>
                <Link to='/'>contacts</Link>
            </li>
        </ul>
        <Link to='/'>CONSULT BAR</Link>
        <div className='flex w-40 justify-between'>
            <p>tel</p>
            <p>socials</p>
        </div>
        </div>
    </div>
  )
}
