$(document).ready(function() {

	// Click
	$("#search").click(function(event) {
		event.preventDefault(); // Prevents Deafult if any
		var searchTerm = $("#query").val(); // User input Value
		getRequest(searchTerm);  // User Input

	});

	// Gets JSON Request
   		function getRequest(searchTerm){
			url = 'https://www.googleapis.com/youtube/v3/search'; // JSON URL
  			var params = { // Var parameters
    			part: 'snippet',
    			key: 'AIzaSyCJXYcZvexj37P2olYKiSHdnmpSHTl_eaQ',
    			q: searchTerm,
    			type: 'video',
    			maxResults: '10',
  			};
  				$.get(url, params, function(data){ // get JSON and the url ,params and a fucntion with a var of data
  					showResults(data.items);
 				 });
		}

		function showResults(results) {
			var html = "";
			$('#images').empty(); // Empty Previous Images
			$.each(results, function(index,value){ // .each is all of funtion var which is the Search data put into a var of value
				 vidThumburl =  value.snippet.thumbnails.default.url; 
				 vidThumbimg = '<img id="thumb" src="'+ vidThumburl +'" alt="No Image Available." ">';
				html += '<h3>' + value.snippet.title + '</h3>';
				html += '<p>' + value.snippet.description + '</p>';
				console.log(value.snippet.title, value.snippet.description); // all of the json search data Titles console log them
				$('#images').append(vidThumbimg); 
				$("#search-results").html(html);
			}); 
		}
});
 //myData = data.items[0].snippet.thumbnails.default.url;
