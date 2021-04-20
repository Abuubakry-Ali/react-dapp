import React  from "react";
import Items from "./Items"
import Card from "./card"
import Homebar from "./homefooter";





const Home =()=>{


  return(<div>
<dl  className="dictionary App">
 {Items.map((item)=>
   <Card
    key={item.Id}
    id={item.Id}
    name={item.name}
    ImgUrl={item.ImgUrl}

   />

    )}
    </dl>

<Homebar/>
</div>




  )}



export default Home;
