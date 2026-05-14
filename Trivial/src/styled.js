import styled, { css } from 'styled-components';

export const Box = styled.div`
display: grid;
grid-template-columns: 100% 50% 50%;
justify-content: space-around;
gap: 20px;
`;

export const Panel = styled.div`
    background-color: #6ddbd1;
    padding: 20px;
    max-width: 600px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: start;
    align-items: start;
    gap: 20px;
    margin-bottom: 10px;
    border-radius: 5px;
    

    div {
        background-color: #097d07;
        color: white;
        padding: 10px;
        border-radius: 5px;
        display: inline-flex;
        justify-content: start;
        gap: 10px;
        text-align: left;
    }
`;