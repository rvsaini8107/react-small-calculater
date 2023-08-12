import React, { useState } from "react";

const App = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  function handleInputChange(inputValue, setInputFunc) {
    if (/^[0-9]*$/.test(inputValue)) {
      setInputFunc(inputValue);
    }
  }
 
  function add() {
    
    if (num1 == "") {
      setError("Num1 Cannot Be Empty");
      setSuccess("");
    } else if (num2 == "") {
     
      setError("Num2 Cannot Be Empty");
      setSuccess("");
    }else{
      setError("");
      setSuccess("Success");
      setResult(Number(num1) + Number(num2));
    }
    
    console.log("sum", Number(num1) + Number(num2));
  }
  function sub() {
    if (num1 === "") {
      setError("Num1 Cannot Be Empty");
      setSuccess("");
    } else if (num2 === "") {
      setError("Num2 Cannot Be Empty");
      setSuccess("");
    }else{
      setError("");
      setSuccess("Success");
      setResult(Number(num1) - Number(num2));
    }
    
    console.log("sub", num1, num2);
  }
  function mul() {
    
    if (num1 == "") {
      setError("Num1 Cannot Be Empty");
      setSuccess("");
    } else if (num2 == "") {
      setError("Num2 Cannot Be Empty");
      setSuccess("");
    }else{
      setError("");
      setSuccess("Success");
       if(num2 == 0){
        setResult(Number(num1))
       }else if(num1 == 0){
        setResult(Number(num1))
       }
       else{
        console.log(Number(num1) * Number(num2))
        setResult(Number(num1) * Number(num2));
      }
      
    }
    
    
    console.log("mul", num1, num2);
  }
  function div() {
    if (num2 == 0) {
      setError("Num2 Cannot Be Zero");
      setSuccess("");
      setResult("");
      return;
    }
    if (num1 == "") {
      setError("Num1 Cannot Be Empty");
      setSuccess("");
    } else if (num2 == "") {
      setError("Num2 Cannot Be Empty");
      setSuccess("");
    }else{
      setError("");
      setSuccess("Success");
      setResult(Number(num1) / Number(num2));
      console.log("div", num1, num2);
    }
   
  }
  return (
    <div className="container">
      <h2>React Calculator</h2>
      <div className="card">
      <div className="box-input">
        <div className="input input-1">
          <input
            type="text"
            name=""
            id="num-1"
            placeholder="Num 1"
            onChange={(e) => handleInputChange(e.target.value, setNum1)}
            value={num1}
          />
        </div>
        <div className="input input-2">
          <input
            type="text"
            name=""
            id="num-1"
            placeholder="Num 2"
            onChange={(e) => handleInputChange(e.target.value, setNum2)}
            value={num2}
          />
        </div>
      </div>
        
        <div className="btn-div ">
          <button className="btn btn-1" onClick={() => add()}>
            +
          </button>
          <button className="btn btn-2" onClick={() => sub()}>
            -
          </button>
          <button className="btn btn-3" onClick={() => mul()}>
            *
          </button>
          <button className="btn btn-4" onClick={() => div()}>
            /
          </button>
        </div>
       

        <div className="message">
          <p className="error-text">{error&& "Error !"}</p>
          {error&&error}
          <p className="success-text">{success&& "Success !"}</p>
          
        </div>
        <div className="result">{result !== "" && "Result :"} {result && result}</div>
      </div>
    </div>
  );
};

export default App;
