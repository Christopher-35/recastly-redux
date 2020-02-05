import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';




var handleVideoSearch = (q) => {

  //TODO:  Write an asynchronous action to handle a video search!
// return {
//   type: '',
//   videos: q
//   }

var obj = {
  //type: 'handleVideoSearch'
}


var options = {
  key: YOUTUBE_API_KEY,
  query: q
};

searchYouTube(options, (videos) => {
  console.log('videos', videos);

  obj.video = changeVideo(videos[0]);
  obj.videos = changeVideoList(videos);

  }
 );

 return function(){
   return obj;
 };

}

export default handleVideoSearch;
