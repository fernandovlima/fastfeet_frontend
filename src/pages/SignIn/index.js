import React from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { Input, Form } from '@rocketseat/unform';

// actions
import { signInRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.png';

// import { Container } from './styles';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('e-mail inválido')
    .required('e-mail obrigatório'),
  password: Yup.string()
    .required('senha obrigatória')
    .min(6, 'no mínimo 6 caracteres'),
});

export default function SignIn() {
  const dispatch = useDispatch();
  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }
  return (
    <>
      <img src={logo} alt="fastfeet" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <p>SEU E-MAIL</p>
        <Input name="email" type="email" placeholder="exemplo@email.com" />
        <p>SUA SENHA</p>
        <Input name="password" type="password" placeholder="**********" />
        <button type="submit">Entrar no sistema</button>
      </Form>
    </>
  );
}
