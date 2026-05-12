import styled, {css} from 'styled-components';

export const commonStyles = css`
    background-color: #c2ffb7;
    border: 1px solid #515750;
    border-radius: 5px;
    width: 120px;
    height: 50px;
    display: block;
    padding: 10px;
`;

export const Boton = styled.button`
        ${commonStyles}
        font-size: 16px;
        cursor: pointer;
        transition: background-color 0.3s ease;
        

`;