import React from 'react'

export default class Header extends React.Component{
  constructor(){
    super();
  }
  render(){
    return(
      <header id="header">
          <h2>Mini Wiki</h2>
          <span>Wikipedia in one page</span>
      </header>
    )
  }
}

Header.PropTypes = {

}
