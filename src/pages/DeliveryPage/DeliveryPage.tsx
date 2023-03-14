import React, {FC} from 'react'
import { Navbar } from '../../components/Navbar/Navbar'

const Delivery: FC=()=> {
  return (
    <div>
      <Navbar/>
      <div className="container">
        <h2 className='my-20 text-4xl text-center'>Доставка коктейлей</h2>
      </div>
    </div>
  )
}

export default Delivery