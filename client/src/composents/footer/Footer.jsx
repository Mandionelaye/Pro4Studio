import React from 'react'
import './footer.css'

import { Link } from 'react-router-dom'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel'

export default function Footer() {
 const tabpub=[
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
   <footer className='footer mt-5'>
    <div className='titre_footer'>
     <div className="titre_item1">
         <h1>
            <img src="images/logo.jpeg" alt="" className='img_logo log'/>
            <span className='text_titre'>
            Pro4 Groupe
            </span>
         </h1>
     </div>
     <div className="titre_item3">
     <p className='copy'>
       © 2023 Copyright 
       </p>
     </div>
    </div>
    <div className='body_footer'>
       <div className='body_elm1'>
         <div className="bio">
            <h1>Bio</h1>
            <p>
               Pro4 groupes est une star up qui font de nombreuses activités, 
               tel que de la photographie de la décoration.Il dispose d'un 
               salon de make up et a même une boutique de vêtements et 
               d'autre activités extraordinaire.
            </p>
         </div>
         <div className="carocel">
         <Carousel autoPlay interval={6000} infiniteLoop showIndicators={false} showStatus={false} showThumbs={false} >
            {
              tabpub.map((image)=>(
                <div key={tabpub.length-1}>
                  <img src={image.img} alt="img" className='img_carocel'/>
                </div>
              ))
            }
          </Carousel>
         </div>
       </div>
       <div className='body_elm2'>
          <div className='elm2_item1'>
            <ul className='elm2_ul'>
               <li className="elm2_li">
                  <a href="tel:+221777772233">
                  <p className="li_itme">
                    <span><i class="fa-solid fa-phone"></i></span>
                    777777777
                  </p>  
                  </a>
                  </li>
               <li className="elm2_li">
                  <a href="mailto:pro4studio@gmail.com">
                  <p className="li_itme">
                   <span> <i class="fa-solid fa-envelope"></i></span>
                    pro4groupe@gmail.com
                  </p> 
                  </a>
                  </li>
               <li className="elm2_li">
                  <a href="#">
                  <p className="li_itme">
                   <span><i class="fa-brands fa-facebook"></i></span>
                   Pro4groupe
                  </p> 
                  </a>
                  </li>
               <li className="elm2_li">
                  <a href="#">
                  <p className="li_itme">
                   <span> <i class="fa-brands fa-instagram"></i></span>
                    Pr4groupe
                  </p> 
                  </a>
                  </li>
               <li className="elm2_li">
                  <a href="#">
                  <p className="li_itme">
                    <span><i class="fa-brands fa-snapchat"></i></span>
                    Pro4groupe
                  </p> 
                  </a>
                  </li>
            </ul>
          </div>
          <div className='elm2_item2'>
            <ul className="item2_ul">
               <li className="item2_li"><Link className='link_item2' to={"/Studio"}>Studio</Link></li>
               <li className="item2_li"><Link className='link_item2' to={"/Beauty"}>Beauty</Link></li>
               <li className="item2_li"><Link className='link_item2' to={"/Decoration"}>Dec</Link></li>
               <li className="item2_li"><Link className='link_item2' to={"/Shop"}>Shop</Link></li>
            </ul> 
          </div>
       </div>
    </div>
   </footer>
  )
}
