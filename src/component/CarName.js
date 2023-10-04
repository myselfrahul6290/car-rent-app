import React from 'react'

function CarName(props) {
  const NameDetail={
    display:"flex",
    justifyContent:" space-between",
     fontWeight:"400",
     color:"#2e2f31"
  }
  return (
    <div style={NameDetail}>
      <h4>{props.name}</h4>
      <h5>{props.year}</h5>
    </div>
  )
}

export default CarName
