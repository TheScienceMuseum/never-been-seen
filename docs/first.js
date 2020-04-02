var request = new XMLHttpRequest();
var imghost = 'https://s3-eu-west-1.amazonaws.com/smgco-images/images/';

request.addEventListener('load', function(e) {
    // response comes back as "{data: [{attributes: {locations: [{...}], summary_title: '...'} ...}, {} ...]}"
    JSON.parse(this.responseText).data.forEach(function(el) {
    
	if (el.attributes.admin && el.attributes.admin.analytics && el.attributes.admin.analytics.count && el.attributes.admin.analytics.count.total) {
            getObject();
            return;
	}

    
    document.getElementById('title').innerHTML = '<h1>Be the first to see <a href="' + el.links.self + ' target="_blank"">object  ' + el.attributes.identifier[0].value + '</a> online or view <a href="index.html">another object</a>.</h1>';
    document.getElementById('pix').innerHTML = '<a href="' + el.links.self + '" target="_blank"><img src="' + imghost + el.attributes.multimedia[0].processed.small_thumbnail.location + '"></a>';

  });
});

// Get a random object
function getObject () {
  request.open('GET', 'https://collection.sciencemuseumgroup.org.uk/search/images/?random=1');
  request.setRequestHeader('accept', 'application/json');
  request.send();
}
getObject();
