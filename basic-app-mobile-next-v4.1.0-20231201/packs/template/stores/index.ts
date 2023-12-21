import { createStore } from "vuex";

interface IState {
  counter: number;
}

export const store = createStore({
  state(): IState {
    return {
      counter: 0,
    };
  },
  mutations: {
    increment(state: IState) {
      state.counter++;
    },
  },
});
