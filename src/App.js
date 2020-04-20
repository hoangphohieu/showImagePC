import React, { Component } from 'react';
import './App.css';
import ImageDesignContainer from './containers/imageDesignContainer';






class App extends Component {

  componentWillMount() {
    localStorage.setItem("listFolder", JSON.stringify([]));
    localStorage.setItem("imagesCloudiary", JSON.stringify([]));
    // localStorage.setItem("PCFail", JSON.stringify([]));
    // localStorage.setItem("PCProperties", JSON.stringify([]));
  }

  render() {



    return (
      <React.Fragment>
        <ImageDesignContainer />

      </React.Fragment>
    );
  }
}
export default App;
