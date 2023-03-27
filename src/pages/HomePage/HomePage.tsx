import React, { FC } from 'react'
import About from '../../components/About/About'
import Advantages from '../../components/Advantages/Advantages'
import Contacts from '../../components/Contacts/Contacts'
import Header from '../../components/Header/Header'
import Services from '../../components/ServicesList/ServicesList'



const Home: FC= ()=> {
  return (
    <div>
      <Header/>
      <About/>
      <Services/>
      <Advantages/>
    </div>
  )
}

export default Home