import React, { useState } from 'react';

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
 
export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);


  function handlePrevious() {
    if(step > 1) {
      setStep((s) => s - 1)
    }
  }

  function handleNext() {
    if(step < messages.length) {
      setStep((s) => s + 1)
    }
  }

  function renderValue() {
    // if (isOpen) {
    //   setIsOpen(false)
    // } else {
    //   setIsOpen(true)
    // }
    setIsOpen((is) => !is)
  }

  return (
    <>
      <button className='close' onClick={renderValue}>&times;</button>
    { isOpen ? (
    <div className="steps">
      <div className="numbers">
        <div className={step >=1 ? "active" : ""}>1</div>
        <div className={step >=2 ? "active" : ""}>2</div>
        <div className={step >=3 ? "active" : ""}>3</div>
      </div>

      <p className="message"> Step {step}: {messages[step-1]}</p>

      <div className="buttons">
        <button style={{background: "#7950f2", color: "#fff"}} onClick={handlePrevious} >Previous</button>
        <button style={{background: "#7950f2", color: "#fff"}} onClick={handleNext} >Next</button>
      </div>
    </div> 
    ) : null
    }
    </>
  );
}


