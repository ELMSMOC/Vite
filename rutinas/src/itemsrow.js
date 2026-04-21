import styled, { css } from 'styled-components';

export const ItemsRow = styled.div`
    ${({})=>css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    background-color: #63ca1f;
    width: auto;
    padding: 10px;
    border-radius: 5px;
    `}
`;

export const Item = styled.img`
    ${({})=>css`
    display: inline-block; 
    border: 1px solid #ccc;
    width: 600px;
    height: auto;
    padding: 3px;
    background-image: url(${props => props.img});
    background-size: cover;
    background-position: center;
    `}
`;