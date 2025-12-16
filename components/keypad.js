import React from "react";
import './calc.css';
import Calculator from "./calculator";
function Keypad({handleClick,handleClear,calculation}){
    return(
        <div className="keypad">
            <div className="row">
                <button className="operator" onClick={
                    ()=>{
                        handleClear()
                    }}>AC</button>
                <button className="operator"
                onClick={()=>{handleClick("%")}}>%</button>
                <button className="operator"
                onClick={()=>{handleClick("**")}} >^</button>
                <button className="operator"
                 onClick={()=>{
                    handleClick("/")}}
                >/</button>
            </div>
            <div className="row">
                 <button className="box"
                  onClick={()=>{handleClick("7")}}>7</button>
                  <button className="box"
                   onClick={()=>{handleClick("8")}}>8</button>
                   <button className="box"
                    onClick={()=>{handleClick("9")}}>9</button>
                    <button className="operator"
                     onClick={()=>{handleClick("*")}}>x</button>
            </div>
            <div className="row">
                 <button className="box"
                  onClick={()=>{handleClick("4")}}>4</button>
                  <button className="box"
                   onClick={()=>{handleClick("5")}}>5</button>
                   <button className="box"
                    onClick={()=>{handleClick("6")}}>6</button>
                    <button className="operator"
                     onClick={()=>{handleClick("-")}}>-</button>
            </div>
            <div className="row">
                 <button className="box"
                  onClick={()=>{handleClick("1")}}>1</button>
                  <button className="box"
                   onClick={()=>{handleClick("2")}}>2</button>
                   <button className="box"
                    onClick={()=>{handleClick("3")}}>3</button>
                    <button className="operator"
                     onClick={()=>{handleClick("+")}}>+</button>

            </div>
            <div>
                 <button className="box"
                  onClick={()=>{handleClick("00")}}>00</button>
                  <button className="box"
                   onClick={()=>{handleClick("0")}}>0</button>
                   <button className="box"
                    onClick={()=>{handleClick(".")}}>.</button>
                    <button className="operator"
                     onClick={()=>{calculation()}}>=</button>
            </div>
        </div>
    )
}
export default Keypad