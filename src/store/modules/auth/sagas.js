import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

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
    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user));
    history.push('/deliveries');
    console.log('aqui');
  } catch (error) {
    toast.error('Falha na autenticação, verifique seus dados.');
    yield put(signInFailure());
  }
}

// seta o token para quando o usuario recarregar pagina.
export function setToken({ payload }) {
  if (!payload) return;
  const { token } = payload.auth;

  if (token) {
    // seta o token para todas as reqs feitas para a api
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function signOut() {
  history.push('/');
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_OUT', signOut),
  takeLatest('persist/REHYDRATE', setToken),
]);
