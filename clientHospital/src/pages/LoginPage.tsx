import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TextField, Button, makeStyles, Typography } from "@material-ui/core";

export type usersignIn = {
  email?: string;
  password?: string;
};

const useStyles = makeStyles({
  root: {
    border: 0,
    textAlign: "center",
  },
  fieldStyle: {
    marginBottom: "30px",
  },
});

const  LOginPage : React.FC<BudgetProps> = () => {
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleChange = () => {
    setEmail("new data");
    setPassword("new data");
  };

  return (
    <section className={classes.root}>


      <Typography variant="h4">Se connecter</Typography>

      <form className={classes.root}>
        <div className={classes.fieldStyle}>
          <TextField
            id="outlined-basic"
            type="email"
            label="email"
            name="email"
            variant="outlined"
            color="primary"
            onChange={handleChange}
            required
          />
        </div>

        <div className={classes.fieldStyle}>
          <TextField
            type="password"
            id="outlined-basic"
            label="password"
            name="password"
            variant="outlined"
            color="primary"
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <Button
            onClick={() => console.log("hello world")}
            size="large"
            href="#"
            variant="contained"
            type="submit"
            className="mainbutton"
            color="primary"
          >
            Valider
          </Button>
        </div>

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
// const LoginPage = () => {
//   return (
//     <>
//       <h1>LOGIN PAGE</h1>
//       <HandleLogin></HandleLogin>
//     </>
//   );
// };

export default LoginPage;
