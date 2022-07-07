import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
function PHP() {
    const values = [true];
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);

    function handleShow(breakpoint) {
        setFullscreen(breakpoint);
        setShow(true);
    }

    function CLIsend(e) {
        e.preventDefault();
        var CLIscreen = document.getElementsByClassName('CLItext')[0]

        console.log(e.target[0].value);
        let ans = commands(e.target[0].value)
        CLIscreen.innerHTML += ans
        e.target[0].value = "";
    }

    function commands(text) {
        text = text.split(' ')
        var ans = "USER: "+text+"<br/>";
        const options = [{name: "help", action: helpFunc()}, {name: "clear", action: "clearFunc"}]
        console.log(text)
        options.forEach(element => {
            if (element.name == text[0]) {
                console.log('hiuahzodiua')
               ans = element.action
            }
        })
      
        return ans;
    }
    
    function helpFunc() {
        return "help :  Write a list of all available functions. <br/>"+
               "clear :  Clear the console";
    }

    return (
        <>
            {values.map((v, idx) => (
                <Button key={idx} className="me-2 mb-2" onClick={() => handleShow(v)}>
                    PHP (Algorythmes)
                    {typeof v === 'string' && `below ${v.split('-')[0]}`}
                </Button>
            ))}
            <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div style={{background: 'grey', padding: '2%', border: '1px solid black', width: "60%", height: "50%"}} class='CLIbox'>
                        <div style={{background: 'black', color: 'lightgreen', border: '1px solid black', width: "90%", height: "80%", margin: 'auto'}} class='CLIdisp'>
                            <p style={{width: '100%', height: '90%', overflow: 'scroll'}}class='CLItext'></p>

                                <form style={{maxWidth: '5000px', display: 'flex', width: '100%'}} onSubmit={CLIsend}>
                                    <input class='CLIentry' style={{width: '200%', background: 'black', color: 'greenyellow'}} type='text' ></input>
                                    <input type='submit' tyle={{width: '20%'}}></input>
                                </form>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}



export default PHP;