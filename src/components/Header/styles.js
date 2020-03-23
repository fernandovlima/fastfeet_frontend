import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 64px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #eee;
      align-self: flex-start;
      height: 32px;
      width: 190px;
    }
    a {
      font-weight: bold;
      color: #aaa;
      margin-right: 32px;

      :hover,
      :focus {
        color: ${darken(0.4, '#aaa')};
      }
    }
  }
  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #eee;
  div {
    text-align: right;
    margin-right: 10px;
    strong {
      display: block;
      color: #333;
    }
    button {
      display: block;
      margin-top: 4px;
      font-size: 12px;
      color: red;
      border: none;
    }
  }
`;
