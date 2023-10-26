import React, { useEffect, useState } from 'react'
import Axios from "axios";
import AuthBar from "./SingIn.jsx";
import SingUp from "./SingUp.jsx";
import "./App.css";

const App = () => {
  const [data, setData] = useState("");

  const getData = async()=>{
    const response = await Axios.get("http://localhost:8000/api");
    setData(response.data);
  }


  useEffect(()=>{
    getData()
  },[]);

  return (
    <div>
      {<AuthBar />}
    </div>
  )
}

export default App
