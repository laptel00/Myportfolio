import React, { useEffect, useState } from 'react';
import '../style/Messages.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'

function Messages({ socket, channel, login }) {
    console.log(channel)
    const [messages, setMessages] = useState({});


    useEffect(() => {
        const messageListener = (message) => {
            setMessages((prevMessages) => {
                const newMessages = { ...prevMessages };
                newMessages[message.id] = message;
                return newMessages;
            });
        };

        const deleteMessageListener = (messageID) => {
            setMessages((prevMessages) => {
                const newMessages = { ...prevMessages };
                delete newMessages[messageID];
                return newMessages;
            });
        };

        socket.on('message', messageListener);

        socket.on('deleteMessage', deleteMessageListener);
        socket.emit('getMessages');

        return () => {
            socket.off('message', messageListener);
            socket.off('deleteMessage', deleteMessageListener);
        };
    }, [socket]);

    return (
        <Container style={{
            overflowY: 'scroll',
            maxHeight: '400px',
            boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
            borderRadius: '10px',
            marginBottom: '20px'
        }}>
            {[...Object.values(messages)]
                .sort((a, b) => a.time - b.time)
                .map((message) => (
                    spawnMessage(message, channel, socket, login)
                ))
            }
        </Container>
    );
}

function spawnMessage(message, channel, socket, login) {
    if (message.value.channel == channel || message.value.channel == login + '@' || message.value.channel == "@GLOBAL") {
        if (message.user == "@BOTADMIN") {
            return (
                <Container style={{ color: '#00b4ec', opacity: '0.6' }}>
                    <div className='secondary-message-box'>
                        <div
                            key={message.id}
                            className="admin-message-container"
                            title={`Sent at ${new Date(message.time).toLocaleTimeString()}`}
                        >
                            <span className="user">bot :</span>
                            <span className="message"><td dangerouslySetInnerHTML={{ __html: message.value.text + " " }} /></span>
                            <span className="date">{new Date(message.time).toLocaleTimeString()}</span>
                        </div>
                    </div>
                </Container>
            )
        } else {
            return (
                <div className="message-list">
                    <div
                        key={message.id}
                        className="message-container"
                        title={`Sent at ${new Date(message.time).toLocaleTimeString()}`}
                    >
                        <span className="channel">{message.value.channel}:</span>
                        <span className="user">{message.user}:</span>
                        <span className="message"><td dangerouslySetInnerHTML={{ __html: message.value.text }} /></span>
                        <span className="date">{new Date(message.time).toLocaleTimeString()}</span>
                    </div>
                </div>

            )
        }
    }
}
export default Messages;