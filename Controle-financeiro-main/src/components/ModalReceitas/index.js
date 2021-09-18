import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import Paper from "@material-ui/core/Paper";
import Draggable from "react-draggable";
import { makeStyles } from "@material-ui/core/styles";
import AddCircleIcon from "@material-ui/icons/AddCircle";

import Box from "@material-ui/core/Box";

//IMPORTANDO COMPONENTES
import Data from "./Data";
import Valor from "./Valor";
import Descricao from "./Descricao";
import InterruptorModalReceita from "./Interruptor";
import Categoria from "./Categoria";
import Conta from "./Conta";

const useStyles = makeStyles((theme) => ({
  iconAdd: {
    height: 32,
    width: 32,
    margin: 10,
    "&:hover": {
      color: "#1E88E5",
    },
  },
  acoes: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItens: "center",
  },
  diolog: {
    minWidth: 600,
    minHeight: 450,
  },
  button: {
    margin: 15,
  },
  title: {
    fontFamily: "Roboto",
    fontWeight: 700,
    fontSize: 32,
  },
}));

function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

export default function ModalAddReceitas() {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <AddCircleIcon
        color="primary"
        className={classes.iconAdd}
        onClick={handleClickOpen}
      />
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle
          style={{ cursor: "move" }}
          className={classes.title}
          id="draggable-dialog-title"
        >
          Adicionar receita
        </DialogTitle>
        <DialogActions className={classes.acoes}>
          <Valor />
          <InterruptorModalReceita />
          <Data />
          <Descricao />
          <Categoria />
          <Conta />
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
          >
            <Button
              className={classes.button}
              variant="contained"
              autoFocus
              onClick={handleClose}
              color="secondary"
            >
              Cancelar
            </Button>
            <Button variant="contained" onClick={handleClose} color="primary">
              Enviar
            </Button>
          </Box>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
