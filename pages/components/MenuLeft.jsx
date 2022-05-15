import { Button,Offcanvas } from 'react-bootstrap';
import React, { useEffect, useState } from "react";

function MenuLeft(){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <>
        <Button variant="primary" className="float-end" onClick={handleShow}>
        Lance
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
        <Button variant="primary" className="float-end" onClick={handleShow}>
        Lance
      </Button>
      </Offcanvas>
        </>
    )
}

export default MenuLeft;

//render(<Example />);