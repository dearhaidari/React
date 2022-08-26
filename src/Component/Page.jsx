import React, { Component } from 'react'
import '../style.css';
import Link from './Link';
import Images from './Images';
import Posts from './Posts';
import Comment from './Comment';
export default class Page extends Component {
constructor(props){
  super(props)
  this.state={
  posts:null,
  number:null
}


this.getIndex=this.getIndex.bind(this);
}


async getData(){
  const data=await fetch('http://localhost:3001/posts');
  return await data.json();
}

getIndex(index){
this.setState({
  number:index
})
}

componentDidMount(){
 this.getData().then(posts=>{
 this.setState({posts,number:0})
 })

}
  render() {
    return (
      <div className='container'>
        <div className='sidebar'>
        <Link post={this.state.posts} findIndex={this.getIndex}/>
        </div>
        <div className='rightbar'>
         {null !=this.state.number&& <Images img={this.state.posts[this.state.number]}/>}
         {null !=this.state.number&& <Posts post={this.state.posts[this.state.number]}/>}
         {null !=this.state.number&& <Comment data={this.state.posts[this.state.number]}/>}
        </div>
      </div>
    )
  }
}
