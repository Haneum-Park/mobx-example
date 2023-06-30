import { observable, action } from 'mobx';

class CounterStore {
  @observable
  num = 0;

  @action
  increase = () => {
    this.num += 1;
  };

  @action
  decrease = () => {
    this.num -= 1;
  };
}

const counterStore = new CounterStore();
export default counterStore;
