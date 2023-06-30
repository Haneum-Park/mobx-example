import React, { Component } from 'react';

import Counter from 'components/Counter';

// NOTE store 가져오는 부분
import counterStore from 'stores/counter';

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <p>My awesome Home component</p>
        {/* // NOTE counter를 Counter 컴포넌트가 쓰니 parent인 Home component에서 counterStore를 props로 선언 */}
        <Counter counter={counterStore} />
      </div>
    );
  }
}

export default Home;
