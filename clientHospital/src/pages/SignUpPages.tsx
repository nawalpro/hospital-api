import { Link } from "react-router-dom";
import React, { FC, useState } from "react";
import axios from 'axios';


interface usersignup {
	email?: string;
	password?: string;
	phone?: string;
	adress?: string;
	lastName?: string;
	firstName?: string;
    error?: string;
};



const SignUpPages: FC<usersignup> = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [adress, setAdress] = useState("");
	const [password, setPassword] = useState("");
    const [error, setError ] = useState("");
    
    // const [value, setValue] = useState({
	// 	firstName: '',
    //     lastName: '',
    //     email: '',
    //     phone: '',
    //     adress: '',
    //     password: '',
    //     error: '',
	// });


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
       
    
axios.post(
    firstName,
    lastName,
    // email,
    // phone,
    // adress,
    // password,
    // error,
)   
    };

    // const { email, password } = event.target as typeof event.target & {
    //     email: { value: string };
    //     password: { value: string };
    //   };


	return (
		<div>
			<h1>S'inscrire</h1>
			<section className=''>
				<form onSubmit={handleSubmit} >
					<div className='form-group'>
						<label htmlFor='first-name'>
							Prénom<span className='required'></span>
						</label>
						<input
							type='text'
							className='form-control'
							required
							onChange={(e) => setFirstName(e.target.value)}
						/>
					</div>
					<div className='form-group'>
						<label htmlFor='name'>
							Nom<span className='required'></span>
						</label>
						<input
							type='name'
							className='form-control'
							required
							onChange={(e) => setLastName(e.target.value)}
						/>
					</div>
					<div className='form-group'>
						<label htmlFor='adress'>
							Adresse<span className='required'></span>
						</label>
						<input
							type='text'
							className='form-control'
							required
							onChange={(e) => setAdress(e.target.value)}
						/>
					</div>
                    <div className='form-group'>
						<label htmlFor='phone'>
							Téléphone<span className='required'></span>
						</label>
						<input
							type='text'
							className='form-control'
							required
							onChange={(e) => setPhone(e.target.value)}
						/>
					</div>
					<div className='form-group'>
						<label htmlFor='email'>
							Email<span className='required'></span>
						</label>
						<input
							className='form-control'
							required
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div className='form-group'>
						<label htmlFor='password'>
							Mot de passe<span className='required'></span>
						</label>
						<input
							type='password'
							className='form-control'
							required
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>

					<div className='form-group'>
						<button type="submit" className='mainbutton'>Valider</button>
					</div>

					<div className='form-group'>
						<p>
							Vous avez déjà un compte ?<Link to='/'> Cliquez ici.</Link>
						</p>
						<p>
							Tous les champs indiqués par un "
							<span className='required'>*</span>" sont obligatoires. Merci de
							remplir le formulaire.
						</p>
					</div>

				</form>
			</section>
		</div>
	);
};

export default SignUpPages;
