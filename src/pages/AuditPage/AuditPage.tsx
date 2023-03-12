import React, { FC } from 'react'
import { Navbar } from '../../components/Navbar/Navbar'

export const Audit: FC = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h2 className='text-4xl text-center my-20'>Аудит бара</h2>
        <p className='w-4/5 m-auto'>Каждый бар (где бы он не находился, в баре, ресторане, кафе, столовой) должен планомерно проходить профессиональный аудит.
          Наши специалисты по заранее запрошенным метрикам проведут всесторонний аудит Вашего бара. Мы предложим Вам наилучшие варианты исправления выявленных ошибок и недочетов.
          Наши рекомендации позволят Вам улучшить результаты работы Вашего бара.
          Услуга производится в онлайн-формате.</p>
        <p className='text-3xl text-center mt-20'>ЭТАПЫ РАБОТЫ</p>
        <div className="mt-10 w-2/5">
          <ul className='flex flex-col justify-center'>
            <li>
              <p className='text-left'>Вы оставляете заявку</p>
            </li>
            <li>
              <p className='text-right'>В течении 24 часов с вами связывается наш специалист для уточнения деталей</p>
            </li>
            <li>
              <p className='text-left'>После разговора вам отправляют блок вопросов, по которым будет проводится аудит</p>
            </li>
            <li>
              <p className='text-right'>После того как вы ответите на вопросы, нам потребуется 72 часа для проведения аудита</p>
            </li>
            <li>
              <p className='text-left'>Далее согласовывается удобное для вас время и день для проведения аудита в онлайн-формате, где мы разберем все рекомендации и ответим на ваши вопросы</p>
            </li>
            <li>
              <p className='text-right'>По итогу аудита, вы получите рекомендации, что необходимо исправить для увеличения показателей вашего бара</p>
            </li>
          </ul>
        </div>
        <div className="mt-20 w-3/5 bg-gray-300 p-5 m-auto">
          <p>За годы работы в барной индустрии и сотни проведённых аудитов, консультаций нами были выявлены ключевые метрики по которым можно с точностью до 95% определить, что необходимо исправить для увеличения показателей бара</p>
          <p>Услуга предоставляется в онлайн-формате бесплатно</p>
        </div>
      </div>
    </div>
  )
}