import React from 'react';

const Thankyou = ({info,
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
  email
 }) => {
    return (
             <>
             {console.log(start)}
               <img className="happy-girl-finale" src="https://github.com/JanetGM/rimac-challenge/blob/janetdev/src/img/happyGirl.png?raw=true" alt=""/>    
               <div className="sidebar-thank-you">
                 <div className="title-page-thank-you">  
                    <strong>¡Felicidades!</strong>
                    <label>Tus seres queridos ahora se encuentran protegidos</label>
                    <p>Descarga tu póliza llegará que en un máximo de 24 horas al correo <strong>{email}</strong></p>
                    <p>Conoce más sobre tu seguro</p>              
                 </div>
               <div className="rectangle-rimac-app">
                  <div>
                    <p>Usa nuestra <strong>RIMAC APP</strong></p>
                    <p>Descarga nuestra APP, crea tu usuario y cuenta con todas las coberturas.</p>
                  </div>
                    <img src="https://github.com/JanetGM/rimac-challenge/blob/janetdev/src/img/boyRimac.png?raw=true" alt=""/>
                  </div >
               <button className="pay" onClick={()=>window.location.reload()}>IR AL HOME > </button>
               </div>
  
             </>

           )

}
export default Thankyou;