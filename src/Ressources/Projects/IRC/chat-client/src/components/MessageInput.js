import React, { useState } from 'react';
import '../style/MessageInput.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'


const commands = [
  ["/NOM_DE_COMMANDE", "MESSAGE_DE_COMMANDE", "PUBLIC/PRIVATE", "FONCTION", "CONNECTED Y/N"],
  ["/command", "Liste des commandes : ", "PUBLIC", "", false],
  ["/help", "", "PRIVATE", "help", false],
  ["/nick", "", "PRIVATE", "nick", false],
  // ["/list", "", "PRIVATE", "list", true],
  ["/create", "", "PRIVATE", "create", true],
  ["/delete", "", "PRIVATE", "delete", true],
  ["/join", "", "PRIVATE", "join", true],
  ["/leave", "", "PRIVATE", "leave", true],
  ["/users", "", "PRIVATE", "users", true],
  ["/msg", "", "PRIVATE", "msg", true],
]

function execute(command, params, allow, socket, channel, login) {
  console.log(params);
  if (!login && allow == false || login) {

    switch (command) {
      case "help":
        if (!login) {
          alert("Commands you can currently use: \n\n /nick *username* -- Login as *username*")
        } else {
          alert("Commands you can currently use: \n\n/nick *username* -- change your username to *username* \n\n/create *channel* *color* -- create a new channel named *channel* with the color *color* \n\n/delete *channel* -- Delete a channel that you own named *channel* \n\n/join *channel* -- join the channel named *channel* \n/leave *channel* -- leave the channel named *channel* \n\n/users -- list all connected users \n\n/msg *username* *message* -- send a private message to *username* containing *message*")

        }
        break;
      case "delete":
        socket.emit('delChannel', { room: params[1], socket: socket.id })
        break;
      case "nick":
        if (params[1]) {
          socket.emit('delete login', login)
          socket.emit('create login', { new : params[1], old : login})
        } else {
          socket.emit('privateMessage', { text: "You need to specify a new name", target: login, sender: "command bot" })
        }
        break;
      case "users":
        socket.emit('listUser', channel)
        break;
      case "create":
        if (!params[1].includes('@')) {

          socket.emit('addChannel', [params[1], params[2], socket.id])

        } else {

          alert("You can't use the character '@' inside of a channel name");

        }
        break;
      case "join":
        socket.emit('newChannel', params[1])
        break;
      case 'msg':
        var mess = "";
        console.log(params);
        params.forEach((elem, index) => {
          if (index == 1 || index == 0) {
          } else  {

            mess += elem + " ";
          }
        });
        socket.emit('privateMessage', { text: mess, target: params[1], sender: login })
        break;
      default:
        break;
    }
  } else {
    alert("Please login before attempting to use this command. \nTo see the list of available commands, please type : '/help'")
  }
}

function bbCode(val) {
  var texttotreat = val;
  texttotreat = texttotreat.replace('[B]', '<strong>')
  texttotreat = texttotreat.replace('[/B]', '</strong>')
  texttotreat = texttotreat.replace('[U]', '<u>')
  texttotreat = texttotreat.replace('[/U]', '</u>')
  texttotreat = texttotreat.replace('[S]', '<strike>')
  texttotreat = texttotreat.replace('[/S]', '</strike>')
  texttotreat = texttotreat.replace('[COLOR=<', '<p style="color:')
  texttotreat = texttotreat.replace('>]', '">')
  texttotreat = texttotreat.replace('[/COLOR]', '</p>')
  texttotreat = texttotreat.replace('[LINK=<', '<a href="')
  texttotreat = texttotreat.replace('>]', '">')
  texttotreat = texttotreat.replace('[/LINK]', '</a>')
  return texttotreat;
}

const NewMessage = ({ socket, channel, login }) => {
  console.log(channel)
  const [value, setValue] = useState('');

  const submitForm = (e) => {
    e.preventDefault();
    var isCommand = 0;
    commands.forEach(param => {
      if (value.split(' ')[0] == param[0]) {
        if (param[2] == "PUBLIC") {
          socket.emit('message', { text: param[1], channel: channel })
          execute(param[3], value.split(' '), param[4], socket, channel, login)
          isCommand = 1;
        } else if (param[2] == "PRIVATE") {
          execute(param[3], value.split(' '), param[4], socket, channel, login)
          isCommand = 1
        }
      }
    });
    if (isCommand == 0) {
      socket.emit('message', { text: bbCode(value), channel: channel });
    }

    setValue('');
  };

  return (
    <Container>
      <form onSubmit={submitForm}>
        <input
          autoFocus
          value={value}
          placeholder="Type your message"
          onChange={(e) => {
            setValue(e.currentTarget.value);
          }}
          style={{
            border: 'none',
            borderRadius: '10px',
            boxShadow: 'rgba(0, 0, 0, 0.3) 0px 4px 12px'
          }}
        />
        <p style={{ marginTop: '10px' }}>{channel}</p>
      </form>
    </Container>
  );
};

export default NewMessage;