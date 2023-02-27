import React,{useState} from "react";

const Tut1  = () =>{
    const ballStyle = {
    textAlign:'center',
    marginRight: '9em',
    marginTop: '1em',
    color:'grey',
    fontWeight: 'bold',
    fontSize: '1.5em'
  } 
  const [counter, setCounter] = useState(0);
    const add = ()=>{
        // counter = counter+1;
        // console.log(counter);
        setCounter(counter+1);
    };
    const subtract = ()=>{
        // counter = counter-1;
        // console.log(counter);
        setCounter(counter-1);
    }
    const state = useState(0);
    return(
        <div style={ballStyle}>
            <h1>Simple counter: {counter}</h1><br/>
            <button onClick={add}><h1>+</h1></button><br/><br/>
            <button onClick={subtract}><h1>-</h1></button>
        </div>
    )
}

export default Tut1;