import { useState } from 'react';

import io from "socket.io-client";
import Chat from "./components/Chat";
import LoginSection from "./components/LoginSection";

const socket = io.connect("http://localhost:3001");

const App = () => {
    const [roomInfo, setRoomInfo] = useState({
        room: '',
        username: '',
    });

    const [logged, setLogged] = useState(false);

    socket.on('channels:joined', info => {
        setRoomInfo({
            room: info.room,
            username: info.username,
        })

        setLogged(true);
    });

    return (
        logged ? (
            <Chat socketServer={socket} userName={roomInfo.username} roomName={roomInfo.room}/>
        ) : (
            <LoginSection socketServer={socket}/>
        )
    );
};

export default App;
