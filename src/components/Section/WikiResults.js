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
    return(
      <div id="wiki-results">
        {this.state.results}
      </div>
    )
  }

  // performs wiki search
  _wikiSearch(){
    var url = 'https://en.wikipedia.org/w/api.php?' + 'action=query&list=search&format=json&srprop=snippet' + '&srsearch=' + this.props.searchValue + '&callback=?';
    jQuery.getJSON(url, function(data){
      var searchWiki = "<div id='search-results'>";
      jQuery.each(data, function(index, item){
        searchWiki += '<div class="sub-section">' ;
        searchWiki += '<ul><li class="wiki-title">';
        searchWiki += '<a href="https://en.wikipedia.org/wiki/' + data.title + '" target="_blank">' + data.title + '</li></a>';
        searchWiki += '<li class="wiki-snippet">' + data.snippet + '...</li>'
        searchWiki += '</ul>';
        searchWiki += '</div>';
        searchWiki += '</div>';
      });
      searchWiki += '</div>';
      this.setState({results: searchWiki});
      console.log("Result data: ",this.state.results);
    }.bind(this)
  );
}

}

WikiResults.propTypes = {
  searchValue : React.PropTypes.string.isRequired
}
