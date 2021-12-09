import { login, getInfo, updateInfo } from "@/api/user";
import { getToken, setToken, removeToken } from "@/libs/auth";
import { resetRouter } from "@/router";

const getDefaultState = () => {
  return {
    token: getToken(),
    name: "",
    avatar: "",
    mobile: "",
    email: "",
    userId: "",
    role: ""
  };
};

const state = getDefaultState();

const mutations = {
  RESET_STATE: state => {
    Object.assign(state, getDefaultState());
  },
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
  SET_NAME: (state, name) => {
    state.name = name;
  },
  SET_MOBILE: (state, mobile) => {
    state.mobile = mobile;
  },
  SET_EMAIL: (state, email) => {
    state.email = email;
  },
  SET_USER_ID: (state, userId) => {
    state.userId = userId;
  },
  SET_ROLE: (state, role) => {
    state.role = role || "admin";
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar;
  }
};

const actions = {
  // user login
  login({ commit }, userInfo) {
    const { username, password } = userInfo;
    return new Promise((resolve, reject) => {
      login({ username: username.trim(), password: password })
        .then(response => {
          resolve();
        })
        .catch(error => {
          reject(error);
        });
    });
  },

  saveToken({ commit }, token) {
    commit("SET_TOKEN", token);
    setToken(token);
  },

  // get user info
  getInfo({ commit }) {
    return new Promise((resolve, reject) => {
      getInfo()
        .then(response => {
          const { data } = response;

          if (!data) {
            return reject("Verification failed, please Login again.");
          }

          const {
            username: name,
            url: avatar,
            email,
            mobile,
            role,
            themeStyle,
            id: userId
          } = data;

          commit("SET_NAME", name);
          commit("SET_EMAIL", email);
          commit("SET_MOBILE", mobile);
          commit("SET_ROLE", role);
          commit(
            "settings/CHANGE_SETTING",
            { key: "theme", value: themeStyle ? "dark" : "light" },
            { root: true }
          );
          commit("SET_USER_ID", userId);
          commit("SET_AVATAR", avatar);
          resolve(data);
        })
        .catch(error => {
          reject(error);
        });
    });
  },

  updateInfo({ dispatch }, userInfo) {
    return updateInfo(userInfo).then(() => {
      dispatch("getInfo");
    });
  },

  // user logout
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      removeToken(); // must remove  token  first
      resetRouter();
      commit("RESET_STATE");
      resolve();
    });
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      removeToken(); // must remove  token  first
      commit("RESET_STATE");
      resolve();
    });
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
