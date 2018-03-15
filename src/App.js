import React, { Component } from 'react';
import routes from './routes';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">

          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </nav>

          <div className="body">
          {routes}
          </div>
      </div>
    );
  }
}

export default App;
