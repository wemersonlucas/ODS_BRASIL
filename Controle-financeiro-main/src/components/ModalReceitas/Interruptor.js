import React from "react";
import Switch from "@material-ui/core/Switch";
import CheckIcon from "@material-ui/icons/Check";
import { makeStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const useStyles = makeStyles((theme) => ({
  div: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 20,
  },
  interruptor: {
    marginLeft: 230,
  },
}));

export default function InterruptorModalReceita() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div className={classes.div}>
      <CheckIcon />

      <FormControlLabel
        control={
          <Switch
            checked={state.checkedA}
            onChange={handleChange}
            color="primary"
            name="checkedA"
            className={classes.interruptor}
          />
        }
        labelPlacement="start"
        label={state.checkedA ? "Foi recebido" : "Não foi recebido"}
      />
    </div>
  );
}
