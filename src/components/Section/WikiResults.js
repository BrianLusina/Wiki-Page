import React from 'react'
import jQuery from 'jquery';

export default class WikiResults extends React.Component{
  constructor(){
    super();
    this.state = {
      results: []
    }

    this._wikiSearch = this._wikiSearch.bind(this);
  }

  componentWillReceiveProps(){
    this._wikiSearch();
  }

  render(){
    const searchResults = this.state.results.map((item, indx) => {
        return(
          <div key={indx} className="sub-section">
              <div className="wiki-title">
                <a href="https://en.wikipedia.org/wiki/{item.title}" target="_blank">
                  {item.title}
                </a>
                <div className="wiki-snippet"> {item.snippet} </div>
              </div>
          </div>
        )
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
    jQuery.getJSON(url, (data) => {
      let searchRes = data.query.search;
      this.setState({results:searchRes});
    });
}

}

WikiResults.propTypes = {
  searchValue : React.PropTypes.string.isRequired
}
