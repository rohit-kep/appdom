import React, { Component } from 'react'


export default class Authentication extends Component {
   constructor(props){
    super(props)
    this.state = {}
   }
   onclick = ()=>{
    console.log('event triggered')
    this.setState({count : 'oi'})
   } 
  render() {
    return (
      <div className=' w-[300px] flex flex-col bg-blue-400 ' onClick={this.onclick} >
            <label htmlFor="name">Name</label>
            <input type="text" id='name'/>
            <label htmlFor="passwd">Password</label>
            <input type="text" id='passwd' />
            <button>Register</button>
            <button>Login</button>
      </div>
    )
  }
}
