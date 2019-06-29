import React from 'react';

const FillDataAssured = ({dni,nameClient,setStartPage2}) => {
    return (
        <>
            <p>Hola <strong>{nameClient}</strong></p>
            <form>
                <div>
                    <select disabled>
                        <option >DNI</option>
                    </select>
                    <input type="number"  value={dni} required disabled id="dni"/>
                </div>
                <div>
                    <input type="email" required placeholder="Correo" />
                </div>
                <div>
                    <p><input type="radio"  placeholder="nombre" required />Sí</p>
                    <p><input type="radio"  placeholder="nombre"  required/>No</p>
                </div>
                <div>
                    <button type="submit" >MODIFICAR DNI</button>
                    <button  ><label onClick={()=>setStartPage2("si")}>CONTINUAR ></label></button>
                </div>
            </form>
        </>
    )

}
export default FillDataAssured;