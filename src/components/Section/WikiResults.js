import React from 'react'
import jQuery from 'jquery';

export default class WikiResults extends React.Component{
  constructor(){
    super();
    this.state = {
      results: []
    }
  }

  componentWillReceiveProps(){
    this._wikiSearch();
  }

  render(){
    const searchResults = this.state.results.map((item, indx) => {
      return
        <div className="sub-section">
            <div className="wiki-title">
              <a href="https://en.wikipedia.org/wiki/{item}" target="_blank">
                {item}
              </a>
              <div className="wiki-snippet"> {item} </div>
            </div>
        </div>
      });

    return(
      <div id="wiki-results">
        <div id='search-results'>
          <ul>
            {searchResults}
          </ul>
        </div>
      </div>
    )
  }

  // performs wiki search
  _wikiSearch(){
    var url = 'https://en.wikipedia.org/w/api.php?' + 'action=query&list=search&format=json&srprop=snippet' + '&srsearch=' + this.props.searchValue + '&callback=?';
    jQuery.getJSON(url, function(data){
      jQuery.each(data, function(index, item){
        console.log("Result data: ", item);        
      });
      this.setState({results: searchWiki});
    }.bind(this)
  );
}

}

WikiResults.propTypes = {
  searchValue : React.PropTypes.string.isRequired
}
