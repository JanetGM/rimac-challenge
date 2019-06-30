import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Introduction from './Components/Pages/Introduction';
import './App.css';



function App() {

 //  create states
     const [info,setInfo] = useState([]);
     const [dni,setDni] = useState('');
     const [start,setStart]=useState('no')
     const [nameClient,setNameClient]=useState('');
     const [startPage2,setStartPage2]=useState('no');
     const [listAssured,setListAssured]=useState([]);
     const [optAdd,setOptAdd] = useState('no');

 // http request

   useEffect(() => {
      axios.post("https://freestyle.getsandbox.com/dummy/obtenerdatospersona")
      .then(res=>{
         const result = res.data;
         setInfo([result]);
      })
   },[])


  return (
    
    <div className="App">
      <Introduction
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
    </div>
  );
}

export default App;
