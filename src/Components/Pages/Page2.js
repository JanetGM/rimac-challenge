import React from 'react';
import FillDataAssured from './FillDataAssured';
import ListAssured from './ListAssured';
import Pay from './Pay';



const Page2 = (
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
     setOptAdd,
     typePay,
     setType,
     desc,
     setDesc,
    }) => {
return(
        <>
        {

            (startPage2==="pago")
            ?(<Pay
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
            
            />)
            :(startPage2==="si")
            ? <ListAssured
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
                typePay={typePay}
                setType={setType}
                desc={desc}
                setDesc={setDesc}
            
              />
            :
            (
            
                <FillDataAssured
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
                    typePay={typePay}
                    setType={setType}
                    desc={desc}
                    setDesc={setDesc}


                />
            
            )
        }

          
        </>
    )

}
export default Page2;