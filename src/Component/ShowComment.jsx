import React from 'react'

export default function ShowComment(props) {
    const chap=props.data.map(chaps=>{
        return(
            <span>
            {chaps.body}
            </span>
        )
    })
  return (
    <div>
{chap}
    </div>
  )
}
