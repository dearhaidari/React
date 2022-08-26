import React from 'react'

export default function Posts(props) {
  return (
<div className='post'>
{props.post.text}
</div>
  )
}
