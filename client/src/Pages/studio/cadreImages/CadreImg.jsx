import React from 'react'
import './cadreImg.css'

export default function CadreImg({tabimg, nomCadre}) {
  return (
    <div className='CadreImg'>
        <div className="headCadreImg">
        <h1>{nomCadre}</h1>
        <button type="button" className='btn btn-primary'>Reserver</button>
        </div>
        <div className="ensemble_flechi">
     <button type="button" className='btn btnC'>
     <i className="fa-solid fa-less-than"></i>
     </button>
        <div className="imgCadre">
        {
            tabimg.map((img)=>(
                <div className="cardimg" key={tabimg.lenght-1}>
                     <img src={img} alt="img" className="img1"/> 
                </div>
                ))
            }
        </div>
        <button type="button" className='btn btnC'>
        <i className="fa-solid fa-greater-than"></i>
        </button>
        </div>
    </div>
  )
}
