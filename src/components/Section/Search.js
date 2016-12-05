import React from 'react';

export default class Search extends React.Component{
  constructor(){
    super();
  }

  render(){
    return(
      <input type="text" placeholder="Wiki search..." id="input-text-container">
    )
  }
}
