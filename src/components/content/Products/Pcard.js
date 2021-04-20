import React from 'react';
import Rating from '@material-ui/lab/Rating';


const Pcard=(props)=>{


  return(
    <div className='pcard'>
     <dl >
<span>
<img className='p' alt='' src={props.imgUrl}/>
</span>
<dt>{props.name}</dt>
<dd>{props.price}</dd>
<span><Rating name="size-small" defaultValue={5} size="small" /> </span>

   </dl>
   </div>

 )
}
export default Pcard;
