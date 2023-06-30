import { observable, action } from 'mobx';

// NOTE counter state를 store에 저장
class CounterStore {
  // NOTE observable로 관찰할 state를 선언
  @observable
  num = 0;

  // NOTE action으로 state를 변경하는 함수를 선언
  @action
  increase = () => {
    this.num += 1;
  };

  @action
  decrease = () => {
    this.num -= 1;
  };
}

// NOTE 미리 생성한 store를 export
// NOTE CounterStore를 가져와서 생성할 수도 있음
const counterStore = new CounterStore();
export default counterStore;
