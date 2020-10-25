import React, { useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";


const QuoteApp = ()=>{
  
  let [data,setData] = useState([])

  const getData = ()=>{
    axios.get('https://type.fit/api/quotes')
    .then((response)=>{
      const rand = Math.floor(Math.random()*response.data.length)
      setData(response.data[rand])
    })
    .catch((error)=>console.log(error))
  }

  useEffect(()=>{
    getData();
    handleChangeColor();
  },[]);

  const handleChangeColor =()=>{
    const red = Math.floor(Math.random()*255);
    const green = Math.floor(Math.random()*255);
    const blue = Math.floor(Math.random()*255);

  document.querySelector('body').style.backgroundColor=`rgb(${red},${green},${blue})`;
  document.querySelector('body').style.transition=`background-color 2s`;
  document.querySelector('body').style.color=`rgb(${red},${green},${blue})`;
  
  document.querySelector('#quote').style.color=`rgb(${red},${green},${blue})`;
  document.querySelector('#quote').style.transition=`color 2s`;

  document.querySelector('#author').style.color=`rgb(${red},${green},${blue})`;
  document.querySelector('#author').style.transition=`color 2s`;
 
  document.querySelector('.button').style.backgroundColor=`rgb(${red},${green},${blue})`;
  document.querySelector('.button').style.transition=`background-color 2s`;
  
  }

const buttonHandler =()=> {
  getData();
  handleChangeColor()
}

  return(
    <div>
      <Display data={data} handler={buttonHandler} />
      </div>
  )
}

const Display = (props)=>{
  const {text,author} = props.data;

  return(
    <div className="card">
      <h1 id="quote"><i className="fa fa-quote-left quote-icon"></i> {text}</h1>
      <h3 id="author">- {author?author:'Anonymous'}</h3>
      <button onClick={props.handler}  className="button">Get New Quote</button>
      </div>
  )
}


export default function App() {
  return (
    <div className="App">
     <QuoteApp />
    </div>
  );
}
