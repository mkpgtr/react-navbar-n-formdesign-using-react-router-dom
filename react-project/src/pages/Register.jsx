import React from 'react'
import './css/styles.css'
import { useNavigate } from 'react-router-dom'
const Register = () => {

  const navigate = useNavigate()
  return (
    <div className='content-container'>
    <h2 className='
    text-center'>Registration Form</h2>
    <div class="mb-3">
<label for="first-name" class="form-label">First Name</label>
<input type="text" class="form-control" id="first-name" />
</div>
<div class="mb-3">
<label for="last-name" class="form-label">Last Name</label>
<input type="text" class="form-control" id="last-name" />
</div>
<div class="mb-3">
<label for="email" class="form-label">Email address</label>
<input type="email" class="form-control" id="email" />
</div>
<div class="mb-3">
<label for="password" class="form-label">Password</label>
<input class="form-control" type='password' id="password"></input>
</div>
<div class="mb-3">
<button type='submit' class="form-control btn btn-primary"  id="submitBtn" rows="3">Submit</button>
<button type='button' class="form-control btn mt-3" onClick={()=>navigate('/login')} rows="3">Already Have An Account? Login Here</button>
</div>
</div>
  )
}

export default Register