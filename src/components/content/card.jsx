import React from 'react';
import {Link} from 'react-router-dom'
import "./Card.css"

const Card=(props)=>{
const {name}=props;
return(
  <div  className="term" >
  <Link to={`/Product/${name}`}>
  <dl  >

   <span>
   <img className="CardImg" src={props.ImgUrl}/>
   </span>
   <dd>{props.name}</dd>
   </dl>
   </Link>
    </div>

)
}

export default Card;
