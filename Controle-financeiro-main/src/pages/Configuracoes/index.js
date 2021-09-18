import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import perfil from "../../assets/perfil.svg";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import Header from "../../components/Header";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#E3F2FD",
    borderRadius: 10,
    marginTop: 80,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    margin: 20,
  },
  texto: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    fontFamily: "Roboto",
    fontWeight: 700,
  },
  textoMenu: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    fontFamily: "Roboto",
    fontWeight: 700,
    color: "#5E35B1",
  },
  card: {
    minWidth: 250,
    minHeight: 300,
    marginTop: 20,
    marginLeft: 25,
    marginBottom: 50,
  },
  title: {
    fontSize: 14,
    fontFamily: "Roboto",
    fontWeight: 600,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  img: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: 70,
    height: 70,
  },
  imgContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    marginTop: "12%",
  },
  inputBotao: {
    display: "none",
  },
  botaoUpload: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    marginTop: 20,
  },
  parag: {
    fontFamily: "Roboto",
    color: "#9e9e9e",
    fontSize: 12,
  },
  cards: {
    display: "flex",
    flexDirection: "row",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 10,
  },

  inputTextField: {
    margin: 10,
  },
  select: {
    marginTop: 10,
    height: 42,
    margin: 10,
  },
  labelSelect: {
    marginTop: 5,
    marginLeft: 10,
  },
  button: {
    margin: 10,
  },
  data: {
    margin: 12,
  },
}));

export default function Configuracoes() {
  const classes = useStyles();
  const [sexo, setSexo] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleChange = (event) => {
    setSexo(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <Header />
      <Container maxWidth="lg" className={classes.container}>
        <div className={classes.root}>
          <Grid container spacing={0}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <p className={classes.texto}>Minha conta</p>
                <br />
                <Divider light />
                <br />
                <p className={classes.textoMenu}>Perfil</p>
              </Paper>
            </Grid>

            <Grid item xs={12} className={classes.cards}>
              <Grid item xs={4}>
                <Card className={classes.card} variant="outlined">
                  <CardContent>
                    <Typography
                      className={classes.title}
                      color="textSecondary"
                      gutterBottom
                    >
                      Foto de perfil
                    </Typography>
                    <Divider light />
                    <div className={classes.imgContainer}>
                      <Avatar
                        alt="Foto de perfil"
                        src={perfil}
                        className={classes.img}
                      />
                      <br />
                      <p className={classes.parag}>
                        Upload da imagem de perfil
                      </p>
                    </div>
                    <input
                      accept="image/*"
                      className={classes.inputBotao}
                      id="contained-button-file"
                      multiple
                      type="file"
                    />
                    <label htmlFor="contained-button-file">
                      <Button
                        variant="contained"
                        color="primary"
                        component="span"
                        size="small"
                        className={classes.botaoUpload}
                      >
                        Upload imagem
                      </Button>
                    </label>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={7} className={classes.card}>
                <Card variant="outlined">
                  <CardContent>
                    <Typography
                      className={classes.title}
                      color="textSecondary"
                      gutterBottom
                    >
                      Formulario
                    </Typography>
                    <Divider light />
                  </CardContent>
                  <form noValidate autoComplete="off" className={classes.form}>
                    <TextField
                      id="outlined-basic"
                      label="Nome completo"
                      variant="outlined"
                      size="small"
                      className={classes.inputTextField}
                    />
                    <TextField
                      id="outlined-basic"
                      label="Apelido"
                      variant="outlined"
                      size="small"
                      className={classes.inputTextField}
                    />
                    <TextField
                      id="outlined-basic"
                      label="Email"
                      variant="outlined"
                      size="small"
                      className={classes.inputTextField}
                    />
                    <TextField
                      id="outlined-basic"
                      label="Cep"
                      variant="outlined"
                      size="small"
                      className={classes.inputTextField}
                    />
                    <TextField
                      id="outlined-basic"
                      label="Estado"
                      variant="outlined"
                      size="small"
                      className={classes.inputTextField}
                    />
                    <TextField
                      id="outlined-basic"
                      label="Cidade"
                      variant="outlined"
                      size="small"
                      className={classes.inputTextField}
                    />
                    <InputLabel className={classes.labelSelect}>
                      Sexo
                    </InputLabel>
                    <Select
                      labelId="demo-controlled-open-select-label"
                      id="demo-controlled-open-select"
                      open={open}
                      onClose={handleClose}
                      onOpen={handleOpen}
                      value={sexo}
                      onChange={handleChange}
                      variant="outlined"
                      className={classes.select}
                    >
                      <MenuItem value={10}>Masculino</MenuItem>
                      <MenuItem value={20}>Feminino</MenuItem>
                      <MenuItem value={30}>Não quero informar</MenuItem>
                    </Select>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <KeyboardDatePicker
                        className={classes.data}
                        margin="normal"
                        id="date-picker-dialog"
                        label="Data de nascimento"
                        format="MM/dd/yyyy"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                          "aria-label": "change date",
                        }}
                      />
                    </MuiPickersUtilsProvider>
                    <Button
                      className={classes.button}
                      variant="contained"
                      color="primary"
                    >
                      Enviar
                    </Button>
                  </form>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Container>
    </>
  );
}
