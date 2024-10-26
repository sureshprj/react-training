import logo from "./logo.svg";
import "./App.css";
import React, {useState, useEffect} from 'react';
import { Button } from "./Button";


const toList = [
  {
    id: 1,
    text: "Todo 1"
  },
  {
    id: 2,
    text: "Todo 2"
  },
  {
    id: 3,
    text: "Todo 3"
  }
]


function App(props) {
  let myUserInput = "";

  return (
    <div >
       Child
       <br/> {props.text}
      <input type="text" onChange={e=>{
        console.log(e.target.value);
        myUserInput = e.target.value;
      }}/>
      <button onClick={()=>{
        alert(myUserInput);
      }}>Show me text</button>
    </div>
  );
}

function MainApp(){
 let parentText = "abc";
  return <div>
          Parent
          <input type="text" onChange={e=>{
            console.log(e.target.value);
            parentText = e.target.value;
         }}/>
     <App text={parentText}></App>
  </div>
}


function Counter(){
  const [counter, setCounter] = useState(1); //very frist 
  const [sCounter, setScounter] = useState(1);

  useEffect(()=>{
    //construtor
    console.log("Component render...")
    // Initall...
    return ()=>{
      //destroy phase
      console.log("before component destroy...")
    }
  },[]);

  useEffect(()=>{
    //Re-rending..
    console.log("Component re-rendering..")
  })


  

  return <>
    <button onClick={()=>{
      //counter++;
      setCounter(counter+1);
    }}>
      click me! {counter}
  </button>

  <button onClick={()=>{
      setScounter(sCounter+1);
    }}>
      click me! {sCounter}
  </button>
  
  </>

}

export default Counter;



//setCount,setCounter,setCounter

//
// setCounter(counter+1); Triggering
// rerending
// new dom = '<button>click me! 2</button>'
// shallow = '<button>click me! 1</button>'
// dom commit