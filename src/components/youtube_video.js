import React, { Component } from 'react';

class YoutubeVideo extends Component {

  render() {
    return(
      <div className="video">
        <iframe width="560" height="315" src={"https://www.youtube.com/embed/" + this.props.youtubeIdentifier + "?&start=" + this.props.startTime + "&end=" + this.props.endTime + "&modestbranding=1&autohide=1&showinfo=0&controls=0&autoplay=1" }></iframe>
      </div>
    )
  }
}

export default YoutubeVideo;
