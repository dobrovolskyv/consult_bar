import React, { FC } from 'react'
import { Navbar } from '../../components/Navbar/Navbar'

const EscortPage: FC = () => {
  return (
    <div>
      <Navbar />
        {/* <h3 className='text-4xl text-center py-20 bg-sky-900 text-white'>СОПРОВОЖДЕНИЕ БАРА</h3> */}
        <h3 className='text-4xl text-center py-20 bg-sky-900 text-white'>ბარის სერვისი</h3>
      <div className="container py-10">
        {/* <p className='my-5'>Специалисты нашей компании будут сопровождать Ваш бар после запуска или уже действующий</p> */}
        <p className='my-5'>ჩვენი კომპანიის სპეციალისტები თან ახლავს თქვენს ბარს გაშვების ან უკვე ფუნქციონირების შემდეგ</p>
        <div className="flex flex-col md:flex-row justify-between mt-10">
          {/* <p className='w-full md:w-2/5 font-bold text-xl'>Что входит в услугу</p> */}
          <p className='w-full md:w-2/5 font-bold text-xl'>რა შედის სერვისში</p>
          {/* <p className='w-full md:w-4/5'>Набор барменов и их обучение
            Сезонные обновления коктейльной, барной и чайной карт
            Внедрение единой системы работы барменов, ведение личных дел на каждого сотрудника, прописание стандартов качества, KLN, KPI, листов аудита вкуса, чек листы, учебники по ассортименту бара, оборудованию, химии и т.д.
            Переговоры с алкогольными и безалкогольными поставщиками, заключение договоров, контрактов
            Анализ существующего оборудования и оснащения бара
            Подбор и заказ необходимого барного инвентаря
            Внедрение IT систем, если в таковых будет необходимость с полной оцифровкой всех рутинных процессов в баре
            Два раза в неделю наш специалист будет посещать ваше заведение, чтобы проводить аудит вкуса, контроль качества, проверять стандарты сервиса работы персонала в баре
            Проведения тренингов по сезонным обновления</p> */}
          <p className='w-full md:w-4/5'>ბარმენების დაქირავება და მათი მომზადება
          კოქტეილის, ბარისა და ჩაის ბარათების სეზონური განახლებები
          ბარმენებისთვის მუშაობის ერთიანი სისტემის დანერგვა, თითოეული თანამშრომლისთვის პირადი ფაილების შენახვა, ხარისხის სტანდარტების დადგენა, KLN, KPI, გემოვნების აუდიტის ფურცლები, საკონტროლო სიები, სახელმძღვანელოები ბარის ასორტიმენტზე, აღჭურვილობა, ქიმია და ა.შ.
          მოლაპარაკებები ალკოჰოლურ და უალკოჰოლო მომწოდებლებთან, ხელშეკრულებების დადება, კონტრაქტები
          არსებული აღჭურვილობისა და ბარის აღჭურვილობის ანალიზი
          ბარის საჭირო აღჭურვილობის შერჩევა და შეკვეთა
          IT სისტემების დანერგვა, ასეთის არსებობის შემთხვევაში, ბარში არსებული ყველა რუტინული პროცესის სრული დიგიტალაციით
          კვირაში ორჯერ ჩვენი სპეციალისტი ეწვევა თქვენს დაწესებულებას, ჩაატაროს გემოვნების აუდიტი, ხარისხის კონტროლი, შეამოწმოს პერსონალის მომსახურების სტანდარტები ბარში.
          სეზონური განახლებების შესახებ ტრენინგების ჩატარება</p>
        </div>
        <div className="flex flex-col md:flex-row justify-between mt-10">
          {/* <p className='w-full md:w-2/5 font-bold text-xl'>Подключив услугу в чем вы выигрываете</p> */}
          <p className='w-full md:w-2/5 font-bold text-xl'>სერვისის შეერთებით რას იგებთ</p>
          {/* <p className='w-full md:w-4/5'>Получение лучших закупочных цен на продукцию бара, а это значительная экономия бюджета
            Соблюдение последних барных трендов (посуда, коктейли, алкоголь, б/а напитки)
            Получение и удержание скидок от поставщиков
            Регулярная работа по увеличению продаж барной продукции
            Регулярное обучение персонала всем последним обновлениям и стандартам
            Постоянный контроль качества напитков и работы бара в целом;</p> */}
          <p className='w-full md:w-4/5'>ბარის პროდუქტების საუკეთესო შესყიდვის ფასების მიღება და ეს ბიუჯეტის მნიშვნელოვანი დანაზოგია
          ბარის უახლესი ტენდენციების დაცვა (კერძები, კოქტეილები, ალკოჰოლი, უალკოჰოლო სასმელები)
          მიმწოდებლებისგან ფასდაკლების მიღება და შენარჩუნება
          რეგულარული მუშაობა ბარის პროდუქციის გაყიდვების გაზრდის მიზნით
          პერსონალის რეგულარული ტრენინგი ყველა უახლესი განახლებისა და სტანდარტების შესახებ
          სასმელების ხარისხისა და მთლიანად ბარის მუშაობის მუდმივი კონტროლი;</p>
        </div>
        <div className="flex flex-col md:flex-row justify-between mt-10">
          {/* <p className='w-full md:w-2/5 font-bold text-xl'>Стоимость</p> */}
          <p className='w-full md:w-2/5 font-bold text-xl'>ფასი</p>
          {/* <p className='w-full md:w-4/5'>От 600 до 3000 рублей в месяц + % с продаж бара
            Мы максимально заинтересованы постоянно работать над увеличением продаж Вашего бара</p> */}
          <p className='w-full md:w-4/5'>თვეში 600-დან 3000 რუბლამდე + ბარის გაყიდვების %
             ჩვენ ყველაზე მეტად გვაინტერესებს მუდმივად ვიმუშაოთ თქვენი ბარის გაყიდვების გაზრდის მიზნით</p>
        </div>
      </div>
    </div>
  )
}

export default EscortPage