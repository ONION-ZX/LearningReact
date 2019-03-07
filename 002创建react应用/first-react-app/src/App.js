import React from 'react';
import YoButton from './YoButton';

class App extends React.Component {
  render() {
    return (
      <div>
        <div id="a">
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

export default App;
