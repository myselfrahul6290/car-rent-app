import React, { useState } from 'react'
import Card from './Card'
import Data from "../data.json"



function HomePage() {
  const brandName=["Audi", "Hunadai","BMW","Suv"];
  const[search,setSearch]=useState('');

  console.log(search);

const [currentpage,setCurrpage]=useState(1);
const recordperpage=6;
const lastIndex=currentpage * recordperpage;
const firstIndex=lastIndex-recordperpage;
const recods=Data.slice(firstIndex, lastIndex);
const npage=Math.ceil(Data.length/recordperpage);
const numbers=[...Array(npage+1).keys()].slice(1);


function prevBtn(){
  if(currentpage!==firstIndex){
   setCurrpage(currentpage-1);
  }
}
function NextBtn(){
 if(currentpage!==lastIndex){
   setCurrpage(currentpage+1);
  }

}
function changepage(id){
  setCurrpage(id);
}

return (
    <>
<div className="NavBar"> 
<input className='search' 
        type="search" 
        placeholder='Search...'  
        onChange={(e)=>setSearch(e.target.value)}
/>
<button className='btn btn-primary mx-3'>Search</button>
<select className='Options'>
  {brandName.map((ele, ind)=>{
      return <option key={ind}>{ele}</option>})
  }
</select>
</div> 

<div className='Box'>
      {recods.filter((car)=>{
        return search.toLowerCase()===''?car:car.Name.toLowerCase().includes(search);
      }).map((ele)=>{
        return(
      <div key={ele.id}>
        <Card 
        path={ele.path}
         Name={ele.Name}
         year={ele.year}
         rent={ele.rent}
          />
          </div>)

      })
    }

    </div>
    <div className='Pagination'>
      <ul>
        <li ><button className='btn btn-primary' onClick={prevBtn}>Prev</button></li>
        {
          numbers.map((n,i)=>{
            return <li  key={i} ><button className="btn btn-light"onClick={()=>changepage(n)}>{n}</button></li>
          })
        }
        <li><button className='btn btn-primary' onClick={NextBtn} >Next</button></li>
      </ul>
    </div>

    </>
    
  )


}

export default HomePage
