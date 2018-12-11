export const types = {
  MUTATION: 'mutation',
}

export default {
  state: {
    value: null,
  },
  getters: {
    [MUTATION]: state => state.value,
  },
  mutations: {
    [MUTATION](state, value) {
      state.value = value;
    },
  },
  actions: {},
};
