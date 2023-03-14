import React, { FC } from 'react'
import { Navbar } from '../../components/Navbar/Navbar'

const DescriptionPage: FC = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h2 className='text-4xl text-center my-32'>ПОДПИСКА НА УСЛУГИ</h2>
        <p className='text-2xl text-center'>Предоставляем готовые решения для баров по подписке</p>
        <div className="">
          <h3 className='text-4xl text-center'>Вам подойдет подписка, если Вы</h3>
          <ul>
            <li className='flex'>
              <p>+</p>
              <p>Хотите, чтобы ваш бар больше приносил прибыли, был эффективный, а гости возвращались снова и снова</p>
            </li>
            <li className='flex'>
              <p>+</p>
              <p>Каждый новый сезон испытываете дискомфорт, где брать новые меню, рецепты и идеи. Чтобы они еще были с подходящими себестоимостями, современные, отлично продавались и нравились гостям</p>
            </li>
            <li className='flex'>
              <p>+</p>
              <p>Хотите, чтобы персонал постоянно развивался, учился и главное внедрял все полученные знания в вашем заведении, но не знаете, как это сделать</p>
            </li>
            <li className='flex'>
              <p>+</p>
              <p>Давно думаете систематизировать и автоматизировать все процессы в баре, чтобы стандартизировать качество и увеличить прибыль. Но, как это сделать не понимаете</p>
            </li>
          </ul>
        </div>
        <div className="work">
          <h3 className='text-4xl text-center'>Как мы работаем по подписке</h3>
          <div className="work_wrapper">
            <div className="lines flex w-full">
              <div className="line border-b-2 w-40 mr-4">1</div>
              <div className="line border-b-2 w-40 mr-4">2</div>
              <div className="line border-b-2 w-40 mr-4">3</div>
              <div className="line border-b-2 w-40 mr-4">4</div>
            </div>
            <ul className='flex'>
              <li className=' mr-10'>
                <p className='font-bold mb-4'>Личная консультация</p>
                <p>Знакомство, глубокий аудит вашего бара, по итогу аудита, вы получаете чек-лист с подробными рекомендациями, что делать и как увеличить показатели своего заведения</p>
              </li>
              <li className=' mr-10'>
                <p className='font-bold mb-4'>Подключение подписки</p>
                <p>Разрабатываем сезонные предложения по коктейлям, б/а смешанным напиткам, барному меню и винному.
                  Отправляем весь подробный материал, помогаем онлайн-внедрить и адаптировать под Ваше заведение.</p>
              </li>
              <li className=' mr-10'>
                <p className='font-bold mb-4'>Подключение чат-бота</p>
                <p>Подключаем чат-бота к бару, он поможет автоматизировать и систематизировать рутинные процессы, обучать и повышать эффективность работы барменов.</p>
              </li>
              <li className=' mr-10'>
                <p className='font-bold mb-4'>Поддержка</p>
                <p>После внедрения всех материалов, к Вам подключается личный удаленный менеджер, который будет постоянно на связи и обеспечит Вам поддержку по любому вопросу, касающемуся Вашего бара.
                  На полное подключение подписки требуется до 7 рабочих дней.</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex mt-20">
          <div className="">
            <h4>BASIC</h4>
            <p>12 месяцев 8 000 руб./мес</p>
            <p>10 000 руб./мес.</p>
            <ul>
              <li>
                <p>Максимальные скидки от поставщиков-партнёров Consult Bar.</p>
              </li>
              <li>
                <p>Чат-бот для автоматизации рутинных процессов в баре.</p>
              </li>
              <li>
                <p>Раз в квартал, за 15 дней перед каждым сезоном:</p>
              </li>
              <li>
                <p>Онлайн аудит бара</p>
              </li>
              <li>
                <p>0 коктейлей с фото, спецификациями и подробными ттк.</p>
              </li>
              <li>
                <p>5 безалкогольных смешанных напитков с фото, спецификациями и подробными ттк.</p>
              </li>
              <li>
                <p>Обновления сезонные для барного меню.</p>
              </li>
              <li>
                <p>Обновления сезонные для винного меню.</p>
              </li>
              <li>
                <p>Мотивационные программы, барные стандарты, помощь с внедрением.</p>
              </li>
              <li>
                <p>Раз в квартал обучающие видео по обновлениям для персонала.
                  Как продавать, как готовить коктейли и т.д.</p>
              </li>
              <li>
                <p>Доступ к нашему информационному каналу.</p>
              </li>
              <li>
                <p>Закрепленный личный менеджер онлайн.</p>
              </li>
              <li>
                <p>Служба заботы 24/7.</p>
              </li>
            </ul>
            <button>Оставить заявку</button>
          </div>
          <div className="">
            <h4>PREMIUM</h4>
            <p>12 месяцев 23 000 руб./мес</p>
            <p>25 000 руб./мес.</p>
            <ul>
              <li>
                <p>Максимальные скидки от поставщиков-партнёров Consult Bar.</p>
              </li>
              <li>
                <p>Чат-бот для автоматизации рутинных процессов в баре.</p>
              </li>
              <li>
                <p>Раз в квартал, за 15 дней перед каждым сезоном:</p>
              </li>
              <li>
                <p>Онлайн аудит бара</p>
              </li>
              <li>
                <p>0 коктейлей с фото, спецификациями и подробными ттк.</p>
              </li>
              <li>
                <p>5 безалкогольных смешанных напитков с фото, спецификациями и подробными ттк.</p>
              </li>
              <li>
                <p>Обновления сезонные для барного меню.</p>
              </li>
              <li>
                <p>Обновления сезонные для винного меню.</p>
              </li>
              <li>
                <p>Мотивационные программы, барные стандарты, помощь с внедрением.</p>
              </li>
              <li>
                <p>Раз в квартал обучающие видео по обновлениям для персонала.
                  Как продавать, как готовить коктейли и т.д.</p>
              </li>
              <li>
                <p>Доступ к нашему информационному каналу.</p>
              </li>
              <li>
                <p>Закрепленный личный менеджер онлайн.</p>
              </li>
              <li>
                <p>Служба заботы 24/7.</p>
              </li>
              <li>
                <p>Бесплатное обучение для барменов и бар-менеджеров раз в год в HRUSTALEV SCHOOL.</p>
              </li>
              <li>
                <p>Раз в месяц онлайн-обучение для персонала.</p>
              </li>
              <li>
                <p>Раз в месяц обучающие видео, прямые эфиры по обновлениям для персонала.</p>
              </li>
              <li>
                <p>Как продавать, как готовить коктейли и т.д.</p>
              </li>
              <li>
                <p>Раз в квартал обучающие видео по обновлениям для персонала.
                  Как продавать, как готовить коктейли и т.д.</p>
              </li>
            </ul>
            <button>Оставить заявку</button>
          </div>
          <div className="">
            <h4>STANDART</h4>
            <p>12 месяцев 10 000 руб./мес</p>
            <p>12 000 руб./мес.</p>
            <ul>
              <li>
                <p>Максимальные скидки от поставщиков-партнёров Consult Bar.</p>
              </li>
              <li>
                <p>Чат-бот для автоматизации рутинных процессов в баре.</p>
              </li>
              <li>
                <p>Раз в квартал, за 15 дней перед каждым сезоном:</p>
              </li>
              <li>
                <p>Онлайн аудит бара</p>
              </li>
              <li>
                <p>0 коктейлей с фото, спецификациями и подробными ттк.</p>
              </li>
              <li>
                <p>5 безалкогольных смешанных напитков с фото, спецификациями и подробными ттк.</p>
              </li>
              <li>
                <p>Обновления сезонные для барного меню.</p>
              </li>
              <li>
                <p>Обновления сезонные для винного меню.</p>
              </li>
              <li>
                <p>Мотивационные программы, барные стандарты, помощь с внедрением.</p>
              </li>
              <li>
                <p>Раз в квартал обучающие видео по обновлениям для персонала.
                  Как продавать, как готовить коктейли и т.д.</p>
              </li>
              <li>
                <p>Доступ к нашему информационному каналу.</p>
              </li>
              <li>
                <p>Закрепленный личный менеджер онлайн.</p>
              </li>
              <li>
                <p>Служба заботы 24/7.</p>
              </li>
              <li>
                <p>Бесплатное обучение для барменов и бар-менеджеров раз в год в HRUSTALEV SCHOOL.</p>
              </li>
              <li>
                <p>Раз в месяц онлайн-обучение для персонала.</p>
              </li>
              <li>
                <p>Раз в квартал обучающие видео по обновлениям для персонала.
                  Как продавать, как готовить коктейли и т.д.</p>
              </li>
            </ul>
            <button>Оставить заявку</button>
          </div>
        </div>
        <div className="mt-20 border-solid border-2 border-blue-900">
          <p className='text-4xl font-bold'>Возможности</p>
          <p>Подключая подписку, Вы получаете лучшее готовое решение для эффективной работы Вашего бара. Мы можем разработать для Вас индивидуальное предложение под Ваши запросы.
            Для сетевых заведений у нас есть особые предложения.
            Минимальный срок подписки 3 месяца</p>
          <button className='my-10 border-solid border-2 border-sky-900'> оставить заявку</button>
        </div>
      </div>
    </div>
  )
}

export default DescriptionPage