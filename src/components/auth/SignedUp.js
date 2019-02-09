import React, { Component } from 'react'

export class SignedUp extends Component {
  state={
    email:'',
    password:'',
    firstName:'',
    lastName:''
  }
  onChange=(evt)=>{
    this.setState({
      [evt.target.id]:evt.target.value
    });
  }
  onSubmit=(evt)=>{
    evt.preventDefault();
    console.log(this.state);
  }
  render() {
    return (
      <div className="container">
        <form onSubmit={this.onSubmit} className="white">
          <h5 className="grey-text text-darken-3">Sign In</h5>
          <div className="input-field">
            <input type="email" name="email" id="email" value={this.state.email} onChange={this.onChange}/>
            <label htmlFor="email">Email:</label>
          </div>
          <div className="input-field">
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" id="password" value={this.state.password} onChange={this.onChange}/>
          </div>
          <div className="input-field">
            <label htmlFor="lastName">Last name:</label>
            <input type="text" name="lastName" id="lastName" value={this.state.lastName} onChange={this.onChange}/>
          </div>
          <div className="input-field">
            <label htmlFor="firstName">First name:</label>
            <input type="text" name="firstName" id="firstName" value={this.state.firstName} onChange={this.onChange}/>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
          </div>
        </form>
      </div>
    )
  }
}

export default SignedUp
