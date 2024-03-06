import React from "react";
import axios from "axios";
import { useState } from "react";

const App=()=>{ 
  const getDataFromBackend=async() =>{
   const response= await axios.get("http://localhost:8080/call");
   console.log(response.data);
   document.getElementById("para").innerHTML=response.data;
  }
  const data="hello";
  const postDataFromBackend=async() =>{
    const response= await axios.post("http://localhost:8080/testpost",{data
  });
    console.log(response.data);
    document.getElementById("para").innerHTML=response.data;
   }
//post request form
const [formData,setformData]=useState("");
   const postFormFromFrontend=async()=>{
    const response=await axios.post("http://localhost:8080/postform",{formData,
  });
    
    console.log(response.data);
    document.getElementById("para").innerHTML=response.data;

  };
  return (
      <div className="App">
      <button onClick={getDataFromBackend}>Getdata</button>
      <p id="para"></p>

      <button onClick={postDataFromBackend}>POSTData</button>
      <p id="para"></p>
      <br></br>
      <form onSubmit={postFormFromFrontend}>
        <input type ="text" 
        name="formData" 
        value={formData} onChange={(e)=>setformData(e.target.value)}></input>
        {/* button generaete event, target is text field */}
        <input type="submit" value="postform"></input>
        </form>
      </div>
      );
}

export default App;
