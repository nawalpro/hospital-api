import React, { useState, FormEvent, ChangeEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { TextField, Button, makeStyles, Typography } from "@material-ui/core";

// export type usersignIn = {

//     email?: string;
//     password?: string;

// };

const useStyles = makeStyles({
  root: {
    border: 0,
    textAlign: "center",
    marginTop: "10%",
  },
  fieldStyle: {
    marginBottom: "30px",
  },
});

// const LoginPage: React.FC<usersignIn> = () => {

function LoginPage() {

  const classes = useStyles();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  //Autre façon de faire si il y'a une interface: const [form, setForm] = useState<usersignIn>({ email: "f", password: "gf", });

  const oneChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const oneChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      axios.post(`http://localhost:8000/patient/auth`, { email, password });
      console.log("connecté");

    } catch (error) {
      
      console.log("erreur");
    }
  };

  return (
    <section className={classes.root}>
      <Typography variant="h4">Se connecter</Typography>

      <form action="POST" className={classes.root} onSubmit={handleSubmit}>
        <div className={classes.fieldStyle}>
          <TextField
            // id="outlined-basic"
            value={email}
            type="email"
            label="email"
            name="email"
            variant="outlined"
            color="primary"
            onChange={oneChangeEmail}
            required
          />
        </div>

        <div className={classes.fieldStyle}>
          <TextField
            value={password}
            type="password"
            id="outlined-basic"
            label="password"
            name="password"
            variant="outlined"
            color="primary"
            onChange={oneChangePassword}
            required
          />
        </div>

        <input
          id="formButton"
          className="btn btn-primary"
          type="submit"
          placeholder="Valider"
        />

        {/* <div className="form-group">
          <Button
            size="large"
            href="#"
            variant="contained"
            type="submit"
            className="mainbutton"
            color="primary"
          >
            Valider
          </Button>
        </div>  */}

        <div className="form-group">
          <p>
            Vous n’avez pas de compte ?<Link to="/signup"> Cliquez ici.</Link>
          </p>
          <p>
            Tous les champs indiqués par un "<span className="required">*</span>
            " sont obligatoires.
            <br />
            Merci de remplir le formulaire.
          </p>
        </div>
      </form>
    </section>
  );
}
export default LoginPage;
