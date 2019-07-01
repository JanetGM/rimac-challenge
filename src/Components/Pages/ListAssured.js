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
                                    <div className="title-assured">
                                      <p>Tus <strong>asegurados</strong></p>
                                    </div>
                                    <div className="subtitle-assured">
                                    <p>Preséntanos a quién vamos a proteger</p>
                                    </div>
                                   <div>
                                
                                {
                                    (optAdd==="no")
                                    ?( <>
                                        {
                                            listAssured.map((e,i)=>(
                                                <> 
                            
                                                  <div key={e.data.tercero.numDocumento} className="item-assured">
                                                    <label><strong> {e.data.tercero.nombres}</strong> </label>                                     
                                                      <button onClick={()=>deleteAssured(e.data.tercero.numDocumento)}>ELIMINAR</button>
                                                      <button onClick={()=>{setDni(e.data.tercero.numDocumento); return setOptAdd("editar"); }}>
                                                        EDITAR
                                                        </button>
                                                        
                                                        <p>DNI {e.data.tercero.numDocumento} - FN {e.data.tercero.fecNacimiento}</p> 
                                                        </div> 
                                                    <br/>
                                                </>
                                            ))
                                        }
                                       <p><button className="more" onClick={()=>setOptAdd("si")}>+</button><label className="label">Quiero asegurar a alguién más</label></p>
                                       <button onClick={()=> setStartPage2("pago")} className="continue">CONTINUAR ></button>
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
                                 </div>
                                </div>
                                </>
                        )

}
export default ListAssured;
