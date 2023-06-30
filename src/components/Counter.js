import React from 'react';
import { observer } from 'mobx-react';
import PropType from 'prop-types';

// NOTE 이 부분이 counter를 관찰하는 컴포넌트
@observer
class Counter extends React.Component {
  static propTypes = {
    counter: PropType.object(
      PropType.shape({
        num: PropType.number,
        increase: PropType.func,
        decrease: PropType.func,
      })
    ),
  };

  render() {
    return (
      <div>
        <h1>Counter</h1>
        {this.props.counter.num}
        <button onClick={this.props.counter.increase}>+</button>
        <button onClick={this.props.counter.decrease}>-</button>
      </div>
    );
  }
}

export default Counter;
