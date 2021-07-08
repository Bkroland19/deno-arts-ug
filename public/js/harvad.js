// Find all of the objects that are paintings and have the word "rabbit" in the title
var apiEndpointBaseURL = "https://api.harvardartmuseums.org/object";
var queryString = $.param({
    apikey: "84efc3ff-41b9-41b2-80f7-9170cd88db36",
    title: "rabbit",
    classification: "Paintings"
});

$.getJSON(apiEndpointBaseURL + "?" + queryString, function(data) {
   console.log(data); 
});