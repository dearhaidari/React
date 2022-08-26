import React, { Component } from 'react'

export default class Footer extends Component {
    constructor(props){
        super(props);
        this.state={
            input:''
        }
this.handelChange=this.handelChange.bind(this);
this.handelSubmit=this.handelSubmit.bind(this);
    }
    handelChange(event){
        this.setState({
            input: event.target.value
        })
    }

    handelSubmit(){
        this.props.handelsubmit(this.state.input);
        this.setState({
            input:''
        })
        
    }
  render() {
    return (
        <div className="input-group">
                                        <div className="input-group-append">
                                            <span className="input-group-text attach_btn"><i className="fas fa-paperclip"></i></span>
                                        </div>
                                        <textarea name="" className="form-control type_msg" placeholder="Type your message..." value={this.state.input} onChange={this.handelChange}></textarea>
                                        <div className="input-group-append">
                                            <span className="input-group-text send_btn" onClick={this.handelSubmit}><i className="fas fa-location-arrow"></i></span>
                                        </div>
                                    </div>
    )
  }
}
