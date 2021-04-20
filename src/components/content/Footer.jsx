import React from 'react';


const Foot=()=>{
const Year= new Date().getFullYear()

return (
 <table className='foot'>
<tbody>
<tr>
  <td ><span className="terms">Terms and Conditions</span></td>
  <td>Privacy</td>
 <td ><span className="year"><i >©</i>{Year},ZANstore.com</span></td>
  </tr>
</tbody>
 </table>

)
}

export default Foot;
