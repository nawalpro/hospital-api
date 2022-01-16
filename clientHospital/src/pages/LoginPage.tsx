import React, { FC, useState, FormEvent } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const sendForm = async (event: FormEvent<HTMLFormElement>) => {
	event.preventDefault();

	const { email, password } = event.target as typeof event.target & {
		email: { value: string };
		password: { value: string };
		error: { value: string};
	};

	console.log("email", email.value);
	console.log("password", password.value);
  
    const response = await axios.post("http://localhost:8000/patient/auth", {email, password});
	console.log("response", response)
   
	
	// await fetch ("http://localhost:8000/patient/auth", {
		
	// 	method: "POST",
	// 	body: JSON.stringify({
	// 		email:email.value,
	// 		password: password.value,
	// 	})

	// })

};

function LoginPage() {
	return (
		<form onSubmit={sendForm}>
			<fieldset>
				<label htmlFor='email'>Mail</label>
				<input type='text' id='email' />
			</fieldset>
			<fieldset>
				<label htmlFor='password'>Password</label>
				<input type='password' id='password' />
			</fieldset>
			<button type='submit'>Login</button>
		</form>
	);
}

export default LoginPage;

// interface userLogin {
// 	email?: string;
// 	password?: string;
//     error?: string;
// };

// const LoginPage: FC<userLogin> = () => {
//  const [email, setEmail] = useState('')
//  const [password, setPassword] = useState('')
//  const [error, setError] = useState('')

// 	return (
// 		<>

// 			<section className='login'>
// 				<h2>Se connecter</h2>
// 				{error && <p className='error'>{error}</p>}
// 				<form>
// 					<div className='form-group'>
// 						<label htmlFor='email'>
// 							Email<span className='required'></span>
// 						</label>
// 						<input
// 							type='email'
// 							className='form-control'
// 							required
// 							onChange={(e) => setEmail(e.target.value)}
// 						/>
// 					</div>
// 					<div className='form-group'>
// 						<label htmlFor='password'>
// 							Mot de passe<span className='required'></span>
// 						</label>
// 						<input
// 							type='password'
// 							className='form-control'
// 							required
// 							onChange={(e) => setPassword(e.target.value)}
// 						/>
// 					</div>

// 					<div className='form-group'>
// 						<button  className='mainbutton'>
// 							Valider
// 						</button>
// 					</div>

// 					<div className='form-group'>
// 						<p>
// 							Vous n’avez pas de compte ?<Link to='/signup'> Cliquez ici.</Link>
// 						</p>
// 						<p>
// 							Tous les champs indiqués par un "
// 							<span className='required'>*</span>" sont obligatoires. Merci de
// 							remplir le formulaire.
// 						</p>
// 					</div>
// 				</form>
// 			</section>
// 		</>
// 	);
// }

// export default LoginPage;
