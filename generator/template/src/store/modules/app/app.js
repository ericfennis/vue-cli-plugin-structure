export const types = {
  MUTATION: 'mutation',
};

export default {
  state: {
    value: null,
  },
  getters: {
    [types.MUTATION]: state => state.value,
  },
  mutations: {
    [types.MUTATION](state, value) {
      state.value = value;
    },
  },
  actions: {},
};
