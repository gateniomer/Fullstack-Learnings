const apiKey = 'AIzaSyDcQMPGt3JEsfagox4PMJRpP0ijH3b0C0Q';
const channelID = 'UCsBjURrPoezykLs9EqgamOA';

const http = fetch(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelID}&part=snippet,id&order=date&maxResults=20`).then(response => response.json()).then(data => {
  console.log(data);
  data.items.forEach(vid => {
    document.querySelector('.container').innerHTML+=`
    <br>
    <div class='row'>
    <a href='http://www.youtube.com/watch?v=${vid.id.videoId}'><img src='${vid.snippet.thumbnails.medium.url}'></img></a>
    <div>
    <h2><a href='http://www.youtube.com/watch?v=${vid.id.videoId}'>${vid.snippet.title}</a></h2>
    <p>${vid.snippet.description}</p>
    </div>
    <br><br>
    </div>
    `;
  });

}).catch(err => err);


//added iframe
{/* <iframe width="420" height="315"
        allowfullscreen="allowfullscreen"
        mozallowfullscreen="mozallowfullscreen" 
        msallowfullscreen="msallowfullscreen" 
        oallowfullscreen="oallowfullscreen" 
        webkitallowfullscreen="webkitallowfullscreen"
        src="http://www.youtube.com/embed/${vid.id.videoId}?rel=0&autoplay=1">
    </iframe> */}