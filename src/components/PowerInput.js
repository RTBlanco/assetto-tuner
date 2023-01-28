import '../style/PowerInput.css'


function PowerInput({handleChange, handleClick, powerText}) {

  return(
    <div className='power-inputs'>
      <form id='power-lut'>
        <label>Power.lut</label>
        <textarea onChange={handleChange} value={powerText}></textarea>
      </form>
    </div>
  )
}

export default PowerInput;