import React from 'react'
import styled from 'styled-components'

export const Login = () => {
    return (
        <LoginContainer>
            <LoginInnerContainer>
                <img src='https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg' />
            </LoginInnerContainer>
        </LoginContainer>
    )
}

const LoginContainer = styled.div`
    display: grid;
    height: 100vh;
    background-color: #f8f8f8;
    place-items: center;
`;

const LoginInnerContainer = styled.div`
    padding: 100px;
    background-color: #fff;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);

    > img {
        object-fit: contain;
        height: 75px;
        margin-bottom: 40px;
    }
`;