import React from 'react';
import Header from './Header';
import Footer from './Footer'

export default class App extends React.Component{
  constructor(){
    super();
  }

  render(){
    return(
      <Header />
      <Footer />
    )
  }
}
