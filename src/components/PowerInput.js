import './App.css';
import { useState, useRef } from 'react';

function PowerInput() {



  return(
    <>
      <textarea onChange={handleChange} value={powerText}></textarea>
      <button onClick={handleClick}>Enter</button>
    </>
  )
}

export default PowerInput;