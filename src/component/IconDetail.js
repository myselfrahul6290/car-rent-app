import React from "react";

function IconDetails(props){
 
    const Details={
        display:"flex",
        flexDirection: "row",
        width:"40%",
        
    };
    
    return(
        <div style={Details}>
            <img src={props.img} height="20" alt="icon"/>
            <h6 style={{fontWeight:"400",padding:"0px 5px "}}>{props.txt}</h6>
        </div>
    );
}

export default IconDetails
