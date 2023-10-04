import React from 'react'
import save from '../Image/save.png'


function ActionDetails(props) {
  const NameDetail={
    display:"flex",
    justifyContent:" space-between",
     fontWeight:"400",
     color:"#2e2f31",
     
  }
  return (
    <div style={NameDetail}>
      <h3 >${props.rent}<span style={{fontSize: "0.9rem"}}>/month</span></h3>
      <div>
        <img src={save} alt="save-Icon" height="40" className=' saveBtn'/>
        <button className='btn btn-primary mx-4'>Rent now</button>
      </div>
    </div>
  )
}

export default ActionDetails
