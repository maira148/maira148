import React  ,{useState}from 'react'


const Cal = () => {

  const[cal ,setcal] = useState('')
  const[res ,setres] = useState('')
  const ops = ['/', '+ ' ,'-' ,'.' ,'*']
  const updatecal = value =>{
    if(
      ops.includes(value) &&cal === '' 
      
      )
      {
        return
      }
setcal(cal + value)
if(!ops.includes(value)){
  setres(eval(cal+value))
}

  }

  const d =() => {
    if(cal==''){
      return;
    }
  }
  const limi =() =>{
const digits = []
      for(let i=0;i<10;i++){
        digits.push(
          <button  key={i}  onClick={() =>updatecal(i)}>{i}</button>

        )
      }
      return digits

  }
  const calculate = () => {
    setcal(eval(cal))
  }
  return (
   
    <>
    <div className='bod'>
        <div className='halfbody'>
            <div className='span'>
           {res ?  <span>{res}</span>:''}
           &nbsp;
           {cal || '0'}
            </div>
            <div className='operators'>
                <button onClick={() =>updatecal('+')}>+</button>
                <button onClick={() =>updatecal('-')}>-</button>
            <button onClick={() =>updatecal('*')}>*</button>
            <button onClick={() =>updatecal('/')}>/</button>
            <button onClick={d}>DEL</button>
            </div>
            <div className='digits'>
              {limi()}
<button onClick={() =>updatecal('0')}>0</button>
<button onClick={() =>updatecal('.')}>.</button>
<button onClick={calculate}>=</button>

            </div>
        </div>
    </div>
      
    </>
  )
}

export default Cal
