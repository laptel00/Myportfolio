import React, { useEffect, useState } from 'react';
import { Container } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'
import io from 'socket.io-client';
import Messages from './components/Messages'
import MessageInput from './components/MessageInput';
import Channels from './components/Channels';
import Login from './components/Login';
import './style/IRCComp.css';

function IRCComp() {
  const [socket, setSocket] = useState(null);
  const [channel, setChannel] = useState(null);
  const [status, setStatus] = useState(null);
  const [login, setLogin] = useState("")

  function handleChannelChange(newChan) {
    setChannel(newChan)
  }
  useEffect(() => {
    const newSocket = io(`http://${window.location.hostname}:3000`);
    setSocket(newSocket);

    newSocket.on('error', (datas) => {
      switch (datas.error) {
        case "login":
          alert('Login " ' + datas.data + ' " is taken !');
          break;
        case "channel":
          break;
        case "addChan":
          alert('A channel named " ' + datas.data + ' " already exist !');
          break;
        case "delete":
          alert("You can only delete a channel if you're the one who created it ! ")
          break;
        case "join":
          alert("There is no channel named " + datas.data)
          break;
        default:
          alert('There was an error. type : ' + datas.error)
          break;
      }
    })

    newSocket.on('setChannel', (name) => {
      console.log("New channel is : " + name)
      setChannel(name)
    })

    newSocket.on('set login', (login) => {
      setLogin(login)
    })

    return () => newSocket.close();

  }, [setSocket]);

  return (
    <div className="IRCComp">
      <header className="IRCComp-header">
        React Chat
      </header>
      <Container>
        {(() => {
          switch (status) {
            case 'NOCHANNEL':
              return <p>NO CHANNEL</p>
            default:
              return <p>{status}</p>;
          }
        })()}

        {socket ? (
          <div className="chat-container">
            {login ? (
              <div>
                {channel ? (
                  <div>
                    <Messages login={login} socket={socket} channel={channel} />
                    <MessageInput login={login} socket={socket} channel={channel} />
                    <Channels channel={channel} onClick={handleChannelChange} socket={socket} />

                  </div>
                ) : (
                  <div>
                    <MessageInput login={login} socket={socket} channel={channel} />
                    <Channels channel={channel} onClick={handleChannelChange} socket={socket} />
                  </div>
                )}
              </div>
            ) : (
              <div>
                <MessageInput login={login} socket={socket} channel={channel} />
                <hr />
                <Login login={login} socket={socket} />
              </div>
            )}
          </div>
        ) : (
          <div>Error 404 Server Not Found</div>
        )}
      </Container>
    </div>
  );
}

export default IRCComp;
