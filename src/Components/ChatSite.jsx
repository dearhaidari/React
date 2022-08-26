import React, { Component } from 'react'
import '../style/style.css'
import Body from './Body'
import Footer from './Footer'

export default class ChatSite extends Component {
    constructor(props){
        super(props)
        this.state={
            person:'Mohammad Haidari',
            titile:'live chat',
            message:[
                {payam:'hi im fine and you!',time:'8:55 AM, Today',type:'send',},
                {payam:'Hi Khalid i am good tnx how about you thanks?',time:'8:56 AM, Today',type:'receive'},
                {payam:'i am good tnx how a?',time:'8:56 AM, Today',type:'send'}
                     ]
        }
        this.handelSubmit=this.handelSubmit.bind(this);
      
    }
    handelSubmit(messages){
        this.setState(state=>{
            return{
                ...state,
                message:[
                    ...state.message,
                    {payam:messages,time:'8:56 AM, Today',type:'send'}
                ]
            }
        })
    }

    handleCountMsg(){
         
            return this.state.message.length;
    }
  render() {
    
    return (
       
        
        
            
                
            
                <div className="container-fluid h-100">
                    
                        <div className="col-md-8 col-xl-6 chat">
                            <div className="card">
                                <div className="card-header msg_head">
                                    <div className="d-flex bd-highlight">
                                        <div className="img_cont">
                                            <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" className="rounded-circle user_img"/>
                                            <span className="online_icon"></span>
                                        </div>
                                        <div className="user_info">
                                            <span>{`chat with ${this.state.person}`}</span>
                                            <p>{this.handleCountMsg()}</p>
                                        </div>
                                        <div className="video_cam">
                                            <span><i className="fas fa-video"></i></span>
                                            <span><i className="fas fa-phone"></i></span>
                                        </div>
                                    </div>
                                    <span id="action_menu_btn"><i className="fas fa-ellipsis-v"></i></span>
                                    <div className="action_menu">
                                        <ul>
                                            <li><i className="fas fa-user-circle"></i> View profile</li>
                                            <li><i className="fas fa-users"></i> Add to close friends</li>
                                            <li><i className="fas fa-plus"></i> Add to group</li>
                                            <li><i className="fas fa-ban"></i> Block</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card-body msg_card_body">
                                <Body handleBody={this.state.message}/>
                                
                                </div>
                                <div className="card-footer">
                                <Footer handelsubmit={this.handelSubmit}/>
                                </div>
                            </div>
                        </div>
                    </div>
                
            
        
        
    )
  }
}
