import React, { FC } from 'react'
import { Navbar } from '../../components/Navbar/Navbar'

export const Audit: FC = () => {
  return (
    <div>
      <Navbar />
        <h2 className='text-4xl text-center py-20 bg-sky-900 text-white'>Аудит бара</h2>
        <div className='bg-gray-50 pb-10'>

        
      <div className="container">
          <ul className="w-4/5 text-xl pt-10">
            <li>
              <p className='mt-2.5'>Каждый бар (где бы он не находился, в баре, ресторане, кафе, столовой) должен планомерно проходить профессиональный аудит.</p>
            </li>
            <li>
              <p className='mt-2.5'>Наши специалисты по заранее запрошенным метрикам проведут всесторонний аудит Вашего бара. Мы предложим Вам наилучшие варианты исправления выявленных ошибок и недочетов.</p>
            </li>
            <li>
              <p className='mt-2.5'>Наши рекомендации позволят Вам улучшить результаты работы Вашего бара.</p>
            </li>
            <li>
              <p className='mt-2.5 font-bold'>Услуга производится в онлайн-формате.</p>
            </li>
          </ul>
        <p className='text-3xl text-center mt-20'>ЭТАПЫ РАБОТЫ</p>
        <div className="mt-10 w-2/5">
          <ul className='flex flex-col justify-center'>
            <li className='flex mt-2'>
              <p className='mr-4 text-2xl'>1</p>
              <p className='text-lg'>Вы оставляете заявку</p>
            </li>
            <li className='flex mt-2'>
              <p className='mr-4 text-2xl'>2</p>
              <p className='text-lg'>В течении 24 часов с вами связывается наш специалист для уточнения деталей</p>
            </li>
            <li className='flex mt-2'>
              <p className='mr-4 text-2xl'>3</p>
              <p className='text-lg'>После разговора вам отправляют блок вопросов, по которым будет проводится аудит</p>
            </li>
            <li className='flex mt-2'> 
              <p className='mr-4 text-2xl'>4</p>
              <p className='text-lg'>После того как вы ответите на вопросы, нам потребуется 72 часа для проведения аудита</p>
            </li>
            <li className='flex mt-2'>
              <p className='mr-4 text-2xl'>5</p>
              <p className='text-lg'>Далее согласовывается удобное для вас время и день для проведения аудита в онлайн-формате, где мы разберем все рекомендации и ответим на ваши вопросы</p>
            </li>
            <li className='flex mt-2'>
              <p className='mr-4 text-2xl'>6</p>
              <p className='text-lg'>По итогу аудита, вы получите рекомендации, что необходимо исправить для увеличения показателей вашего бара</p>
            </li>
          </ul>
        </div>
          <p className='font-bold text-xl ml-8 mt-4'>стоимость 100 лари</p>
        <div className="mt-20 w-3/5 bg-gray-300 p-5 m-auto rounded-md">
          <p className='leading-6'>За годы работы в барной индустрии и сотни проведённых аудитов, консультаций нами были выявлены ключевые метрики по которым можно с точностью до 95% определить, что необходимо исправить для увеличения показателей бара</p>
          <p className='font-bold mt-4'>Услуга предоставляется в онлайн-формате бесплатно</p>
        </div>
      </div>
    </div>
    </div>
  )
}
