import React from 'react'
import NavLink from './NavLink'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    console.log(this.props.children)
    return (
      <div>
        <h2>Repos</h2>
        <ul>
          <li><NavLink to="/repos/reactjs/react-router">React Router</NavLink></li>
          <li><NavLink to="/repos/facebook/react">React</NavLink></li>
        </ul>
        {/* will render `Repo.js` when at /repos/:userName/:repoName */}
          {this.props.children}
          <p>^^^^ I don't see anything ^^^^</p>
      </div>
    )
  }
})
