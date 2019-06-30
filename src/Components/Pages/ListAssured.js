import React from 'react';
import FormNewAssured from './FormNewAssured';



const ListAssured = (
                       {info,
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


                        //functions
                        const deleteAssured = (dni) => {
                            const arrAssured = listAssured;
                            const filterdata = arrAssured.filter(e => e.data.tercero.numDocumento !== dni);
                            setListAssured([...filterdata]);
                          };

                        return(
                                <>
                                <div className="main-fi">
                                  <img className="logo-rimac" src="https://github.com/JanetGM/rimac-challenge/blob/janetdev/src/img/rimac.png?raw=true" alt=""/>
                                  <hr/>
                                </div>
                                <img className="sad-girl" src="https://github.com/JanetGM/rimac-challenge/blob/janetdev/src/img/sadGirl.png?raw=true"/>          
                                <div className="sidebar-assured">
                                    <div className="">
                                      <p>Tus Asegurados</p>
                                      <p>Preséntanos a quién vamos a proteger</p>
                                    </div>
                               
                               
                                
                                {
                                    (optAdd==="no")
                                    ?( <>
                                    {
                                         listAssured.map((e,i)=>(
                                            <> 
                                               <p>Datos de aegurado N°{i+1}</p>
                                               <div key={e.data.tercero.numDocumento}>
                                                <p>{e.data.tercero.nombres}</p>
                                                <p></p>
                                                <p>{e.data.tercero.numDocumento}</p>
                                                </div>                                             
                                                <button onClick={()=>deleteAssured(e.data.tercero.numDocumento)}>Eliminar</button><button onClick={()=>{
                                                   
                                                    setDni(e.data.tercero.numDocumento);
                                                    return setOptAdd("editar");
                                                    }}
                                                     >
                                                    Editar
                                                    </button>
                                                <br/>
                                            </>
                                         ))
                                    }
                
                                    </>
                                    )
                                    :(optAdd==="si")
                                    ?(
                                        <>
                                          <FormNewAssured 
                                              listAssured={listAssured}
                                              setListAssured={setListAssured}
                                              optAdd={optAdd}
                                              setOptAdd={setOptAdd}
                                          />

                                        </>
                                      )
                                    :(optAdd==="editar")
                                    ?
                                    <>
                                    {console.log(optAdd)}
                                       <FormNewAssured 
                                              listAssured={listAssured}
                                              setListAssured={setListAssured}
                                              optAdd={optAdd}
                                              setOptAdd={setOptAdd}
                                              editDni={dni}
                                          />
                                    </>
                                    
                                    :null
                                }
                                   
                                   

                                        )
                                        )
                                    
                                         <button onClick={()=> setStartPage2("pago")}>CONTINUAR ></button>
                                         <button onClick={()=>setOptAdd("si")}>+</button><label>Quiero asegurar a alguién más</label>


                                         </div>
                                </>
                        )

}
export default ListAssured;
