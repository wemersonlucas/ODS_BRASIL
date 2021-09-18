import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

const currencies = [
  {
    value: "Poupança",
  },
  {
    value: "Corrente",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  cat: {
    width: 400,
    marginTop: 20,
  },
}));

export default function Conta() {
  const classes = useStyles();
  const [currency, setCurrency] = React.useState("Poupança");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <form noValidate autoComplete="off">
      <div>
        <TextField
          className={classes.cat}
          id="standard-select-currency"
          select
          value={currency}
          onChange={handleChange}
          helperText="Por favor selecione uma conta"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {` ${option.value}`}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </form>
  );
}
