import React, {useState} from 'react';

function LoginPage() {
  const [registerCredentials, setCrendentials] = useState({
    password: '',
    email: '',
});
const handleChange = () => {
  const target = e.target ;
  const name = target.name;
  setCrendentials({ ...registerCredentials, [name]: target.value })
}

    return (
        <div>
           <form title="S'inscrire" setCredentials={setCrendentials} credentials={registerCredentials}>
            <input onChange={handleChange}  type="text" value='email'/>
            <input onChange={handleChange}  type="password" value='password'/>
            <input type="submit" value='Envoyer' />
            <button class="create-account">Create New Account</button>
          </form> 
        </div>
    )
}

export default LoginPage
