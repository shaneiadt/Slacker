import { collection, getFirestore } from 'firebase/firestore';
import React from 'react'
import { useCollection } from 'react-firebase-hooks/firestore';
import { app } from '../../firebase';

const Messages: React.FC<{ roomId: string }> = ({ roomId }) => {
    const [messages] = useCollection(collection(getFirestore(app), 'rooms', roomId, 'messages'));

    console.log({ messages })

    return (
        <div>
            {messages?.docs.map(message => (
                <>
                    <p>{message.id}</p>
                    <p>{JSON.stringify(message.data())}</p>
                </>
            ))}
        </div> 
    )
}

export default Messages