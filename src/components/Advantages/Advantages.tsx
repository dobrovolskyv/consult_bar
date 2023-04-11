import React,{FC} from 'react'

const Advantages:FC = () => {
  return (
    <div className='container my-40 px-2'>
        <div className="we">
            {/* <h3 className="text-center text-4xl">Почему мы?</h3> */}
            <h3 className="text-center text-4xl">Რატომ ჩვენ?</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10 text-xl">
                <div className="flex items-center ">
                    <p className='text-2xl mr-4'>+</p>
                    {/* <p>Мы поддерживаем крепкие отношения с ведущими производителями и поставщиками в барной индустрии</p> */}
                    <p>ჩვენ ვინარჩუნებთ ძლიერ ურთიერთობებს ბარის ინდუსტრიის წამყვან მწარმოებლებთან და მომწოდებლებთან</p>
                </div>
                <div className="flex items-center w-4/5">
                    <p className='text-2xl mr-4'>+</p>
                    {/* <p>Работаем в барной индустрии с 2009 года</p> */}
                    <p>ბარის ინდუსტრიაში 2009 წლიდან ვმუშაობთ</p>
                </div>
                <div className="flex items-center w-4/5">
                    <p className='text-2xl mr-4'>+</p>
                    {/* <p>5 успешно реализованный проект под ключ</p> */}
                    <p>5 წარმატებით განხორციელებული ანაზრაურების პროექტი</p>
                </div>
                <div className="flex items-center w-4/5">
                    <p className='text-2xl mr-4'>+</p>
                    {/* <p>Мы открывали заведения во всех сегментах в разных регионах России и Грузии</p> */}
                    <p>ჩვენ გავხსენით დაწესებულებები ყველა სეგმენტში რუსეთის და საქართველოს სხვადასხვა რეგიონში</p>
                </div>
            </div>
        </div>
        {/* <div className="mt-20">
            <h3 className='text-center text-4xl'>Основная команда</h3>
            <div className="flex justify-batween gap-4 mt-10">
                <div className="">
                    <img src="https://imgs.search.brave.com/Tn_dLKg8Bw-UYuPPqB5Q0GNRZC6MZmyUi5ON2ApK0e4/rs:fit:1200:1000:1/g:ce/aHR0cDovLzIuYnAu/YmxvZ3Nwb3QuY29t/Ly1pNUpPZGVnQ0wy/ay9VSVVSMllETGF1/SS9BQUFBQUFBQUh3/Zy95TG9IdHZpM3FL/TS9zMTYwMC9jbG9z/ZS11cF9jYXRzX2Nh/dF9kZXNrdG9wXzE5/MjB4MTIwMF9oZC13/YWxscGFwZXItODM0/NzA5LmpwZWc" alt="" />
                    <p className=''>Cat 1</p>
                    <p>должность</p>
                </div>
                <div className="">
                    <img src="https://imgs.search.brave.com/Tn_dLKg8Bw-UYuPPqB5Q0GNRZC6MZmyUi5ON2ApK0e4/rs:fit:1200:1000:1/g:ce/aHR0cDovLzIuYnAu/YmxvZ3Nwb3QuY29t/Ly1pNUpPZGVnQ0wy/ay9VSVVSMllETGF1/SS9BQUFBQUFBQUh3/Zy95TG9IdHZpM3FL/TS9zMTYwMC9jbG9z/ZS11cF9jYXRzX2Nh/dF9kZXNrdG9wXzE5/MjB4MTIwMF9oZC13/YWxscGFwZXItODM0/NzA5LmpwZWc" alt="" />
                    <p className=''>Cat 2</p>
                    <p>должность</p>
                </div>
                <div className="">
                    <img src="https://imgs.search.brave.com/Tn_dLKg8Bw-UYuPPqB5Q0GNRZC6MZmyUi5ON2ApK0e4/rs:fit:1200:1000:1/g:ce/aHR0cDovLzIuYnAu/YmxvZ3Nwb3QuY29t/Ly1pNUpPZGVnQ0wy/ay9VSVVSMllETGF1/SS9BQUFBQUFBQUh3/Zy95TG9IdHZpM3FL/TS9zMTYwMC9jbG9z/ZS11cF9jYXRzX2Nh/dF9kZXNrdG9wXzE5/MjB4MTIwMF9oZC13/YWxscGFwZXItODM0/NzA5LmpwZWc" alt="" />
                    <p className=''>Car 3</p>
                    <p>должность</p>
                </div>
            </div>
        </div> */}
    </div>
  )
}

export default Advantages