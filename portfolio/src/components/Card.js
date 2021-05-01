import { React, useState } from 'react';
import CardInfo from '../components/CardInfo'
import { Modal } from 'react-bootstrap'

function Card(props) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
return (
    <div className='col-sm-3 d-inline-block t-card' id="projects">
    {/* onMouseEnter={(e)=>props.click(props.item)} */}

  <a href={props.item.link} target="_blank" rel="noopener noreferrer"> <img className="t-card-image" src={props.item.imgSrc} alt={props.item.imgSrc} /></a> 

    <button className="my-3" className="btn btn-dark" onClick={handleShow}>{props.item.title}</button>
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
            {/* <Button variant="dark" onClick={handleClose}>
                Close
            </Button> */}
            <p>Made with 🖤 by TP</p>
        </Modal.Footer>
    </Modal>
    {/* { props.item.selected && <ProjCardInfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link} github={props.item.github} />} */}

</div>
)
    // return (
    //     // on mouseOver, will need onMouseOut
    //         <div className='col-sm-3 d-inline-block t-card' id="projects">
    //             {/* onMouseEnter={(e)=>props.click(props.item)} */}
               
    //             <img className="t-card-image" src={props.item.imgSrc} alt={props.item.imgSrc} onMouseEnter={(e)=>props.click(props.item)} />
    //             { props.item.selected && <CardInfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link} github={props.item.github}/>}
    
    //         </div>
    // );
}

export default Card; 

