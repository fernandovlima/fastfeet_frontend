import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { signOut } from '~/store/modules/auth/actions';

import { Container, Content, Profile } from './styles';

import logo from '~/assets/logo.png';

export default function Header() {
  const dispatch = useDispatch();
  const userName = useSelector(state => state.user.profile.name);

  function handleSignOut() {
    dispatch(signOut());
  }
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="fastfeet" />
          <Link to="/deliveries">ENCOMENDAS</Link>
          <Link to="/deliverymans">ENTREGADORES</Link>
          <Link to="/recipients">DESTINATÁRIOS</Link>
          <Link to="/problems">PROBLEMAS</Link>
        </nav>

        <aside>
          {/* <Notifications /> */}
          <Profile>
            <div>
              <strong>{userName}</strong>
              <button type="button" onClick={handleSignOut}>
                sair do sistema
              </button>
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
