import { Link } from "react-router-dom";
import React, {  useState } from "react";
import axios from 'axios';
import {
	makeStyles,
	Container,
	Typography,
	TextField,
	Button,
  } from "@material-ui/core";

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
	adress?: string;
	lastName?: string;
	firstName?: string;
    error?: string;
	// confirmPassword: string;
	// acceptTerms: boolean;
};

const SignUpPages: React.FC<Usersignup> = () => {
	const { heading, submitButton } = useStyles();

	
    
    const [value, setValue] = useState({
		firstName: '',
        lastName: '',
        email: '',
        phone: '',
        adress: '',
        password: '',
        error: '',
	});


	const handleChange = (e: React.FormEvent<EventTarget>) => {
		let target = e.target as HTMLInputElement;
		setValue({ ...value, [target.name]: target.value });
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		//add
		
		try {
			console.log(value, "data");
			axios.post(
				'http://localhost:8000/patient/',
				setValue({ ...value,
					// firstName,
        			// lastName,
        			// email,
        			// phone,
        			// adress,
        			// password,
				})
				)
				.then()
			} catch (err) {
		console.log(err, "register");
			}
		
	};

	return (
		<>
		<Typography className= {heading} variant="h2">Bienvenue sur WeCare (hospital) </Typography>
		<Container maxWidth="xs">
			<Typography className= {heading} variant="h3">S'inscrire</Typography>
			<section className=''>
				<form  onSubmit={handleSubmit}>
					<TextField 
					    variant="outlined"
						label='first-name'
						fullWidth
						name='firstName'
						required
						  onChange={handleChange}
						/>
					<div className='form-group'>
						<label htmlFor='name'>
							Nom<span className='required'></span>
						</label>
						<input
							type='name'
							className='form-control'
							required
							onChange={handleChange}
							name='lastName'
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
							onChange={handleChange}
							name='adress'
						/>
					</div>
                    <div className='form-group'>
						<label htmlFor='phone'>
							Téléphone<span ></span>
						</label>
						<input
						name='phone'
							type='text'
							className='form-control'
							required
							onChange={handleChange}
						/>
					</div>
					<div className='form-group'>
						<label htmlFor='email'>
							Email<span className='required'></span>
						</label>
						<input
						name='email'
							className='form-control'
							required
							onChange={handleChange}
						/>
					</div>
					<div className='form-group'>
						<label htmlFor='password'>
							Mot de passe<span className='required'></span>
						</label>
						<input
						name='password'
							type='password'
							className='form-control'
							required
							onChange={handleChange}
						/>
					</div>

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
				</form>
			</section>
		</Container>
		</>
	);
};

export default SignUpPages;
