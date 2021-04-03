import { React, useState } from 'react';
import { Button, TextField, Grid, Typography } from '@material-ui/core'
import SockJsClient from 'react-stomp';

export default function BattleComponent(props) {

    const [name] = useState(props.name);
    const [room, setRoom] = useState(props.room);
    const [topics, setTopics] = useState([`/topic/${room}`]);
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const [clientRef, setClientRef] = useState();

    const sendMessage = () => {
        clientRef.sendMessage(`/app/sendMessage/${room}`, JSON.stringify({
            name: name,
            message: message,
            server: false
        }));
    };

    const changeRoom = () => {
        const tempTopics = [];
        tempTopics.push("/topic/" + room);
        setTopics(tempTopics);
        const tempMessages = [];
        setMessages(tempMessages);
        console.log(topics, messages, name, room);
        clientRef.connect('http://localhost:8088/websocket-chat/')
    }

    const leaveRoom = () => {
        const tempTopics = []
        setTopics(tempTopics)
        const tempMessages = []
        setMessages(tempMessages)
        clientRef.disconnect()
    }

    return (
        <div>
            <div>
                <Grid container direction="row" justify="center" alignItems="center">
                    <Grid item style={{ padding: '10px' }}>
                        <Typography>User: {name}, Room: {room}</Typography>
                    </Grid>
                    <Grid item style={{ padding: '10px' }}>
                        <Button variant="contained" color="primary" onClick={() => { leaveRoom() }}>LEAVE</Button>
                    </Grid>
                </Grid>
                <Grid container direction="row" justify="center" alignItems="center">
                    <Grid item style={{ padding: '10px' }}>
                        <TextField id="outlined-basic" label="Room" variant="outlined" onChange={(e) => { setRoom(e.target.value) }} />
                    </Grid>
                    <Grid item style={{ padding: '10px' }}>
                        <Button variant="contained" color="primary" onClick={() => { changeRoom() }}>SET</Button>
                    </Grid>
                </Grid>
                <Grid container direction="row" justify="center" alignItems="center">
                    <Grid item style={{ padding: '10px' }}>
                        <TextField id="outlined-basic" label="Message" variant="outlined" onChange={(e) => { setMessage(e.target.value) }} />
                    </Grid>
                    <Grid item style={{ padding: '10px' }}>
                        <Button variant="contained" color="primary" onClick={() => { sendMessage() }}>SET</Button>
                    </Grid>
                </Grid>
                <Grid container direction="column" justify="center" alignItems="center">
                    {messages.map((e, i) => {
                        return (
                            <div key={i}>
                                {e.server ?
                                    <Grid item style={{ padding: '10px', fontStyle: 'italic' }} key={i}>
                                        <Typography>{e.message}</Typography>
                                    </Grid>
                                    :
                                    <Grid item style={{ padding: '10px' }} key={i}>
                                        <Typography>{e.name}: {e.message}</Typography>
                                    </Grid>}
                            </div>
                        )
                    })}
                </Grid>
            </div>
            <SockJsClient
                url='http://localhost:8088/websocket-chat/'
                topics={topics}
                onConnect={() => {
                    console.log("connected");
                    clientRef.sendMessage(`/app/addUser/${room}`, JSON.stringify({
                        name: name,
                        message: name + " has connected!",
                        server: true
                    }));
                }}
                onDisconnect={() => {
                    console.log("disconnected");
                }}
                onMessage={(e) => {
                    console.log(e)
                    const temp = [...messages];
                    temp.push(e);
                    setMessages(temp);
                }}
                ref={(client) => { setClientRef(client) }} />

        </div>
    )

}