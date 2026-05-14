import styled, { css } from 'styled-components';

export const Button = styled.button`
    background-color: #164d18;
    border: 2px solid #4CAF50;
    border-radius: 5px;
    color: white;
    padding: 10px 20px;
    cursor: pointer;
    max-width: 100px;
    margin: 20px 5px;
    transition: background-color, color 0.3s ease;
    &:hover {
        background-color: #4CAF50;
        color: #181221;
    }

    &:disabled {
        background-color: #ccc;
        border-color: #999;
        color: #666;
        cursor: not-allowed;
    }
`;

export const ItemsRow = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    max-width: 1000px;
    margin: 20px auto;

        img{
            overflow: hidden;
            border: 2px solid #ccc;
            border-radius: 5px;
            width: 300px;
            height: 300px;
            
        }
    
`;

export const Itemactual = styled.div`
    border: 2px solid #943131;
    border-radius: 2px;
    margin: 20px auto;
    overflow: hidden;
    max-width: 500px;
    text-align: center;
    padding: 20px;
    
    img{
        max-width: 300px;
        padding: 10px 0;
        width: 100%;
        object-position: top;
    }
`;


