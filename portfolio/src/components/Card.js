import React from 'react';
import CardInfo from '../components/CardInfo'
// import StretchNStrengthen from '../assets/images/StretchNStrengthen.png'


function Card(props) {
    return (
        // on mouseOver, will need onMouseOut
            <div className='col-sm-3 d-inline-block t-card' id="projects">
                {/* onClick={(e)=>props.click(props.item)} */}
               
                <img className="t-card-image" src={props.item.imgSrc} alt={props.item.imgSrc} onMouseEnter={(e)=>props.click(props.item)} />
                { props.item.selected && <CardInfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link} github={props.item.github}/>}
               

         
   
    
            </div>
    );
}

export default Card; 

