import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  display: flex;
  height: 100%;
  background: #7159c1;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 360px;
  height: 400px;
  text-align: center;
  background: #fff;
  padding: 10px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;

  img {
    width: 70%;
    height: 44px;
  }
  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    width: 70%;

    p {
      font-weight: bold;
      /* margin-left: -156px; */
      align-self: flex-start;
    }
  }
  input {
    border: 1px solid #ccc;
    border-radius: 4px;
    height: 44px;
    padding: 0 15px;
    color: #000;
    margin: 0 0 10px;
    margin-top: 12px;

    &::placeholder {
      color: #aaa;
    }
  }
  span {
    color: #f16666;
    align-self: flex-start;
    font-weight: bold;
    margin-bottom: 10px;
    letter-spacing: 0.5px;
  }
  button {
    height: 44px;
    background: #7159c1;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;
    &:hover {
      background: ${darken(0.07, '#7159c1')};
    }
  }
  a {
    color: #fff;
    margin-top: 15px;
    font-size: 14px;
    opacity: 0.8;
    &:hover {
      opacity: 1;
    }
  }
`;
