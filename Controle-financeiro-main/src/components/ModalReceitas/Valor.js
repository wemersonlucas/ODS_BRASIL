import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import NumberFormat from "react-number-format";
import PropTypes from "prop-types";
import KeyboardIcon from "@material-ui/icons/Keyboard";
import InputAdornment from "@material-ui/core/InputAdornment";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  TextField: {
    width: 400,
  },
}));

export default function Valor() {
  const [values, setValues] = React.useState({
    numberformat: "1320",
  });
  const classes = useStyles();

  function NumberFormatCustom(props) {
    const { inputRef, onChange, ...other } = props;

    return (
      <NumberFormat
        {...other}
        getInputRef={inputRef}
        onValueChange={(values) => {
          onChange({
            target: {
              name: props.name,
              value: values.value,
            },
          });
        }}
        thousandSeparator
        isNumericString
        prefix="R$ "
      />
    );
  }

  NumberFormatCustom.propTypes = {
    inputRef: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <TextField
      className={classes.TextField}
      value={values.numberformat}
      onChange={handleChange}
      name="Deve ter um valor maior que 0"
      id="formatted-numberformat-input"
      helperText="Informe o valor"
      InputProps={{
        inputComponent: NumberFormatCustom,
        startAdornment: (
          <InputAdornment position="start">
            <KeyboardIcon />
          </InputAdornment>
        ),
      }}
    />
  );
}
