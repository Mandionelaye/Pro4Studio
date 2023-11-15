import React from 'react'
import Header from '../../composents/headerNav/Header'
import Footer from '../../composents/footer/Footer'
import './studio.css'
import CadreImg from './cadreImages/CadreImg'

export default function Studio() {
  const tab1=["images/","images/","images/","images/","images/","images/","images/","images/","images/"]
  const tab2=["images/","images/","images/","images/","images/","images/","images/","images/","images/"]
  const tab3=["images/","images/","images/","images/","images/","images/","images/","images/","images/"]
  const tab4=["images/","images/","images/","images/","images/","images/","images/","images/","images/"]
  const tab5=["images/","images/","images/","images/","images/","images/","images/","images/","images/"]
  return (
    <>
     <Header/>
     <div className="headerStudio">
      <img src="/images/pubStudio.jpg" alt="img" className='imgStudio'/>
      <div className="titreStudio">
        <h1>Pro4 Groupe</h1>
        <button type="button" className='btn btn-primary'>reserver</button>
      </div>
     </div>
     <div className='CadreStudio'>
     <CadreImg tabimg={tab1} nomCadre={"Studio"}/>
     </div>
     <div className='CadreStudio'>
     <CadreImg tabimg={tab2} nomCadre={"Mariage"}/>
     </div>
     <div className='CadreStudio'>
     <CadreImg tabimg={tab3} nomCadre={"Bapteme"}/>
     </div>
     <div className='CadreStudio'>
     <CadreImg tabimg={tab4} nomCadr={"Domicile"}/>
     </div>
     <div className='CadreStudio'>
     <CadreImg tabimg={tab5} nomCadr={"Exterieur"}/>
     </div>
     <Footer/>
    </>
  )
  }
