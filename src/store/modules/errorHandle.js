import { router } from "../../routes/index.js";

export const errorModule = {
  state: {
    error: {
      status: "",
      message: ""
    }
  },

  getters: {
    fetchedError(state) {
      return state.error;
    }
  },

  mutations: {
    SET_ERROR(state, error) {
      state.error.status = error.status;
      state.error.message = "하...죄송..";
    }
  },

  actions: {
    GET_ERROR({ commit }, err) {
      console.log("스토어 안이야!", err);
      commit("SET_ERROR", err);
      router.push({ name: "Error" });
    }
  }
};
