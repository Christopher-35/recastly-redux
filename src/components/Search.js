import React from 'react';


var Search = ({handleSearchInputChange}) => {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     value: ''
  //   };
  // }

  // handleInputChange(e) {
  //   this.props.getYouTubeVideos(e.target.value);
  //   this.setState({
  //     value: e.target.value
  //   });
  // }

    //console.log(this.props.getYouTubeVideos);
    return (
      <div className="search-bar form-inline">
        <input
          className="form-control"
          type="text"
          onChange={(e) => handleSearchInputChange(e.target.value)}
        />
        <button className="btn hidden-sm-down">
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div>
    );

};

export default Search;

