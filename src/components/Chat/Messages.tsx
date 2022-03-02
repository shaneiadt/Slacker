import { collection, getFirestore, orderBy, query } from 'firebase/firestore';
import React, { useEffect } from 'react'
import { useCollection } from 'react-firebase-hooks/firestore';
import styled from 'styled-components';
import { app } from '../../firebase';

const Messages: React.FC<{ roomId: string, chatBottomRef: React.RefObject<HTMLDivElement>; }> = ({ roomId, chatBottomRef }) => {
    const [messages] = useCollection(query(collection(getFirestore(app), 'rooms', roomId, 'messages'), orderBy('timestamp', 'asc')));

    useEffect(() => chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' }));

    const formatDate = (timestamp: { toDate: () => Date }) => {
        if (!timestamp) return '';

        return new Date(timestamp.toDate()).toUTCString();
    }

    return (
        <MessagesContainer>
            {messages?.docs.map(message => (
                <MessageContainer key={message.id}>
                    <img src={message.data().avatar} alt={message.data().user} />
                    <MessageInfo>
                        <h4>
                            {message.data().user}{' '}
                            <span>{formatDate(message.data().timestamp)}</span>
                        </h4>
                        <p>{message.data().message}</p>
                    </MessageInfo>
                </MessageContainer>
            ))}
        </MessagesContainer>
    )
}

export default Messages;

const MessagesContainer = styled.div``;

const MessageContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;

    > img {
        height: 50px;
        border-radius: 8px;
    }
`;

const MessageInfo = styled.div`
    padding-left: 10px;

    > h4 > span {
        color: gray;
        font-weight: 300;
        margin-left: 4px;
        font-size: 10px;
    }
`;