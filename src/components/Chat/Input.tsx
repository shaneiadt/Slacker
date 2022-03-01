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


const InputContainer = styled.div``;