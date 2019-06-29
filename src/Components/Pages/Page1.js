import React from 'react';

const Page1 = ({info,dni,setDni,start,setStart,nameClient,setNameClient,setListAssured}) => {
      const changeValueTextName = (e,dni) => {
      e.preventDefault();
      const result = info.filter(e=>(e.data.tercero.numDocumento===dni));
      setListAssured(result);
      if(result){
         const name= result.map(e=>e.data.tercero.nombres)
         e.target.value=name
         
      }   
   }
return(
        <>
          <p>Soy la primera página men!</p>
            <form>
                <div>
                <select>
                    <option>DNI</option>
                </select>
                <input type="number" required onChange={e=>setDni(e.target.value)}/>
                </div>
                <div>
                    <input type="text" required placeholder="nombre" onClick={(e)=>
                        {
                            changeValueTextName(e,dni)
                            setNameClient(e.target.value)
                        }
                    }
                         />
                </div>
                <div>
                    <p><input type="checkbox" required placeholder="nombre"  />acepto remernosdasd</p>
                    <p><input type="checkbox" required placeholder="nombre"  />acepto remernosdasd</p>
                </div>
                <div>
                    <button type="submit" ><label onClick={()=>setStart('si')}>COMENCEMOS</label></button>
                </div>
            </form>
        </>
    )

}
export default Page1;