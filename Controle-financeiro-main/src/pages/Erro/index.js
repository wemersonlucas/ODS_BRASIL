import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import "./erro.css";
import notfound from "../../assets/notfound.png";
import financas from "../../assets/financas.png";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  error: {},

  control: {
    fontWeight: "bold",
    textDecoration: "none",
    cursor: "pointer",
    "&:hover": {
      color: "#5E35B1",
    },
    color: "#000",
    fontSize: 24,
    marginRight: 80,
  },

  secondLogo: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    height: 52,
    width: 52,
    marginRight: 10,
  },

  logo: {
    width: 350,
    height: 350,
  },

  link: {
    color: "212121",
    margin: 10,
    cursor: "pointer",
    "&:hover": {
      opacity: 0.7,
    },
  },

  h2: {
    color: "#5E35B1",
  },

  button: {
    color: "#673AB7",
    background: "#EDE7F6",
    "&:hover": {
      color: "#fff",
      background: "#5E35B1",
    },
  },
});

export default function NotFound() {
  const classes = useStyles();
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>404 Not Found</title>
      </Helmet>
      <AppBar position="static">
        <Toolbar>
          <img src={financas} alt="Logo" className={classes.secondLogo} />
          <Link to="/home" className={classes.control}>
            Control
          </Link>

          <Button className={classes.button}>Cadastre-se ou Entre</Button>
        </Toolbar>
      </AppBar>
      <div className="error">
        <h1>Error 404</h1>
        <h2 className={classes.h2}>
          The page you are looking for can´t be found.
        </h2>
        {/* <span className="sugestion">Você pode estar procurando:</span> */}
        <Link className={classes.link} to="/">
          Página inicial
        </Link>
        <img src={notfound} className={classes.logo} alt="errorImage" />
      </div>
    </>
  );
}
