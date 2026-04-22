import styled, { css } from 'styled-components';

export const ItemsRow = styled.div`
    ${({})=>css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    gap: 20px;
    margin-bottom: 20px;
    max-width: 1000px;
    margin: 0 auto;
    padding: 10px;
    
    img{
        border: 2px solid #ccc;
        border-radius: 5px;
        width: 100%;
        max-width: 303px;
        max-height: 200px;
        transition: transform 0.3s ease; /* Agrega una transición suave para el efecto hover */
        cursor: pointer;
    }
    img:hover {
        transform: scale(0.97);
    }
    `}
`;



export const Item = styled.div`
    ${({})=>css`
    display: inline-block; 
    padding: 3px;
    margin: 10px;
    
    img {
        border: 2px solid #ccc;
        border-radius: 5px;
        max-width: 600px;
        max-height: 400px;
        height: 400px;
    }

    .info-titulo h3 {
        font-size: 16px;
        margin: 10px 0;
    }

    .info-reps p {
        font-size: 14px;   
        margin: 5px 0;
    }

    `}
`;