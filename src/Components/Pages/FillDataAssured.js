import React from 'react';

const FillDataAssured = ({dni,nameClient,setStartPage2}) => {
    return (
        <>
            <p></p>
            <p></p>
            <form className="sidebar">
            <p>Hola <strong>{nameClient}</strong></p>
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
                    <button  ><span onClick={()=>setStartPage2("si")}>CONTINUAR ></span></button>
                </div>
            </form>
        </>
    )

}
export default FillDataAssured;