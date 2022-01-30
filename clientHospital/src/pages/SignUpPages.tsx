import { Link } from "react-router-dom";
import React, { useState } from "react";
import axios from 'axios';
import {
	makeStyles,
	Container,
	Typography,
	TextField,
	Button,
} from "@material-ui/core";
import { error } from "console";

const useStyles = makeStyles((theme) => ({
	heading: {
		textAlign: "center",
		margin: theme.spacing(1, 0, 4),
	},
	submitButton: {
		marginTop: theme.spacing(4),
	},
}));

interface Usersignup {
	email?: string;
	password?: string;
	phone?: string;
	// adress?: string;
	lastname?: string;
	firstname?: string;
	// confirmPassword: string;
	// acceptTerms: boolean;
};

const SignUpPages: React.FC<Usersignup> = () => {
	const { heading, submitButton } = useStyles();



	const [value, setValue] = useState({
		firstname: '',
		lastname: '',
		email: '',
		phone: '',
		// adress: '',
		password: '',
	});


	const handleChange = (e: React.FormEvent<EventTarget>) => {
		let target = e.target as HTMLInputElement;
		setValue({ ...value, [target.name]: target.value });
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		//add
		try {
			console.log(value, "value");
			const { firstname, lastname, email, phone, password } = value;
			axios.post(
				`http://localhost:4001/patient/`,
				
				{firstname, lastname, email, phone, password}
				
			)
			
				.then(
					(res) => {
						console.log(res.data, "res.data");
						console.log(res.status, "res.status");
						console.log(res.statusText, "res.statusText");
						console.log(res.headers, "res.headers");
						console.log(res.config, "res.config");
					}
				)
		} catch (error) {
			console.log(error);

		}

	};

	return (
		<>
			<Typography className={heading} variant="h2">Bienvenue sur hospital </Typography>
			<Container maxWidth="xs">
				<Typography className={heading} variant="h3">S'inscrire</Typography>
				<section className=''>
					<form onSubmit={handleSubmit}>
						<TextField
							variant="outlined"
							label='Prenom'
							fullWidth
							name='firstname'
							required
							onChange={handleChange}
						/>
						<div className='form-group'>
		
							<TextField
								label='Nom'
								type='name'
								fullWidth
								variant="outlined"
								required
								onChange={handleChange}
								name='lastname'
							/>
						</div>
						<div className='form-group'>

							
						</div>
						<div className='form-group'>

							<TextField
								label='Telephone'
								name='phone'
								type='text'
								variant="outlined"
								className='form-control'
								required
								onChange={handleChange}
								fullWidth

							/>
						</div>
						<div className='form-group'>

							<TextField
								label='Email'
								name='email'
								className='form-control'
								variant="outlined"
								fullWidth
								required
								onChange={handleChange}
							/>
						</div>
						<div className='form-group'>
							
							<TextField
								label='Mot de passe'
								name='password'
								type='password'
								className='form-control'
								required
								onChange={handleChange}
								variant="outlined"
								fullWidth
							/>
						</div>
						{error}
		{/* <div className="form-group">
        			  <label>Confirm Password</label>
        			  <input
        			    type="password"
        			    {...register('confirmPassword')}
        			    className={`form-control ${
        			      errors.confirmPassword ? 'is-invalid' : ''
        			    }`}
        			  />
        			  <div className="invalid-feedback">
        			    {errors.confirmPassword?.message}
        			  </div>
        			</div>
					
        			<div className="form-group form-check">
        			  <input
        			    type="checkbox"
        			    {...register('acceptTerms')}
        			    className={`form-check-input ${
        			      errors.acceptTerms ? 'is-invalid' : ''
        			    }`}
        			  />
        			  <label htmlFor="acceptTerms" className="form-check-label">
        			    I have read and agree to the Terms
        			  </label>
        			  <div className="invalid-feedback">{errors.acceptTerms?.message}</div>
        			</div> */}
						<div className='form-group'>
							<Button type="submit" fullWidth variant="contained" color="primary" className={submitButton}>Valider</Button>
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
			</Container>
		</>
	);
};

export default SignUpPages;
