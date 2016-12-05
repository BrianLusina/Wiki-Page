//https://en.wikipedia.org/wiki/Special:Random.
//https://www.mediawiki.org/wiki/API:Main_page.
$(document).ready(function(){

    $('.social').hover(function(){
      $(this).effect('bounce',{times:3},300);
    });

    $('#input-text-container').keyup(function(){
        var inputTxt = $('#input-text-container'); //store typed in value in variable
        var value = inputTxt.val() //get the value of the input text
        var url = 'https://en.wikipedia.org/w/api.php?' + 'action=query&list=search&format=json&srprop=snippet' + '&srsearch=' + value + '&callback=?';

        /*perform wiki search*/
        function wikiSearch(text){
            var searchWiki = "<div id='search-results'>";
            $.each(text.query.search, function(index, item){
                searchWiki += '<div class="sub-section">' ;
                searchWiki += '<ul><li class="wiki-title">';
                searchWiki += '<a href="https://en.wikipedia.org/wiki/' + item.title + '" target="_blank">' + item.title + '</li></a>';
                searchWiki += '<li class="wiki-snippet">' + item.snippet + '...</li>'
                searchWiki += '</ul>';
                searchWiki += '</div>';
            });//end each search
            searchWiki += '</div>';

            //populate the results in the wiki-results
            $('#wiki-results').html(searchWiki);
        }//end function wikiSearch
    // get json
    $.getJSON(url, wikiSearch);
    });
});

/*share wiki results*/
/*<div class="share-wiki-find" >
    <a href=" " target="_blank"><i class="fa fa-twitter fa-2x"></i></a>
    <a href=" " target="_blank"><i class="fa fa-facebook fa-2x"></i></a>
    <a href=" " target="_blank"><i class="fa fa-github fa-2x"></i></a>
    <a href=" " target="_blank"><i class="fa fa-reddit fa-2x"></i></a>
  </div>*/
