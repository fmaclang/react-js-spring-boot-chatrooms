import { React, } from 'react';
// import React, { Component } from 'react';
// import SockJsClient from 'react-stomp';
import './App.css';
// import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
import './css/MessageStyle.css';
// import NameComponent from "./components/NameComponent";
import MatchmakingComponent from './components/MatchmakingComponent';

// class App extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             messages: [],
//             typedMessage: "",
//             name: "",
//             room: "",
//             topics: []
//         }
//     }

//     componentDidMount = () => {
//         // this.state.topics.push("/topic/123")
//         console.log("component did mount displaying topic", this.state.topic)
//     }

//     setName = (name) => {
//         this.setState({ name: name });
//         console.log("set component display property", this.state.name);
//     };

//     setRoom = (room) => {
//         this.setState({ room: room });
//         console.log("set component display property", this.state.room);
//     }

//     setTopic = (topic) => {
//         this.state.topics.push(topic)
//         console.log("set component display property", this.state.topic);
//     }

//     sendMessage = () => {
//         console.log("send message displaying topic", this.state.topic)
//         this.clientRef.sendMessage(`/app/user-all/${this.state.room}`, JSON.stringify({
//             name: this.state.name,
//             message: this.state.typedMessage
//         }));
//     };

//     changeRoom = () => {
//         this.state.topics.pop()
//         this.state.topics.push("/topics/124")
//         console.log("change room displaying topic", this.state.topics);
//     };

//     displayMessages = () => {
//         return (
//             <div>
//                 {this.state.messages.map(msg => {
//                     return (
//                         <div>
//                             {this.state.name == msg.name ?
//                                 <div>
//                                     <p className="title1">{msg.name} : </p><br />
//                                     <p>{msg.message}</p>
//                                 </div> :
//                                 <div>
//                                     <p className="title2">{msg.name} : </p><br />
//                                     <p>{msg.message}</p>
//                                 </div>
//                             }
//                         </div>)
//                 })}
//             </div>
//         );
//     };

//     render() {
//         return (
//             <div>
//                 <MatchmakingComponent />
//                 <NameComponent setName={this.setName} setRoom={this.setRoom} setTopic={this.setTopic} topics={this.state.topics} />
//                 <div className="align-center">
//                     <h1>Welcome to Web Sockets</h1>
//                     <br /><br />
//                 </div>
//                 <div className="align-center">
//                     [User:  <p className="title1"> {this.state.name}</p>] [Room:  <p className="title2"> {this.state.room}</p>]
//                 </div>
//                 <div className="align-center">
//                     <br /><br />
//                     <table>
//                         <tr>
//                             <td>
//                                 <TextField id="outlined-basic" label="Enter Message to Send" variant="outlined"
//                                     onChange={(event) => {
//                                         this.setState({ typedMessage: event.target.value });
//                                     }} />
//                             </td>
//                             <td>
//                                 <Button variant="contained" color="primary"
//                                     onClick={this.sendMessage}>Send</Button>
//                             </td>
//                             <td>
//                                 <Button variant="contained" color="primary"
//                                     onClick={this.changeRoom}>Change Room</Button>
//                             </td>
//                         </tr>
//                     </table>
//                 </div>
//                 <br /><br />
//                 <div className="align-center">
//                     {this.displayMessages()}
//                 </div>
//                 <SockJsClient
//                     url='http://localhost:8088/websocket-chat/'
//                     topics={this.state.topics}
//                     onConnect={() => {
//                         console.log("connected");
//                     }}
//                     onDisconnect={() => {
//                         console.log("disconnected");
//                     }}
//                     onMessage={(msg) => {
//                         console.log(msg);
//                         var jobs = this.state.messages;
//                         jobs.push(msg);
//                         this.setState({ messages: jobs });
//                         console.log(this.state);
//                     }}
//                     ref={(client) => {
//                         this.clientRef = client
//                     }} />
//             </div>
//         )
//     }
// }

export default function App() {
    return (
        <div>
            <MatchmakingComponent />
        </div>
    )
}