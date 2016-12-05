import React from 'react';
import WikiResults from './WikiResults';

export default class Main extends React.Component{
  constructor(){
    super();
  }

  render(){
    return(
      <section>
          <div id="search-container">
            <input type="text" placeholder="Wiki search..." id="input-text-container"/>
            <a href="https://en.wikipedia.org/wiki/Special:Random" target="_blank">
                <i id="random-icon" className="fa fa-random fa-2x" hovertext="Click for a random article"></i>
            </a>
          </div>
          <div id="wiki-results">
            <WikiResults />
          </div>
      </section>
    )
  }
}
