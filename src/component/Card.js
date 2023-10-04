import React from 'react'
import IconDetails from './IconDetail'
import CarName from './CarName'
import ActionDetails from './ActionDetails'




function Card(props) {
   
  const logo={
     fuel:require("../Image/fueal.png"),
     speed:require("../Image/speed.jpg"),
     person:require("../Image/person.png"),
     setting:require("../Image/setting.png")

  }
  

  return (
    
 <div  className="card" style={{width: "25rem", margin:"20px", background:"#e0f9ff"}}>
  <img className="card-img-top" src={props.path} height="250" alt='car' />
  <div className="card-body">
    <CarName name={props.Name} year={props.year} />
   <div className="Deatils-Box">
    <IconDetails img={logo.person} txt={"4 people"} />
    <IconDetails img={logo.fuel} txt={"Gasoline"} />
    <IconDetails img={logo.speed} txt={"7.7km/1-litre"} />
    <IconDetails img={logo.setting} txt={"Automatic"} />
    </div> 
    <hr />
    <ActionDetails rent={props.rent} />
  </div>
</div>
    
  )
}

export default Card
