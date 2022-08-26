import React, { Component} from 'react'
import { useState } from 'react';
import ShowComment from './ShowComment';
import '../style.css';

export default class Comment extends Component {
  constructor(props){
    super(props);
    this.state={
      Comment:null,
    }
    this.getComment=this.getComment.bind(this)
  }

  async getComment(){
      const comment=await fetch(`http://localhost:3001/comments?post-Id=${this.props.data.id}`);
      return await comment.json();
  }

componentDidMount(){
 if(this.props.data){
  this.getComment().then(Comment => 
    this.setState({
      Comment
    })
  )
 }
}

componentDidUpdate(prevProps)
{
  if(prevProps.data.id != this.props.data.id){
    this.getComment().then(Comment => 
      this.setState({
        Comment
      })
    )
  }
}

  render() {
    
    return (
      <div>
        comment :
        <br />
       
    {this.state.Comment ? <ShowComment data={this.state.Comment}/>:null}
      </div>
    )
  }
}
