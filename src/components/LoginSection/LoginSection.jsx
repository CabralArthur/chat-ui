import { useState } from 'react';
import { toast } from 'react-toastify';

import ChatIcon from '../../assets/svg/chat.svg';
import { Container, LoginCard, Icon, Title, FormControl, TextInput, DarkButton } from './styles';

const LoginSection = ({
    socketServer
}) => {
    const [ name, setName ] = useState('');
    const [ room, setRoom ] = useState('');

    const joinRoom = () => {
        if (!name || !room) {
            toast.error('É necessário inserir o nome e o nome do canal.', {
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

        socketServer.emit('channels:join', room);
    }

    return (
        <Container>
            <LoginCard>
                <Icon src={ChatIcon}/>
                <Title>
                    Bem vindo, cadastre-se no chat...
                </Title>
                <FormControl>
                    <TextInput placeholder='Insira seu nome de usuário...' onChange={event => setName(event.target.value)}/>
                    <TextInput placeholder='Insira o nome da sala que deseja entrar...' onChange={event => setRoom(event.target.value)}/>
                    <DarkButton onClick={joinRoom}>
                        Entrar
                    </DarkButton>
                </FormControl>
            </LoginCard>
        </Container>
    )
}

export default LoginSection;