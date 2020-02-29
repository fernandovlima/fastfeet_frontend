import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';
import history from '~/services/history';

import { signInSuccess, signInFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', { email, password });
    console.tron.log(response);
    const { token, user } = response.data;

    // seta o token para todas as reqs feitas para a api
    api.defaults.headers.Authorization = `Beares ${token}`;

    yield put(signInSuccess(token, user));

    history.push('/deliveries');
  } catch (error) {
    yield put(signInFailure());
  }
}

// seta o token para quando o usuario recarregar pagina.
export function setToken({ payload }) {
  if (!payload) return;
  const { token } = payload.auth;

  if (token) {
    // seta o token para todas as reqs feitas para a api
    api.defaults.headers.Authorization = `Beares ${token}`;
  }
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('persist/REHYDRATE', setToken),
]);
