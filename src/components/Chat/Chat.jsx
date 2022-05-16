import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { Container, ChatCard, H3, HR, FormControl, DarkButton, TextInput, ChatHeader, ChatBody, ChatMessage } from './styles';

const Chat = ({
    socketServer,
    userName,
    roomName
}) => {
    const [chatMessages, setChatMessages] = useState([]);
    const [currentMessage, setCurrentMessage] = useState('');

    const sendMessage = async () => {
        if (!currentMessage) {
            toast.error('Não é possível enviar uma mensagem vazia.', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

            return;
        }

        const messageData = {
            room: roomName,
            author: userName,
            text: currentMessage,
            time: new Date(Date.now()).getHours() +
                ':' +
                new Date(Date.now()).getMinutes()
        };

        await socketServer.emit('messages:send', messageData);

        setCurrentMessage('');
    };

    useEffect(() => {
        socketServer.on('messages:sent', data => {
            setChatMessages(list => [...list, data]);
        });
    }, [socketServer]);

    return (
        <Container>
            <ChatCard>
                <ChatHeader>
                    <H3>Chat</H3>
                    <HR/>
                </ChatHeader>
                <ChatBody>
                    {chatMessages.map(message => {
                        <h1>{message}</h1>
                    })}
                </ChatBody>
                <FormControl>
                    <TextInput placeholder='Digite sua mensagem' onChange={event => setCurrentMessage(event.target.value)}/>
                    <DarkButton onClick={sendMessage}>
                        Enviar
                    </DarkButton>
                </FormControl>
            </ChatCard>
        </Container>
    );
}

export default Chat;