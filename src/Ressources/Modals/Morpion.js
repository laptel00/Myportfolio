import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import MorpionComp from '../Projects/Morpion/MorpionComp.js';
function Morpion() {
    const values = [true];
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);

    function handleShow(breakpoint) {
        setFullscreen(breakpoint);
        setShow(true);
    }
    
    return (
        <>
            {values.map((v, idx) => (
                <Button key={idx} className="me-2 mb-2" onClick={() => handleShow(v)}>
                    Morpion (Javascript)
                    {typeof v === 'string' && `below ${v.split('-')[0]}`}
                </Button>
            ))}
            <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <MorpionComp></MorpionComp>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Morpion;