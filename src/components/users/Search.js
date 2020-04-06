import React, { Component } from 'react'

export class Search extends Component {
  state = {
    text: ''
  }

  onChange = (e) => {
    /* for more than one input fields use [e.target.name]: e.target.value */
    this.setState({ text: e.target.value })
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.text)
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className="form">
          <input type="text" name="text" placeholder="Search Users.." value={this.state.text}
            onChange={this.onChange}
          />
          <input type="submit" value="Search" className="btn btn-dark btn-block" />
        </form>
      </div>
    )
  }
}

export default Search
