import React, { FC } from 'react'

const About: FC = () => {
    return (
        <div className='container'>
            <h2 className='text-4xl text-center my-10'>About company</h2>
            <div className='flex justify-between'>
            <img className='w-2/5' src="https://imgs.search.brave.com/CCwKdX6Y3ImDTGInadnvj2ifoTYZGhyt0zXL9fn-zLc/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzU2LzRi/LzYxLzU2NGI2MWNi/MWRkOTQ2MmQ5NGVm/ZDZkYTdkMmM4NmY4/LmpwZw" alt="" />
            <div className="about__decsr ml-10">
                <p className='text-lg'>Consult Bar - это барная консалтинговая компания, объединяющая сильнейших мастеров барного и ресторанного бизнеса.
                    Основатель Владимир Хрусталев, 13 лет в барной индустрии, 6 лет руководил барами Ginza Project в Санкт-Петербурге.
                    За нашими плечами открытие и перезагрузка 51 бара под ключ.
                    Поддерживаем крепкие отношения с ведущими производителями и поставщиками в барной индустрии.
                    Оказываем услуги по постановке баров как с полного нуля, так и перезагружаем существующие.</p>
                <a href="" className='w-10 h-4 border-solid mt-5 p-2 border-2 rounded-md border-red-300'>Узнать больше</a>
            </div>
            </div>
            
        </div>
    )
}

export default About