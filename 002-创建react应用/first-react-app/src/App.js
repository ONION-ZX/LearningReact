import React from 'react';
import YoButton from './YoButton';

class App extends React.Component {
  render() {
    return (
      <div>
        <div id="a">
          <p>I'm App component</p>
          <YoButton/>
          <YoButton/>
          <YoButton/>
        </div>
        <div id="b">
          <YoButton/>
        </div>
      </div>
    );
  }
}

class Yo extends React.Component {
  render() {
    return (
      <div>
        <p>I'm Yo component</p>
        <App/>
        <App/>
      </div>
    )
  }
}

export default Yo;
