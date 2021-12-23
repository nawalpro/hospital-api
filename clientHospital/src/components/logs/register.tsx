import React, {useState} from 'react';
import { CredentialsType } from '../../types';


const register : React.FC = () => {
    // const [registerCredentials, setCredentials] = useState<CredentialsType>({
    //     password: '',
    //     email: '',
    //     firstname:'',
    // });
    // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const target = e.target as HTMLInputElement;
    //     const name = target.name;
    //     setCredentials({ ...registerCredentials, [name]: target.value })
    // }
    return (
        <div>

            {/* <form title="S'inscrire" credentials={registerCredentials} >
                <label htmlFor='email' >Email</label>
                <input name='email' onChange={handleChange} placeholder='Adresse mail' type='email'
                />
                <label htmlFor='firstname'>Prénom</label>
                <input name='firstname' onChange={handleChange} placeholder='Prénom' />
            </form> */}
        </div>
    )
}

export default register
