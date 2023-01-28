import { useState, useRef } from 'react';

function PowerInput({handleChange, handleClick, powerText}) {

  return(
    <div id='power-input'>
      <textarea onChange={handleChange} value={powerText}></textarea>
      <button onClick={handleClick}>Enter</button>
    </div>
  )
}

export default PowerInput;