import React, { useState, useEffect} from 'react';
import { MDBContainer, MDBRow } from "mdbreact";
import './App.css';
import axios from "axios";
function App() {

const [colorCode, setColorCode] = useState([]);
const [total, setTotal] = useState(1000);
const [limit, setLimit] = useState(1000);
const [dataloading, setDataloading] = useState(false);
  
useEffect(()=>{
    if((total+1000) >= limit){
      callingAPI();
    }
  },[limit, total])

const callingAPI = async (totalData) => {
  setDataloading(true);
  await axios
  .get(
    `http://localhost:8000/api/rgb-color?limit=${totalData || limit}`,
    {
      headers: {
        Authorization: "&*^&^&%$fdffgfgeEEEWE#@",
      },
    }
  )
  .then((res) => {
    setLimit(limit+1000);
    setColorCode(res.data.data);
    setTotal(res.data.total);
    setDataloading(false);
  })
  .catch((error) => {
    console.log(error);
    setDataloading(false);
  });
}
  const ColorDiv = () => {
    return colorCode
    .map((data, index) => {
       return (  
         <div classname="customColumn" key={index} style={{ background: `${data}`, width:'1px', height:'1px' }} ></div>
        );
 });
  }

  return (
    <MDBContainer className="text-center"> 
        <MDBRow>
          {ColorDiv()}
          {dataloading ? 'Loading....' : null}
      </MDBRow>
      </MDBContainer>
  
  );
}

export default App;