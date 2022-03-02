import { Button } from '@material-ui/core';
import React from 'react'
import styled from 'styled-components'

export const Login = () => {
    const signIn = (e: React.FormEvent) => {
        e.preventDefault();
    }

    return (
        <LoginContainer>
            <LoginInnerContainer>
                <img src='https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg' />
                <h1>Sign in to Slacker</h1>
                <Button type='submit' onClick={signIn}>
                    Sign in with Google
                </Button>
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

    > button {
        margin-top: 50px;
        padding: 10px !important;
        text-transform: inherit !important;
        background-color: #0a8d48 !important;
        color: #fff;

        &:hover {
            opacity: 0.8;
        }
    }
`;