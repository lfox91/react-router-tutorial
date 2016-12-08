// modules/NavLink.js
import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    {/* return <Link to={this.props.to} activeClassName="active">{this.props.children}</Link> */}  
    return <Link {...this.props} activeClassName="active"/>
  }
})
