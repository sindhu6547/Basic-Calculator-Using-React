import React,{useState} from "react";
import "./calc.css"
import Keypad from "./keypad";
function Calculator(){
    const[num,updatenum]=useState("")
    function handleclick(value){
        updatenum(num+value)
    }
    function handleclear(){
        updatenum("")
    }
    function calculate(value){
        let  output=eval(num)
        updatenum(output)
    }
    return (
        <div className="calculator">
            <h2>Calculator App using React</h2>
            <input type="text" value={num} className="input-box"></input>
            <Keypad handleClick={handleclick} handleClear={handleclear} calculation={calculate}></Keypad>
         </div>
    )
}
export default Calculator