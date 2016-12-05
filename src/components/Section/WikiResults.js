import React from 'react'
import jQuery from 'jquery';

export default class WikiResults extends React.Component{
  constructor(){
    super();
    this.state = {
      results: {
        title: "",
        snippet: ""
      }
    }
  }

  componentDidMount(){
    this._wikiSearch();
  }

  render(){
    return(
      <div id="wiki-results">
      </div>
    )
  }

  // performs wiki search
  _wikiSearch(){
    let data = this.props.searchValue;
    var url = 'https://en.wikipedia.org/w/api.php?' + 'action=query&list=search&format=json&srprop=snippet' + '&srsearch=' + this.props.searchValue + '&callback=?';
    jQuery.getJSON(url, function(data){
      console.log(data);
    }
  );

      // var searchWiki = "<div id='search-results'>";
      // searchWiki += '<div class="sub-section">' ;
      // searchWiki += '<ul><li class="wiki-title">';
      // searchWiki += '<a href="https://en.wikipedia.org/wiki/' + item.title + '" target="_blank">' + item.title + '</li></a>';
      // searchWiki += '<li class="wiki-snippet">' + item.snippet + '...</li>'
      // searchWiki += '</ul>';
      // searchWiki += '</div>';
      // searchWiki += '</div>';
  }

}

WikiResults.propTypes = {
  searchValue : React.PropTypes.string.isRequired
}
