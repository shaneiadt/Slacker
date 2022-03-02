import { Button } from '@material-ui/core';
import { addDoc, collection, doc, serverTimestamp } from 'firebase/firestore';
import React, { useState } from 'react'
import styled from 'styled-components';
import { db } from '../../firebase';

export const Input: React.FC<{ room: { roomId: string | null; roomName: string | null } }> = ({ room: { roomId, roomName } }) => {
    const [input, setInput] = useState('');

    const sendMessage = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!roomId) return;

        const docref = doc(db, 'rooms', roomId);
        const colref = collection(docref, 'messages');
        await addDoc(colref, {
            message: input,
            timestamp: serverTimestamp(),
            user: 'ShaneO',
            avatar: 'https://pbs.twimg.com/profile_images/1051123635950379009/d6yiQUwf_400x400.jpg'
        });

        setInput('');
    }

    return (
        <InputContainer>
            <form>
                <input value={input} onChange={e => setInput(e.target.value)} placeholder={`Message #${roomName}`} type="text" />
                <Button hidden type='submit' onClick={sendMessage} />
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

    > form > button {
        display: none !important;
    }
`;