import React, { Component } from 'react';

class Tag extends Component {

  render() {
    return(
      <span>{this.props.name + " "}</span>
    )
  }
}

export default Tag;
