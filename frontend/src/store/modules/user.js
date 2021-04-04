import {
  getUserInfoByAuthToken,
  getUserInfoByName,
  login,
  setAuthTokenToHeader,
  removeAuthTokenToHeader,
  getCheckSurvey,
} from '@/api/user';

// initial state
const state = () => ({
  user: {},
  mypageTabState: 'review',
  selectedUserInfo: {},
  allergyCheck: false,
  selectedIngredients: [],
  selectedBigIdx: 0,
  selectedSurveyFoodIdx: [],
  selectedSurveyAllergyIdx: [],
});

// getters
const getters = {};

// actions
const actions = {
  async LOGIN({ commit, dispatch }, userInfo) {
    let result = false;
    await login(
      userInfo,
      async (response) => {
        commit('setUser', response.data);
        localStorage.setItem('authToken', response.data['authToken']);
        setAuthTokenToHeader(response.data['authToken']);
        await dispatch('GET_USER_CHECK_SURVEY', response.data['userId']);
        result = true;
      },
      (error) => {
        console.log('%cuser.js line:21 error', 'color: #007acc;', error);
      }
    );
    return result;
  },
  GET_USERINFO_BY_NAME({ commit }, userName) {
    getUserInfoByName(
      userName,
      (response) => {
        commit('setSelectedUserInfo', response.data);
      },
      (error) => {
        console.log('%cuser.js line:17 error', 'color: #007acc;', error);
      }
    );
  },
  async GET_USERINFO_BY_AUTHTOKEN({ commit, dispatch }, authToken) {
    setAuthTokenToHeader(authToken);
    await getUserInfoByAuthToken(
      async (response) => {
        response.data.user.authToken = authToken;
        commit('setUser', response.data.user);
        await dispatch('GET_USER_CHECK_SURVEY', response.data['userId']);
      },
      () => {}
    );
  },
  LOGOUT({ commit }) {
    removeAuthTokenToHeader();
    localStorage.removeItem('authToken');
    commit('setUser', {});
  },
  async GET_USER_CHECK_SURVEY({ commit }, userId) {
    await getCheckSurvey(
      userId,
      (response) => {
        commit('setUserCheckSurvey', response.data);
      },
      () => {}
    );
  },
};

// mutations
const mutations = {
  setUser(state, payload) {
    state.user = payload;
  },
  setUserCheckSurvey(state, payload) {
    state.user['survey'] = payload;
  },
  setSelectedUserInfo(state, payload) {
    state.selectedUserInfo = payload;
  },
  setMypageTabState(state, payload) {
    state.mypageTabState = payload;
  },
  setAllergyCheck(state, payload) {
    state.allergyCheck = payload;
  },
  setSelectedIngredients(state, payload) {
    state.selectedIngredients = payload;
  },
  setSelectedBigIdx(state, payload) {
    state.selectedBigIdx = payload;
  },
  addIngredientItem(state, payload) {
    state.selectedIngredients.push(payload);
    const set = new Set(state.selectedIngredients);
    state.selectedIngredients = Array.from(set);
  },
  toggleAllergyCheck(state) {
    state.allergyCheck = !state.allergyCheck;
  },
  setSelectedSurveyFoodIdx(state, payload) {
    state.selectedSurveyFoodIdx = payload;
  },
  setSelectedSurveyAllergyIdx(state, payload) {
    state.selectedSurveyAllergyIdx = payload;
  },
};

export default {
  //   namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
