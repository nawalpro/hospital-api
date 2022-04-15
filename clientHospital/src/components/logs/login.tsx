import React, { useState } from 'react';
import { CredentialsType } from '../../types';
import setCredentials from '../../actions/setCredentials';
interface Props {
    setIsAuth: (isAuth: boolean) => void;
}

const login:React.FC<Props> = () => {
    const [registerCredentials, setCredentials] = useState<CredentialsType>({
        password: '',
        email: '',
        firstname: '',
    });
  
    return (
        <div>
            <h1>Fomulaire</h1>
            <form setCredentials={setCredentials} credentials={registerCredentials} >
                <label htmlFor='email'>Email</label>
                <input placeholder='Email' />
            </form>
        </div>
    )
}
export default login
