import React,{useState} from 'react';
import EditAssured from './EditAssured';

const FormNewAssured = ({ listAssured,setListAssured,optAdd,setOptAdd,editDni}) => { 
   const [dni,setDni]=useState("");
   const [name,setName]=useState("");
   const [paterno,setPaterno]=useState("");
   const [materno,setMaterno]=useState("");
   const [bornDate,setBornDate]=useState("");
   const [gender,setGender]=useState("");

   
   const saveAssured = () => {
      setListAssured([...listAssured,{
          
       tipo: "succes",
       data:{
           tercero:{
               numDocumento:dni,
               sexo:gender,
               nombres:name,
               fecNacimiento:bornDate,
           }
          }
        }  
        ])
   }

   


  return(
        <>
        {
           (optAdd==="editar")
           ?(
               <>
               {console.log(listAssured)}
                 <EditAssured
                   listAssured={listAssured}
                   setListAssured={setListAssured}
                   optAdd={optAdd}
                   setOptAdd={setOptAdd}
                   editDni={dni}
                 />
               </>
           )
           
           :
        
            <form>
               <div>
                <select>
                    <option>DNI</option>
                </select>
                <input type="number" required onChange={e=>setDni(e.target.value)} />
                </div>
                <div>
                    <input type="text" required placeholder="nombre" onChange={e=>setName(e.target.value)}/>
                </div>
                <div>
                    <input type="text" required placeholder="Apellido Paterno" onChange={e=>setPaterno(e.target.value)}/>
                </div>
                <div>
                    <input type="text" required placeholder="Apellido Materno" onChange={e=>setMaterno(e.target.value)}/>
                </div>
                <div>
                    <input type="date" required placeholder="Fecha de nacimiento" onChange={e=>setBornDate(e.target.value)}/>
                </div>
                <div>
                    <p><input type="radio" required placeholder="nombre"  value="Femenino" onChange={e=>setGender(e.target.value)}/>Femenino</p>
                    <p><input type="radio" required placeholder="nombre"  value="Masculino"  onChange={e=>setGender(e.target.value)}/>Masculino</p>
                </div>
                <div>
                <button type="submit" >
                    <label onClick={
                        ()=>setOptAdd("no")
                    }>Cancelar</label>
                </button>
                <button type="submit">
                    <label onClick={
                        ()=>{
                            saveAssured()
                            setOptAdd('no')
                        }
                        
                        }>Guardar
                    </label></button>
                </div>
            </form>
            }
        </>
                    
  )
}
export default FormNewAssured;