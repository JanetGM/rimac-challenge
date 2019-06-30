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
                  <div className="main"> 
                        <img className="logo-rimac" src="https://github.com/JanetGM/rimac-challenge/blob/janetdev/src/img/rimac.png?raw=true" alt=""/>
                        <hr/>
                        <div className="text-resume-assured">
                        <p>Seguro de accidentes para Niños y Jóvenes</p>
                        <div className="subtitle">
                            <label>En accidentes <strong>los cubrimos al 100%</strong> para </label>
                            <label>que se recuperen por completo</label>
                            <p> <img src="https://github.com/JanetGM/hacking-challenge-rs/blob/master/seguro-accidentes-nj/img/ic_medicine.png?raw=true" className="icon-medicine"/> Atención médica y medicinas</p>
                            <p> <img src="https://github.com/JanetGM/hacking-challenge-rs/blob/master/seguro-accidentes-nj/img/ic_medicine.png?raw=true" className="icon-medicine"/> Exámenes de laboratorio</p>
                            <p> <img src="https://github.com/JanetGM/hacking-challenge-rs/blob/master/seguro-accidentes-nj/img/ic_medicine.png?raw=true" className="icon-medicine"/> Hospitalización y rehabilitación</p>
                            <p> <img src="https://github.com/JanetGM/hacking-challenge-rs/blob/master/seguro-accidentes-nj/img/ic_medicine.png?raw=true" className="icon-medicine"/> Cirujías y operaciones</p>           
                        </div>
                      </div> 
                  </div>
             
                  <div className="figure">
                    <img className="happy-girl" src="https://github.com/JanetGM/rimac-challenge/blob/janetdev/src/img/happyGirl.png?raw=true" alt=""/>
                    <img className ="tarifa" src="https://github.com/JanetGM/rimac-challenge/blob/janetdev/src/img/tarifa.png?raw=true" alt=""/>
                  </div>

                  <form className="sidebar"> 
                    <div>
                        <p><label>Protégelos <strong> ahora </strong></label></p>
                        <p>Ingresa los datos del titular.</p>
                        <select>
                            <option>DNI</option>
                        </select>
                        <input type="number" required onChange={e=>setDni(e.target.value)} placeholder="Nro. Documento"/>
                    </div>
                    <div>
                        <input 
                            type="text" 
                            required 
                            placeholder="Nombre" 
                            onClick={(e)=> { changeValueTextName(e,dni)
                                              setNameClient(e.target.value)
                                            }}
                        />
                    </div>
                    <div>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                            <label className="custom-control-label" htmlFor="customCheck1">Acepto la Política de Protección de Datos Personales y los Términos y Condiciones. </label>
                        </div>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck2"/>
                            <label className="custom-control-label" htmlFor="customCheck2">Acepto la Política de Envío de Comunicaciones Comerciales.</label>
                        </div>            
                    </div>
                    <div>
                        <button type="submit" ><label className="text-button" onClick={()=>setStart('si')}>COMENCEMOS</label></button>
                    </div>
                 </form>
            </>
    )

}
export default Page1;