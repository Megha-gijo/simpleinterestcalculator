import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';


function App() {
 const [principle,setPrinciple] = useState("")
 const [rate,setRate] = useState("")
 const [year,setYear] = useState("")
 const [interest,setInterest] = useState("")

 const [isprinciple,setIsPrinciple] = useState(true)
 const [israte,setIsRate] = useState(true)
 const [isyear,setIsyear] = useState(true)
 
 


 

const validate = (e)=>{

  console.log(e.target.name);
  
  console.log(e.target.value);
  console.log(!!e.target.value.match('^[0-9]*$'));

  if(!!e.target.value.match('^[0-9]*$')){
    if(e.target.name=='principle'){
      setPrinciple(e.target.value)
      setIsPrinciple(true)

    }
    else if(e.target.name=='rate'){
      setRate(e.target.value)
      setIsRate(true)
    }
    else{
      setYear(e.target.value)
      setIsyear(true)
    }
  }
  else{
   
      if(e.target.name=='principle'){
        setPrinciple(e.target.value)
        setIsPrinciple(true)
      }
      
      else if(e.target.name=='rate'){
        setRate(e.target.value)
        setIsRate(true)
      }
      else{
        setYear(e.target.value)
        setIsyear(true)
      }
  }

}

const handleReset = ()=>{
  setPrinciple("")
  setRate("")
  setYear("")
  setIsPrinciple(true)
  setIsRate(true)
  setIsyear(true)
}
 const handleCalculate = ()=>{
  setInterest ((principle*rate*year)/100)
 }
  return (
    <>
      <div style={{height:'100vh'}} className='bg-dark w-100 d-flex justify-content-center align-items-center'>
        <div style={{width:'500px'}} className='p-5 bg-light rounded'>
        <h1>Simple Interest App</h1>
        <p>Calculate your simple Interest easily</p>

        <div style={{height:'150px'}} className='bg-secondary rounded d-flex justify-content-center align-items-center flex-column'>
          <h1>₹ {interest}</h1>
          <p>Total Simple Interest</p>

        </div>
        <div className='mb-3'>
        <TextField name='principle' id="outlined-basic" value={principle} label="₹ Principle Amount" variant="outlined" className='w-100 ' onChange={(e)=>validate(e)} />
         {!isprinciple && <span className='text-danger'>*Invalid Input</span>}
        </div>
        <div className='mb-3'>
        <TextField name='rate' id="outlined-basic" value={rate} label="Rate of interest (p.a%)" variant="outlined" className='w-100' onChange={(e)=>validate(e)} />
        {!israte && <span className='text-danger'>*Invalid Input</span>}
        </div>
        <div className='mb-3'>
        <TextField name='year' id="outlined-basic" value={year} label="Year (Yr)" variant="outlined" className='w-100' onChange={(e)=>validate(e)} />
       {!isyear && <span className='text-danger'>*Invalid Input</span>}
        </div>
        <div className='mb-3 d-flex justify-content-between'>
        <Button onClick={handleCalculate} style={{width:'190px', height:'60px'}} variant="contained" color='success'disabled={isprinciple && israte && isyear ? false:true}>Calculate</Button>
        <Button onClick={handleReset} style={{width:'190px', height:'60px'}} variant="outlined">Reset</Button>
          

        </div>    
        </div>
      </div>
    </>
  )
}

export default App




 
 