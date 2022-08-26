import React from 'react'
import Chats from './Chats'

export default function Body(props) {

  const print=props.handleBody.map((chat,index)=>{
return(
<Chats key={index} sendMsg={chat.payam} chatType={chat.type} chatTime={chat.time}/>

)
  })


  return (
    <div> 
      {print}
    </div>
  )
}
