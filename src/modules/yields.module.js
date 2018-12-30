const yields = {
  state: {
    yieldCount: null,
  },
  mutations: {
    setYieldCount(state, { yieldCount }) {
      state.yieldCount = yieldCount;
    },
  },
  actions: {
    async getYieldCount({ commit }) {
      const response = await fetch('https://yield.io/api/allYields.json', { mode: 'cors' });
      const json = await response.json();
      commit('setYieldCount', { yieldCount: json.length });
    },
  },
};

export default yields;
