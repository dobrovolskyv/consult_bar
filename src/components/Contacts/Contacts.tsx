import React,{FC} from 'react'

const Contacts:FC = () => {
  return (
    <div className='container mt-48'>
      <h2 className='text-4xl text-center'>НАШИ КОНТАКТЫ</h2>
      <p className='text-2xl text-cent'>Заполните форму и получите Бесплатную консультацию</p>
      <div className="flex justify-between">
        <div className="w-3/5" >
          telephone
          <p>email</p>
          <p>Cанкт-Петербург/Батуми</p>
        </div>
        <form action="" className='flex flex-col w-full'>
          <input  className='w-full' type="text"/>
          <input className='w-full' type="email"/>
          <input className='w-full' type="tel"/>
          <textarea className='w-full' name="" placeholder='ваш комментарий'></textarea>
          <button>Отправить</button>
        </form>
      </div>
    </div>
  )
}

export default Contacts