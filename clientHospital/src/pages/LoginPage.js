import React, { useState } from 'react';
import axios from 'axios';

function LoginPage() {
  
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();


const handleChange = (e) => {
  e.preventDefault();
  axios({
    method: 'post',
    url: 'http://localhost:8000/patient/auth',
    withcredentials: true,
    data: {
        email,
        password,
    },
   
})
  
} 
    return (
        <div>
           <form>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <input type="submit" value='Valider' onChange={handleChange} />
            <button class="create-account">Create New Account</button>
          </form> 
        </div>
    )
}

export default LoginPage
