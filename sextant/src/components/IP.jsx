import React, { useState, useEffect } from "react";
import Card from "./Card";
function IP(props) { 
  const [data, setData] = useState([]);

    var url;
    
    if(props.IP==="ipv4"){
        url="https://api.ipify.org?format=json"
    };
      if (props.IP==="ipv6") {
         url="https://api64.ipify.org?format=json"
      };
      const apiGet = () => {
        fetch(url)
      .then((response) => response.json())
      .then((json) =>{console.log(json);
        setData(json)});
      };
        apiGet();
    return (
             <span> <Card name={props.IP} value={JSON.stringify(data.ip)} ></Card></span>
); }

    export default IP

