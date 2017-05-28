"use strict";
import React, { Component } from 'react';

class LazyRoute extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      showLoader: false,
    }
  }

  componentDidMount() {
    this.props.component.then((module) => {
      this.component = module.default;
      this.setState({
        loaded: true,
      });
    });
  }

  render() {
    const { loaded } = this.state;
    if (loaded) {
      return <this.component {...this.props}/>
    } else {
      return <div/>
    }
  }
}


export default LazyRoute;

