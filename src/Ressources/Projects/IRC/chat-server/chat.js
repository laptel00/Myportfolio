const uuidv4 = require('uuid').v4;
const messages = new Set();
const users = new Map();
const defaultUser = {
    id: 'anon',
    name: 'Anonymous',
};
const chanList = [["Général"]];
const loginList = ["loginFirst", "loginFirstTwo"]
const messageExpirationTimeMS = 5 * 60 * 1000;
const autoDeleteChannelIntervalMS = 5 * 60 * 1000;
const channelExpirationTimeMS = 5 * 60 * 1000;


class Connection {
    constructor(io, socket) {
        this.socket = socket;
        this.io = io;
        this.channels = chanList;

        socket.on('getMessages', (channel) => this.getMessages(channel));
        socket.on('message', (value, channel) => this.handleMessage(value, channel));
        socket.on('disconnect', () => this.disconnect());
        socket.on('privateMessage', (data) => this.privateMessage(data))
        socket.on('connect_error', (err) => {
            console.log(`connect_error due to ${err.message}`);
        });
        console.log("hyhouyhoiuh")
        socket.on('newChannel', (name) => {
            var failed = 1;
            chanList.forEach((chanListChild, index) => {
                if (name == chanListChild[0]) {
                    failed = 0
                }
            })
            if (failed == 0) {
                const message = {
                    id: uuidv4(),
                    user: "@BOTADMIN",
                    value: { text: users.get(this.socket) + " just joined the channel, say hello !", channel: name },
                    time: Date.now(),
                    channel: name
                };
                this.socket.emit('setChannel', name)
                messages.add(message);
                this.sendMessage(message);
            } else if (name == null) {
                this.socket.emit('setChannel', name)
            } else {

                this.socket.emit('error', { error: 'join', data: name })
            }

        });
        socket.on('getChannels', () => this.sendChannels());
        socket.on('addChannel', (chan) => this.addChannel(chan))
        socket.on('delChannel', (data) => this.delChannel(data))
        socket.on('delete login', (login) => this.deleteLogin(login))
        socket.on('create login', (login) => this.createLogin(login))
        socket.on('change login', (newLogin) => {
            console.log(newLogin);
            console.log(users.get(this.socket));
            var value = { text: users.get(this.socket) + " is rename as " + newLogin, channel: 'GENERAL' }
            console.log(value);
            this.handleMessage(value, '@BOTADMIN')
            this.changeLogin(newLogin)
        })
        socket.on('listUser', (name) => {
            var userList = ""
            users.forEach(user => {
                console.log('user here')
                console.log(users.value)
                userList += user + "<br>";
            })
            const message = {
                id: uuidv4(),
                user: "@BOTADMIN",
                value: { text: userList, channel: name },
                time: Date.now(),
                channel: name
            };
            messages.add(message);
            this.sendMessage(message)
        })
    }

    privateMessage(data) {
        console.log(users)
        console.log(loginList)
        var value = { text: "<strong>" + data.sender + " : </strong>" + data.text, channel: data.target + '@' }
        this.handleMessage(value)
        value = { text: data.text, channel: data.sender + '@' }
        this.handleMessage(value)
    }

    deleteLogin(login) {
        loginList.forEach((log, index) => {
            if (log == login) {
                loginList.splice(index, 1);
            }
        })
    }

    createLogin(logins) {
        var login = logins.new;
        var old = logins.old;
        let failed = 0
        loginList.forEach(log => {
            if (log == login) {
                failed = 1
            }
        })
        if (failed == 1) {
            this.socket.emit('error', { error: 'login', data: login })
        } else {
            this.socket.emit('set login', login)
            loginList.push(login)
            if (old) {
                const message = {
                    id: uuidv4(),
                    user: "@BOTADMIN",
                    value: { text: "User '"+old+"' has been renamed '"+login+"'.", channel: "@GLOBAL" },
                    time: Date.now(),
                    channel: "@GLOBAL"
                };
                messages.add(message);
                this.sendMessage(message);

            }
            users.set(this.socket, login)
            console.log('login is registred');
        }
    }

    changeLogin(newLogin) {
        this.createLogin(newLogin)
    }

    delChannel(data) {
        console.log('delete chan')
        console.log(data)
        var destroyed = false
        chanList.forEach((chan, index) => {
            console.log('trying to destroy ' + data.room)
            if (data.socket == chan[2] && data.room == chan[0]) {
                chanList.splice(index, 1);
                destroyed = true;
                console.log('destroyed ' + data.room)

            }
        });
        if (destroyed == false) {

            this.socket.emit('error', { error: "delete", data: "" })
        }
        this.sendChannels();
    }

    addChannel(chan) {

        var failed = 0;
        chanList.forEach((chanListChild, index) => {
            if (chan[0] == chanListChild[0]) {
                failed = 1
            }
        })

        if (failed == 0) {
            chan.push(Date.now())
            this.channels.push(chan)
        } else {
            this.socket.emit('error', { error: "addChan", data: chan[0] })
        }

        console.log(this.channels)
        this.sendChannels();
        setInterval(
            () => {
                chanList.forEach(chan => {
                    if (Date.now() > chan[3] + channelExpirationTimeMS) {
                        console.log('this is delpart')
                        console.log(chan)
                        this.delChannel({ room: chan[0], socket: chan[2] })
                    }
                })
            },
            autoDeleteChannelIntervalMS,
        );
    }

    sendChannels() {
        console.log('sending channels')
        this.io.sockets.emit('channels', this.channels)
    }

    sendMessage(message) {
        this.io.sockets.emit('message', message);
    }

    getMessages(channel) {
        messages.forEach((message) => {
            if (message.channel == channel) {
                this.sendMessage(message);
            }
        })
    }

    handleMessage(value, admin = "NO") {
        const message = {
            id: uuidv4(),
            user: users.get(this.socket) || defaultUser,
            value,
            time: Date.now(),
        };
        if (admin != "NO") {
            message.user = admin
        }
        console.log(message)
        messages.add(message);
        this.sendMessage(message);
        console.log('next should be chan name')
        console.log(value.channel);
        chanList.forEach(chan => {
            if (value.channel == chan[0]) {
                console.log('Refreshing time of ' + chan[0])
                console.log(chan)
                chan[3] = Date.now()
                console.log(chan)

            }
        })
        setTimeout(
            () => {
                messages.delete(message);
                this.io.sockets.emit('deleteMessage', message.id);
            },
            messageExpirationTimeMS,
        );
    }

    disconnect() {
        this.deleteLogin(users.get(this.socket))
        users.delete(this.socket);
    }
}

function chat(io) {
    io.on('connection', (socket) => {
        new Connection(io, socket);
    });
};

module.exports = chat;
