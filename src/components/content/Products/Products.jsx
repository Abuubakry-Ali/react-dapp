import React ,{useState} from 'react';
import {Link} from 'react-router-dom'
import Api from './file'
import Pcard from './Pcard'
import './Product.css'




const Product=()=>{

const [usePrice,setPrice]=useState('');





  const onPrice=(e)=>{
    const {value}= e.target;
    setPrice(value)
    }





return(<div className='page'>
<ul className='sidebar'>

<button>Brands</button>

<button>Price</button><br/>
<label>${usePrice}</label>
<input type="range" min='10'max='1000' onChange={onPrice} />
<button>Status</button>
</ul>
<div className='side'>
<select className='opt'>
   <option >Best Match</option>
   <option >High - Low</option>
   <option >Low - High</option>
 </select>
  <h1 className='pname'>Phones</h1>
  <div className='product'>
{Api.map((item,i)=>
  <div key={i} >
  <Link to={`/Product/Detail/${item.Id}`}>
<Pcard

imgUrl={item.ImgUrl}
name={item.name}
price={item.Price}
/>
</Link>
</div>
) }

</div>
</div>
</div>
)

}
export default Product
