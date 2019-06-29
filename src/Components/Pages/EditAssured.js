import React,{useState} from 'react';
const EditAssured = (optAdd,listAssured,editDni,setListAssured,setOptAdd) => {
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
 
    const resultEdit = listAssured.filter(e=>e.data.tercero.numDocumento===editDni);
    return(
        <>

        {
           
           resultEdit.map(e=>
                          (
                           
                           <form>
                           <div>
                            <select>
                                <option>estoy editando</option>
                            </select>
                            <input type="number" required value ={e.data.tercero.numDocumento} onChange={e=>setDni(e.target.value)} />
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
                            <button type="submit" ><label>Cancelar</label></button><button type="submit">
                                <label onClick={
                                    ()=>{
                                        saveAssured()
                                        setOptAdd('no')
                                    }
                                    
                                    }>Guardar
                                </label></button>
                            </div>
                        </form>
       
       
                           )
                          )
                  

        }
        </>
    )

   }

export default EditAssured;