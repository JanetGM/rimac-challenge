import React from 'react';

const Thankyou = ({info,
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
               
               <p>Hola soy el fin xD de tus dias hsakdhsakhds</p>
               <button onClick={()=>setOptAdd("pagado")}></button>
               
             </>

           )

}
export default Thankyou;