const namespace = 'app';

export const MUTATION = `${namespace}/mutation`;

export default {
  state: {
    value: null,
  },
  getters: {},
  mutations: {
    [MUTATION](state, value) {
      state.value = value;
    },
  },
  actions: {},
};
