import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'

const Login = ({ socket, login }) => {

    function handleSubmit(event) {
        event.preventDefault();
        console.log(event.target[0].value)
        socket.emit('create login', {new : event.target[0].value})
    }

    if (!login) {
        return (
            <Container style={{ boxShadow: '1px 2px 9px #000', padding: '20px', borderRadius: '10px' }}>
                <div className="Login">
                    <Form onSubmit={handleSubmit}>
                        <input class="input_log" type="text" placeholder='ex: baguettson' style={{ borderRadius: '10px' }} />
                        <Button type="submit" variant="primary" className="mt-3">Envoyer</Button>
                    </Form>
                </div >
            </Container >
        );
    } else {
        return (
            <p>Bonjour {login} !</p>
        )
    }
}

export default Login
