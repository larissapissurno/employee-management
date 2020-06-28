import api from '../services/api';
import router from '../router';

interface Mutation {
  commit: Function;
}

interface Request {
  email: string;
  password: string;
}

interface User {
  token: string;
}

interface State {
  status: Record<string, any>;
  user: User | null;
}
const storagedUser = localStorage.getItem('user');
const localUser = storagedUser ? JSON.parse(storagedUser) : null;
const initialState = localUser
  ? { status: { loggedIn: true }, user: localUser }
  : { status: {}, user: null };

const authentication = {
  namespaced: true,
  state: initialState,
  actions: {
    login: ({ commit }: Mutation, { email, password }: Request) => {
      commit('loginRequest');

      api.post('/sessions', { email, password }).then(
        (response) => {
          const { token, user } = response.data;

          commit('loginSuccess', user);
          localStorage.setItem('user-token', token);

          router.push('/about');
        },
        (error) => {
          commit('loginFailure', error);
        },
      );
    },
  },
  mutations: {
    loginRequest(state: State) {
      state.status = { loggingIn: true };
    },
    loginSuccess(state: State, user: User) {
      state.status = { loggedIn: true };
      state.user = user;
    },
    loginFailure(state: State) {
      state.status = {};
      state.user = null;
    },
    logout(state: State) {
      state.status = {};
      state.user = null;
    },
  },
};

export default authentication;
