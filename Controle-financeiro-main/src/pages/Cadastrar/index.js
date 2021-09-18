import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Control from "../../assets/Control.png";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import firebase from "../../firebase/connectionFirebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,

    height: "80vh",
    width: "20%",
    margin: "auto",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontFamily: "Roboto",
    fontWeight: 700,
    color: "#4527A0",
  },

  logo: {
    heith: 52,
    width: 52,
  },
  control: {
    fontSize: 22,
    fontFamily: "Roboto",
    fontWeight: 700,
    color: "#212121",
  },
  textField: {
    margin: 10,
  },
  button: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "#fff",
    background: "#4527A0",
    "&:hover": {
      background: "#5E35B1",
    },
    margin: 10,
  },
  span: {
    fontSize: 12,
    fontFamily: "Roboto",
    color: "#212121",
    margin: 10,
    "&:hover": {
      color: "#4527A0",
    },
  },
  linkSpan: {
    textDecoration: "none",
    color: "#212121",
  },
  linkButton: {
    textDecoration: "none",
    color: "#fff",
  },
});

export default function Cadastrar() {
  const classes = useStyles();
  const [nome, setNome] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [senha, setSenha] = React.useState("");
  const history = useHistory();

  // CADASTRANDO NOVO USUARIO NO BANCO DE DADOS
  async function novoUsuario() {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        toast.success("cadastro realizado com sucesso");
        history.push({
          pathname: "/",
        });
      })
      .catch((error) => {
        if (error.code === "auth/weak-password") {
          toast.error("Senha fraca...");
        } else if (error.code === "auth/email-already-in-use") {
          toast.error("Este email já existe!");
        } else if (error.code === "auth/invalid-email") {
          toast.error("Email invalido");
        }
      })
      .catch((senha) => {
        if (senha === "") {
          toast.error("Preencha o campo senha");
        }
      });
  }

  return (
    <Card className={classes.root}>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="spaceBetween"
        alignItems="center"
      >
        <img src={Control} className={classes.logo} alt="Logo" />
        <p className={classes.control}>Control</p>
      </Box>

      <CardContent className={classes.card}>
        <Typography className={classes.title}>Olá, seja bem vindo</Typography>
        <Typography>Prencher os campos para se cadastrar</Typography>
      </CardContent>

      <form className={classes.form} noValidate autoComplete="on">
        <TextField
          type="text"
          id="outlined-basic"
          label="Nome"
          variant="outlined"
          fullWidth
          className={classes.textField}
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <TextField
          type="email"
          id="outlined-basic"
          label="Email"
          variant="outlined"
          fullWidth
          className={classes.textField}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          type="password"
          id="outlined-basic"
          label="Senha"
          variant="outlined"
          fullWidth
          className={classes.textField}
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="spaceBetween"
          alignItems="center"
        >
          <Link to="/" className={classes.linkSpan}>
            <span className={classes.span}>Já tem um cadastro?</span>
          </Link>
        </Box>

        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={classes.button}
            onClick={novoUsuario}
          >
            <Link to="/" className={classes.linkButton}>
              Enviar
            </Link>
          </Button>
        </Box>
      </form>
    </Card>
  );
}
