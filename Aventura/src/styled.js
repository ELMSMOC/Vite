import styled, { css } from 'styled-components';

export const Escena= styled.div`
  height: 100vh;
  width: 100vw;
  background-color: black;
  background-image: url(${props => props.fondo});
  background-size: cover;
  background-position: center;
`