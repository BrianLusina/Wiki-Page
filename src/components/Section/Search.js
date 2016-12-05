import React from 'react';

//will capture user input from the input test and perform the search
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
