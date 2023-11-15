import React, { useState } from 'react'
import axios from 'axios'

export default function From() {
  // state
  const [nom, setNom]=useState('')
  const [prenom, setPrenom]=useState('')
  const [tel, setTel]=useState(0)
  const [date, setDate]=useState('')
  const [heure, setheure]=useState('')
  const [categaries, setcategaries]=useState(0)
  const [type, setType]=useState(0)
  //Functions
  const savenom=(e)=>{
     setNom(e.target.value)
  }
  const saveprenom=(e)=>{
    setPrenom(e.target.value)
 }
 const savetel=(e)=>{
  setTel(e.target.value)
}
const savedate=(e)=>{
  setDate(e.target.value)
}
const saveheure=(e)=>{
  setheure(e.target.value)
}
const savecateg=(e)=>{
  setcategaries(e.target.value)
}
const savetypoe=(e)=>{
  setType(e.target.value)
}
//inputes
  const inputs=[
    {
      id:1,
      label:'Prenom',
      type:'text',
      fonintup:saveprenom,
    },
    {
      id:2,
      label:'Nom',
      type:'text',
      fonintup:savenom,
    },
    {
      id:3,
      label:'Tel',
      type:'numero',
      fonintup:savetel,
    },
    {
      id:4,
      label:'Date',
      type:'date',
      fonintup:savedate,
    },
    {
      id:5,
      label:'Heure',
      type:'time',
      fonintup:saveheure,
    }
  ]
//beaty
const beaty =["Pedicure","Ongles simple","Steam-pod greffage","Tresse Raw","Manucure","Permanent","Posture & customiser perruque"
  ,"Pose Greffage","Gel",'Tresse americaine','Tissage perruque','Makeup simple','Tresse simple','Fixage greffage','Makeup complet','Tresse Meche']  
const evenements=["Mariage","Bapteme","Anniversaire","Tabaski","Korite","Magal","autres"]
 //funSubmit
 const submit=(e)=>{
    e.preventDefault()
    try{
    const doc = axios.get
    }catch(err){
     console.log(err);
    }
 } 
return (
    <>
    <form action="" className='from mt-3'>
    <select class="form-select mb-3" aria-label="Default select example" onChange={savecateg}>
    <span class="input-group-text" id="inputGroup-sizing-default">Categorie</span>
      <option selected>Open this select menu</option>
      <option value="1">Studio</option>
      <option value="2">Beauty</option>
      <option value="3">Decoration</option>
    </select>
{
  inputs.map((input)=>(
    <div class="input-group mb-3" key={input.id}>
        <span class="input-group-text" id="inputGroup-sizing-default">{input.label}</span>
      <input type={input.type} class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder={input.label} onChange={(e)=> e.target.value}/>
    </div>
     ))
}
{
  categaries?
  <select class="form-select mb-3" aria-label="Default select example" onChange={savetypoe}>
  <span class="input-group-text" id="inputGroup-sizing-default">Evenement</span>
    <option selected>Open this select menu</option>
    {categaries===1?
<>
    <option value="studio">au Studio</option>
    <option value="mariage">Mariage</option>
    <option value="apteme">Bapteme</option>
    <option value="anniv">Anniversaire</option>
    <option value="domicile">Domicile</option>
    <option value="ext">Exterieur</option>
</>    
    :categaries===2?
<>
  {
    beaty.map((beaty)=>(
      <option value={beaty}>{beaty}</option>
    ))
  }
</>
   :categaries===3?
<>
  {
    evenements.map((even)=>(
      <option value={even}>{even}</option>
    ))
  }
</>
  :null}
  </select>
  :null
}
    <div class="input-group mb-3 w-50">
      <input type={'submit'} class="form-control btn btn-primary " value={"Envoi"}/>
    </div>
</form>
</>
  )
}
