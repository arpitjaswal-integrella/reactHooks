import React,{useState} from "react";

const Placeholder = ()=>{
    const [output, setOutput] = useState("Okay");
    let onChange = (event)=>{
        const newValue = event.target.value;
        setOutput(newValue);
    }
    return(
        <div>
            <input placeholder="Enter some text..." onChange={onChange}/>
            <br/>
            {output}
        </div>
    );
}

export default Placeholder;