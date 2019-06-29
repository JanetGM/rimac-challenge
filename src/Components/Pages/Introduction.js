import React from 'react';
import Page1 from './Page1';
import Page2 from './Page2';

const Introduction = ({
    info,
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
    setOptAdd}) => {


    return(
        <>
         {(start==="si")
         ?<Page2 
            info={info}
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
     
            
           />:
          <Page1
          info={info}
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
          />
        
        
        }
    
        </>
    )

}
export default Introduction;