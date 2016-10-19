import React, { Component } from 'react';
import YoutubeVideo from './youtube_video';
import Tag from './tag';

class Roll extends Component {

  render() {
    return(
      <div className="Roll">
        <h1>{this.props.title}</h1>
        <YoutubeVideo startTime={this.props.startTime} endTime={this.props.endTime} youtubeIdentifier={this.props.youtubeIdentifier}/>
        <Tag name="politics" />
        <Tag name="clinton" />
        <Tag name="tangerine" />
      </div>
    )
  }
}



export default Roll;
