import React from 'react';

const FillDataAssured = ({dni,nameClient,setStartPage2}) => {
    return (
        <>
            <div className="main-fi">
            <img className="logo-rimac" src="https://github.com/JanetGM/rimac-challenge/blob/janetdev/src/img/rimac.png?raw=true" alt=""/>
             <hr/>
            </div>
            <img className="sad-girl" src="https://github.com/JanetGM/rimac-challenge/blob/janetdev/src/img/sadGirl.png?raw=true"/>
            <form className="sidebar-fill-data">
                <div className="title">
                      <p>Hola <strong>{nameClient},</strong>
                      <p> cuéntanos sobre ti</p> 
                      </p>
                </div>  
            
                <div className ="subtitle">
                    <p>Podrás protegerlos<strong> por solo S/20 al mes</strong> por asegurado</p>
                    <p>Datos del titular</p>
                    <select disabled>
                        <option >DNI</option>
                    </select>
                    <input type="number"  value={dni} required disabled id="dni"/>
                </div>
                <div>
                    <input type="email" required placeholder="Correo" />
                </div>
                    <p><strong>¿ESTE SEGURO ES PARA TI?</strong></p>
                    <input type="radio" name="gender" value="si"/> Sí<br/>
                    <input type="radio" name="gender" value="no"/> No<br/>

                <div>
                    <label >Modificar DNI</label>
                    <span onClick={()=>setStartPage2("si")}> CONTINUAR ></span>
                </div>
            </form>
        </>
    )

}
export default FillDataAssured;