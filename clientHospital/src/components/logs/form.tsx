/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CredentialsType } from "../../types";
import ToggleForm from "./ToggleForm";

type FormProps = {
	title: string;
	children: React.ReactNode;
	//for setting password
	setCredentials: (credentials: CredentialsType) => void;
	credentials: CredentialsType;
};

const Form = (props: FormProps) => {
    let navigate = useNavigate();

    const handleSubmit = (e: React.SyntheticEvent) => {
        if (props.title === 'Se connecter') {
            navigate('./Profile')
            return
        }
        navigate('./login');
    }
    return (
        <div>
            <form onSubmit={handleSubmit} >
			<h3>{props.title}</h3>
			{props.children}
			<label htmlFor='password'>Mot de passe</label>
			<input placeholder='Mot de passe' />

			<ToggleForm formTitle={props.title} />
            <input value={props.title}  type='submit'  />
		</form>
        </div>
    )
}

export default Form
