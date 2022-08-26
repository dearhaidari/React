import React from 'react'

export default function Link(props) {


    const page=props.post?props.post.map((data,index)=>{
       return(
         <li key={index} onClick={(e)=>{props.findIndex(data.id)}}>{data.title}</li>
       )
    }):null;


  return (
    <div className='link'>
    <ul>
   {page}
    </ul>
  </div>
  )

  
}
