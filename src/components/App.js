import React from 'react';
import Header from './Header';
import Footer from './Footer'
import Main from './Section/Main';


export default class App extends React.Component{
  constructor(){
    super();
  }

  render(){
    return(
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}
