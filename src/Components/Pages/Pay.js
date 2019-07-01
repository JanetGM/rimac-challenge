import React,{useState} from 'react';
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
  setOptAdd,
  typePay,
  setType,
  desc,
  setDesc,
 }) => {

    const [codPromo,setCodPromo] = useState("");
    return (
             <>
                  <div className="main-fi">
                      <img className="logo-rimac" src="https://github.com/JanetGM/rimac-challenge/blob/janetdev/src/img/rimac.png?raw=true" alt=""/>
                      <hr/>
                   </div>
                    {
                    (optAdd==="pagado")
                    ?(
                       <>
                          <Thankyou 
                           dni={dni}
                           setDni={setDni}
                           start={start}
                           setStart={setStart}
                           nameClient={nameClient}
                           setNameClient={setNameClient}
                           startPage2={startPage2}
                           setStartPage2={setStartPage2}
                           listAssured={listAssured}
                           setListAssured={setListAssured}
                           optAdd={optAdd}
                           setOptAdd={setOptAdd}
                           typePay={typePay}
                           setType={setType}
                           desc={desc}
                           setDesc={setDesc}
                          />
                       </>
                       )
                    :(
                      <>
                      <img className="sad-girl" src="https://github.com/JanetGM/rimac-challenge/blob/janetdev/src/img/sadGirl.png?raw=true" alt=""/>          
                       <div className="sidebar-pay">
                        <div className="title-pay">
                          <p>Elije<strong> el pago ideal</strong></p>
                          <label>Decide entre 12 pagos mensuales o sólo una cuota al año. </label>
                            </div>
                           <div>
                            <div className="pay-tarifa" >
                              <p className="p1">PAGO MENSUAL</p>
                              <small>S/</small><label className="label2">40</label>
                              <p className="p3">por 12 meses</p>                         
                            </div>
                            <div className="pay-tarifa">
                            <p className="p1">PAGO ANUAL</p>
                              <small>S/</small><label className="label2">40</label>
                              <p className="p3">Ahorras S/ 80</p>                          
                            </div>
                          </div> 
                       <div>
                       <div className="resume-assured">
                         <p><strong>PAGO TOTAL</strong></p>
                         <label>Por 2 asegurados</label><strong> DETALLE</strong><label className="price">S/{desc}</label>
                       </div>
                       
                      
                     </div>
                     <div className="form-pago">
                       <input className="large-input-text" type="text" placeholder="Ingresar código de dscto." onChange={(e)=>setCodPromo(e.target.value)}></input>
                       <button className="desc" onClick={(e)=>
                         (codPromo==="20NAVIDAD")
                         ?(setDesc(32))
                         :null
                      }>APLICAR</button>
                        <p>Ahora ingresa los datos de tu tarjeta</p>
                        <input className="large-input-text" type="text" placeholder="Nombre del titular"></input>
                        <input className="large-input-text" type="text" placeholder="Número de tarjeta"></input>
                        <input type="date" placeholder="Fecha de vencimiento"/><input type="number" placeholder="CVV"/>
                        <input className="large-input-text" type="email" placeholder="Correo electrónico"></input>
                        <div>
                          <div className="custom-control custom-checkbox">
                              <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                              <label className="custom-control-label" htmlFor="customCheck1">Autorizo el cargo de mi cuota a la tarjeta registrada como cargo recurrente.</label>
                          </div>
                          <div className="custom-control custom-checkbox">
                              <input type="checkbox" className="custom-control-input" id="customCheck2"/>
                              <label className="custom-control-label" htmlFor="customCheck2">Acepto las políticas de envío de la póliza electrónica.</label>
                          </div>            
                        </div>
                        <label className="pay" onClick={()=> setOptAdd("pagado")}> Pagar S/{desc} </label>
                     </div>


                     </div>
                     </>
                    
                    ) 

                }
             
               
             </>

           )

}
export default Pay;