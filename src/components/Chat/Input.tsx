import { Button } from '@material-ui/core';
import React from 'react'
import styled from 'styled-components';

export const Input: React.FC<{ channelId: string | null }> = () => {
    const sendMessage = (e: React.FormEvent) => {
        e.preventDefault();
    }

    return (
        <InputContainer>
            <form>
                <input placeholder={`Message #ROOM`} type="text" />
                <Button hidden type='submit' onClick={sendMessage}>
                    SEND
                </Button>
            </form>
        </InputContainer>
    )
}


const InputContainer = styled.div`
    border-radius: 20px;

    > form {
        position: relative;
        display: flex;
        justify-content: center;
    }

    > form > input {
        position: fixed;
        bottom: 30px;
        width: 60%;
        border: 1px solid gray;
        border-radius: 3px;
        padding: 20px;
        outline: none;
    }
`;