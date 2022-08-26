import React from 'react'
import '../style.css'

export default function Images(props) {
  return (
    <div className='image'>
    <img src={`${props.img.image}`} alt="" />
  </div>
  )
}
