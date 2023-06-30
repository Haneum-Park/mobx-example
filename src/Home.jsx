import React, { Component } from 'react';

import counterStore from 'stores/counter';
import Counter from 'components/Counter';

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <p>My awesome Home component</p>
        <Counter counter={counterStore} />
      </div>
    );
  }
}

export default Home;
