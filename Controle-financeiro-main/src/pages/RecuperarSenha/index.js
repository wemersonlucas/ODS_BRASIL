import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Control from "../../assets/Control.png";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";

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
});

export default function RecuperarSenha() {
  const classes = useStyles();

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
        <Typography>Informe o endereço de email</Typography>
      </CardContent>

      <form className={classes.form} noValidate autoComplete="on">
        <TextField
          type="email"
          id="outlined-basic"
          label="Email"
          variant="outlined"
          fullWidth
          className={classes.textField}
        />
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="spaceBetween"
          alignItems="center"
        >
          <Link to="/" className={classes.linkSpan}>
            <span className={classes.span}>Lembrou a senha?</span>
          </Link>
        </Box>

        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Button fullWidth variant="contained" className={classes.button}>
            Enviar
          </Button>
        </Box>
      </form>
    </Card>
  );
}
