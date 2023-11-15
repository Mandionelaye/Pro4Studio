import React, { useEffect } from 'react'
import Header from '../../composents/headerNav/Header'
import Footer from '../../composents/footer/Footer'
import './accuil.css'
import AOS from "aos"
import 'aos/dist/aos.css'
import Cadre from './cadre/Cadre'
import ReactPlayer from 'react-player'
import From from '../../composents/form/From'
import Carousels from '../../composents/Carousel'



export default function Accuil() {
  const tabimg=['images/ac_pre1.jpg','images/ac_pre2.jpeg','images/ac_pre3.jpg','images/ac_pre4.jpg']
  useEffect(()=>{
     AOS.init({
      duration:1000
     })
  }, [])
  const imges=[
    {
       id:1,
       img:'images/pub1.jpg',
    },
    {
       id:2,
       img:'images/pub2.jpg',
    },
    {
       id:3,
       img:'images/pub3.jpeg',
    },
    {
       id:4,
       img:'images/pub4.jpeg',
    },
    {
       id:5,
       img:'images/pub5.jpg',
    }
  ]
  return (
    <>
    <Header/>
    <div className="accuil">
      <img src="images/accuil.jpg" alt="" className="img_accuil" />
    </div>
    <div className="container">
    <div className="liste_accuil"><ul className='accuil_ul' data-aos="fade-up"><li>La Qualité au Meilleur Prix </li></ul></div>
    <div className="accuil_pre">
      {
         tabimg.map((img)=>(
          <div className="accuil_pre_item m-3" data-aos="fade-up" key={tabimg.length-1}>
          <img src={img} alt="img" className="accuil_pre_item_img" />
        </div>
         ))
      }
    </div>
    </div>
    <Cadre/>
    <div className='container mt-5'>
       <div className="video">
        <h1 className='video_p'>Présentation</h1>
        <div className="elmvideo">
           <ReactPlayer url={'/video/P4G.mp4'} loop playing muted  width={'100%'} height={'90vh'}/>
        </div>
       </div>
       <h1 className='video_p mt-5'>Reservation</h1>
      <div className="row">
        <div className="col col-lg-6 col-12 "><From/></div>
        <div className="col col-lg-6 col-12"><Carousels table={imges} imgclasse={'imgcarAcc'}/></div>
      </div>
    </div>
    <Footer/>
    </>
  )
}
