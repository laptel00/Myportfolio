import React, { useEffect, useState } from 'react';
import '../style/Channels.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Button } from 'react-bootstrap'

function Channels({ socket, channel }) {

    const [channels, setChannels] = useState(["chan 1", "chan 2", "chan 3"]);

    useEffect(() => {
        socket.emit('getChannels');
        socket.on('channels', (e) => {
            setChannels(e)
        })
    }, [socket]);

    function selectChannel(e) {
        console.log('emmiting ' + e.target.innerText)
        socket.emit('newChannel', e.target.innerText)
    }

    function deleteChannel(e) {
        socket.emit('delChannel', { room: e.target.value, socket: socket.id })
    }

    return (
        <Container style={{
            boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
            padding: '20px',
            borderRadius: '10px'
        }}>
            <div>
                <div id='channelList'>
                    <ul>
                        {channels.map(chan => {
                            console.log(channel)
                            console.log(chan[0])
                            if (channel != chan[0]) {
                                if (chan[2] == socket.id) {
                                    return (
                                        <div>
                                            <Button id="buttonChan"
                                                style={{ backgroundColor: chan[1] }}
                                                onClick={selectChannel}>{chan[0]}
                                            </Button>
                                            <button
                                                style={{
                                                    backgroundColor: 'red',
                                                    borderRadius: '5px',
                                                    border: 'none',
                                                    color: '#FFF',
                                                    marginLeft: '5px',
                                                    position: 'relative',
                                                    bottom: '4px'
                                                }}
                                                value={chan[0]}
                                                onClick={deleteChannel}>x
                                            </button>
                                        </div>
                                    );

                                } else {
                                    return (
                                        <div>
                                            <Button id="buttonChan"
                                                style={{ backgroundColor: chan[1] }}
                                                onClick={selectChannel}>{chan[0]}
                                            </Button>
                                        </div>

                                    )
                                }
                            }
                        })}
                    </ul>
                </div>
                <div>
                    <p>Create a channel ?</p>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        console.log(e.currentTarget[0].value)
                        socket.emit('addChannel', [e.currentTarget[0].value, e.currentTarget[1].value, e.currentTarget[2].value])
                    }}>
                        <input
                            type='text'
                            placeholder='Nom du channel'
                            style={{
                                border: 'none',
                                borderRadius: '10px',
                                boxShadow: 'rgba(0, 0, 0, 0.3) 0px 4px 12px',
                                marginBottom: '10px'
                            }}></input>
                        <input
                            type='text'
                            placeholder='Couleur du channel'
                            style={{
                                border: 'none',
                                borderRadius: '10px',
                                boxShadow: 'rgba(0, 0, 0, 0.3) 0px 4px 12px'
                            }}></input>
                        <input type='hidden' value={socket.id}></input>
                        <Button type="submit" variant="primary" className="mt-3">Envoyer</Button>
                    </form>
                </div>
            </div>
        </Container>
    );
}

export default Channels;
