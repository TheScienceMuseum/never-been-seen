var request = new XMLHttpRequest();
var imghost = 'https://s3-eu-west-1.amazonaws.com/smgco-images/images/';
var pageprefix = 'https://collection.sciencemuseumgroup.org.uk/objects/';

request.addEventListener('load', function(e) {

  el = JSON.parse(this.responseText)

  identifier = el._source.identifier[0].value
  pageurl = pageprefix + el._id; 
  imgurl = imghost + el._source.multimedia[0].processed.small_thumbnail.location;

  document.getElementById('title').innerHTML = '<h1>Be the first to see <a href="' + pageurl + '" target="_blank">object  ' + identifier + '</a> online or view <a href="index.html">another object</a>.</h1>';
  document.getElementById('pix').innerHTML = '<a href="' + pageurl + '" target="_blank"><img alt="" src="' + imgurl + '"></a>';
});

// Get a random object
function getObject () {
  request.open('GET', 'https://collection.sciencemuseumgroup.org.uk/neverbeenseen');
  request.send();
}

getObject();
