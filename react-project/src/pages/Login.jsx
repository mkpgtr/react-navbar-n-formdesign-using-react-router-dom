import React from 'react'
import './css/styles.css'
import { useState } from 'react'
import Register from './Register';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const navigate = useNavigate()

  return (
    <>
   <div className='content-container'>
   <h2 className='
   text-center'>Login Form</h2>
<div class="mb-3">
<label for="exampleFormControlInput1" class="form-label">Email address</label>
<input type="email" required class="form-control" id="exampleFormControlInput1" />
</div>
<div class="mb-3">
<label for="exampleFormControlTextarea1" class="form-label">Password</label>
<input class="form-control" required id="exampleFormControlTextarea1" type="password"></input>
</div>
<div class="mb-3">
<button type='submit' class="form-control btn btn-primary"  id="submitBtn" rows="3">Submit</button>
<button type='button' class="form-control btn mt-3" onClick={()=>navigate('/register')} rows="3">Don't Have An Account? Register Here</button>
</div>

</div>

   
    
</>
  )
}

export default Login