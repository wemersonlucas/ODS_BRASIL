import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

const currencies = [
  {
    value: "Investimentos",
  },
  {
    value: "Outros",
  },
  {
    value: "Prêmios",
  },
  {
    value: "Presente",
  },
  {
    value: "Salário",
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
  paper: {
    background: "#fff",
    "&:hover": {
      background: "#EDE7F6",
    },
  },
}));

export default function Categoria() {
  const classes = useStyles();
  const [currency, setCurrency] = React.useState("Investimentos");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <form noValidate autoComplete="off">
      <TextField
        className={classes.cat}
        id="standard-select-currency"
        select
        value={currency}
        onChange={handleChange}
        helperText="Por favor selecione uma categoria"
      >
        {currencies.map((option) => (
          <MenuItem
            className={classes.paper}
            key={option.value}
            value={option.value}
          >
            {` ${option.value}`}
          </MenuItem>
        ))}
      </TextField>
    </form>
  );
}
