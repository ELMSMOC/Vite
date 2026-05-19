import styled, { css } from 'styled-components';

const cssComun = css`
    position: absolute;
    top: (${props => props.y}px);
    left: (${props => props.x}px);
    width: (${props => props.width}px);
    height: (${props => props.height}px);
    background-color: rgba(195, 69, 69, 0.5);
    display: block;
    cursor: pointer;
    &:hover {
        background-color: rgba(255, 255, 255, 0.8);
    }
`

export const Escena= styled.div`
  height: 100vh;
  margin: 0;
  padding: 0;
  width: 100vw ;
  max-width: 100% !important;
  background-color: black;
  background-image: url(${props => props.fondo});
  background-size: cover;
  background-position: center;
`

export const ZonaPlaya = styled.div`
    ${cssComun}
`;

export const ZonaMontana = styled.div`
    ${cssComun}
`;