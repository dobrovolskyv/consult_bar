import React, { FC } from "react";
import { Routes, Route } from "react-router-dom";
import Home from './pages/HomePage/HomePage';

import Consultion from "./pages/ConsultionPage/ConsultionPage"
import AboutPage from "./pages/AboutPage/AboutPage"
import Delivery from './pages/DeliveryPage/DeliveryPage'
import { Audit } from "./pages/AuditPage/AuditPage";
import MenuPage from "./pages/MenuPage/MenuPage";
import DescriptionPage from "./pages/DescriptionPage/DescriptionPage";
import EscortPage from "./pages/EscortPage/EscortPage";
import KeyPage from "./pages/KeyPage/KeyPage";
import Footer from "./components/Footer/Footer";
import Contacts from "./components/Contacts/Contacts";



const App: FC =()=> {
  return (
    <div className="bg-stone-50">
      
    <Routes >
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/delivery' element={<Delivery/>}/>
      <Route path='/consultion' element={<Consultion/>}/>
      <Route path='/audit' element={<Audit/>}/>
      <Route path='/description' element={<DescriptionPage/>}/>
      <Route path='/escort' element={<EscortPage/>}/>
      <Route path='/menu' element={<MenuPage/>}/>
      <Route path='/key' element={<KeyPage/>}/>
    </Routes>
    <Contacts/>
    <Footer/>
    </div>
  );
}

export default App;
