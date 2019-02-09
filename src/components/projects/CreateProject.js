import React, { Component } from 'react'

export class CreateProject extends Component {
  state={
    title:'',
    content:''
  }
  onChange=(evt)=>{
    this.setState({
      [evt.target.id]:evt.target.value
    });
  }
  onSubmit=(evt)=>{
    evt.preventDefault();
    console.log(this.state);
    this.setState({
      title:'',
      content:''
    })
  }
  render() {
    return (
      <div className="container">
        <form onSubmit={this.onSubmit} className="white">
          <h5 className="grey-text text-darken-3">Create Project</h5>
          <div className="input-field">
            <label htmlFor="title">Title:</label>
            <input type="text" name="title" id="title" value={this.state.title} onChange={this.onChange}/>
          </div>
          <div className="input-field">
            <label htmlFor="content">Content:</label>
            <textarea className="materialize-textarea" name="content" id="content" value={this.state.content} onChange={this.onChange}></textarea>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Create</button>
          </div>
        </form>
      </div>
    )
  }
}

export default CreateProject
