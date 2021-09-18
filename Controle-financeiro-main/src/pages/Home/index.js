import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Header from "../../components/Header";
import Container from "@material-ui/core/Container";

//Importando componentes
import Saldo from "../../components/Dashboard/Saldo";
import Despesas from "../../components/Dashboard/Despesas";
import Receitas from "../../components/Dashboard/Receitas";
import Cartoes from "../../components/Dashboard/Cartoes";
import Comparacao from "../../components/Dashboard/Comparacao";
import Resumo from "../../components/Dashboard/Resumo/index";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#E3F2FD",
    borderRadius: 10,
    marginTop: 120,
  },
  card: {
    height: 500,
    width: 500,
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Header />
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={3}>
          <Paper className={classes.paper}>
            <Saldo />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
          <Paper className={classes.paper}>
            <Despesas />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
          <Paper className={classes.paper}>
            <Receitas />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
          <Paper className={classes.paper}>
            <Cartoes />
          </Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.paper}>
            <Comparacao />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <Resumo />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
