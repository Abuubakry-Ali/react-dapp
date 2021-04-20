import React ,{useState,useEffect} from 'react';
import Card from './Pcard'
import Api from './file'

const Detail =({match})=>{

const [IApi,setIApi]=useState([])

useEffect(()=>{
  setIApi(Api.filter((i)=>
    i.Id == match.params.id
))
},[])

return(
  <div className='pagedetail'>

{IApi.map((t,i)=>
<Card
imgUrl={t.ImgUrl}
name={t.name}
price={t.Price}
/>
)}
<h1>New</h1>
</div>)
}
export default Detail;
