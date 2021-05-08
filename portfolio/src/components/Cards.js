import { React, useState } from 'react';
import { Modal, Card } from 'react-bootstrap'
import { useSpring, animated } from 'react-spring';
import { FaExternalLinkAlt } from 'react-icons/fa'

function Cards(props) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const style = useSpring({ opacity: 1, from: { opacity: 0 } });
    return (
        <Card className='col-sm-3 d-inline-block t-card' id="projects" style={style}>
            

            <a href={props.item.link} target="_blank" rel="noopener noreferrer"><Card.Img  className="py-3"src={props.item.imgSrc}></Card.Img></a>
            {/* // <a href={props.item.link} target="_blank" rel="noopener noreferrer"> 
            // <img className="t-card-image" src={props.item.imgSrc} alt={props.item.imgSrc} />
            // </a>
           */}
            
            <Card.Body>
            <button className="btn btn-dark mt-2" onClick={handleShow}>{props.item.title} <FaExternalLinkAlt size={14} /></button>
            </Card.Body>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.item.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <p>{props.item.subTitle}</p>
                    <a href={props.item.link} target="_blank" rel="noopener noreferrer">View The Deployed Application</a>
                    <br></br>
                    <a href={props.item.github} target="_blank" rel="noopener noreferrer">View Code</a>
                </Modal.Body>
                <Modal.Footer>
                    <p>Made with 🖤 by TP</p>
                </Modal.Footer>
            </Modal>
        

        </Card>

    )
}

export default Cards;

