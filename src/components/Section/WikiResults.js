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
              <a href="https://en.wikipedia.org/wiki/{item.title}" target="_blank">
                {item.title}
              </a>
              <div className="wiki-snippet"> {item.snippet} </div>
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
    jQuery.getJSON(url, (data) =>{
      jQuery.each(data, (index, items) =>{
        this.setState({results:items});
      });
    }
  ).bind(this);
}

}

WikiResults.propTypes = {
  searchValue : React.PropTypes.string.isRequired
}
