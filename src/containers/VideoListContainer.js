import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';

//var VideoListContainer = () => {};

//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.

const mapStateToProps = (state) => {
  return {
    handleVideoListEntryTitleClick: state.handleVideoListEntryTitleClick,
    videos: state.videoList

  }
}

const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    handleVideoListEntryTitleClick: () => dispatch({ type: 'CHANGE_VIDEO_LIST' })
  }
}

var VideoListContainer = connect(mapStateToProps, mapDispatchToProps)(VideoList)

export default VideoListContainer;
