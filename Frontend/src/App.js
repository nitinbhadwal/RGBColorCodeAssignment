import React, { useState, useEffect } from "react";
import { MDBContainer, MDBRow } from "mdbreact";
import "./App.css";
import axios from "axios";
function App() {

  const [colorCode, setColorCode] = useState([]);
  const [total, setTotal] = useState(8000);
  const [limit, setLimit] = useState(8000);
  const [dataloading, setDataloading] = useState(false);

  useEffect(() => {
    if (total + 8000 >= limit) {
      callingAPI();
    }
  }, [limit, total]);


// Calling the api for getting the rgb color combination
  const callingAPI = async (totalData) => {
    setDataloading(true);
    
    await axios
      .get(`http://3.87.165.124:88/api/rgb-color?limit=${totalData || limit}`, {
        headers: {
          Authorization: "&*^&^&%$fdffgfgeEEEWE#@",
        },
      })
      .then((res) => {
        setLimit(limit + 8000);
        setColorCode(res.data.data);
        setTotal(res.data.total);
        setDataloading(false);
      })
      .catch((error) => {
        console.log(error);
        setDataloading(false);
      });
  };

  const rgbDiv = () => {
    return colorCode.map((data, index) => {
      return (
        <div
          classname="customColumn"
          key={index}
          style={{ background: `${data}`, width: "1px", height: "1px" }}
        ></div>
      );
    });
  };

  return (
    <MDBContainer className="mt-5">
      <MDBRow className="customRow">
        {rgbDiv()}
        {dataloading ? (
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        ) : null}
      </MDBRow>
    </MDBContainer>
  );
}

export default App;
