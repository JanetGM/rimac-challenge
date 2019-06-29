import React from 'react';
import Thankyou from './Thankyou';

const Pay = ({info,
  dni,
  setDni,
  start,
  setStart,
  nameClient,
  setNameClient,
  setStartPage2,
  startPage2,
  listAssured,
  setListAssured,
  optAdd,
  setOptAdd
 }) => {
    return (
             <>
             
                {
                    (optAdd==="pagado")
                    ?(<Thankyou/>)
                    :(
                      <>
                      <p>Hola soy es pago</p>
                      <button onClick={()=> setOptAdd("pagado")}> Pagar</button>
                      </>
                    ) 

                }
             
               
             </>

           )

}
export default Pay;