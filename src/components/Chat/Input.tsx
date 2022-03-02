import { Button } from '@material-ui/core';
import { addDoc, collection, doc, serverTimestamp } from 'firebase/firestore';
import React, { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import styled from 'styled-components';

import { auth, db } from '../../firebase';

interface IInputProps {
    room: {
        roomId: string | null;
        roomName: string | null;
    };
}

export const Input: React.FC<IInputProps> = ({ room: { roomId, roomName } }) => {
    const [input, setInput] = useState('');
    const [user] = useAuthState(auth);

    const sendMessage = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!roomId || !roomName) return;

        const docref = doc(db, 'rooms', roomId);
        const colref = collection(docref, 'messages');
        await addDoc(colref, {
            message: input,
            timestamp: serverTimestamp(),
            user: user?.displayName,
            avatar: user?.photoURL
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