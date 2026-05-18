import styled, { css } from 'styled-components';

export const Box = styled.div`
display: grid;
grid-template-columns: 50% 50%;
justify-content: space-around;
gap: 20px;

img {
    max-width: 100%;
    max-height: 400px;
    border-radius: 15px;
}

video {
    max-width: 100%;
    max-height: 400px;
    border-radius: 15px;
}

    h2 {
    font-size: 34px;
    margin-bottom: 20px;
    }
`;

export const Panel = styled.div`
    background-color: #c4fff9 ;
    padding: 20px;
    max-width: 100%;
    width: 100%;

    justify-content: start;
    align-items: start;
    gap: 20px;
    margin-bottom: 10px;
    border-radius: 5px;
    
    h2 {
        width: 100%;
        text-align: center;
    }

    

    div {
        color: #080101;
        padding: 10px;
        border-radius: 5px;
        display: flex;
        font-size: 22px;
        justify-content: start;
        align-items: center;
        gap: 10px;
        text-align: left;
        margin: 10px;

        button {
            background-color: #080101;
            color: #fff;
            border: none;
            border-radius: 5px;
            width: 50px;
            height: 50px;
            font-size: 18px;
            cursor: pointer;}
    }
`;