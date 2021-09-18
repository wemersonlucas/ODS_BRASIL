import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import Avatar from "@material-ui/core/Avatar";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import BarChartOutlinedIcon from "@material-ui/icons/BarChartOutlined";
import SettingsIcon from "@material-ui/icons/Settings";
import TrendingUpOutlinedIcon from "@material-ui/icons/TrendingUpOutlined";
import TrendingDownOutlinedIcon from "@material-ui/icons/TrendingDownOutlined";
import CompareArrowsOutlinedIcon from "@material-ui/icons/CompareArrowsOutlined";
import Control from "../../assets/Control.png";
import perfil from "../../assets/perfil.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  small: {
    width: theme.spacing(5),
    height: theme.spacing(5),
    right: 15,
  },
  menu: {
    color: "#2196f3",
    background: "#fff",
  },
  logo: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    height: 52,
    width: 52,
  },
  name: {
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: 24,
    cursor: "pointer",
    color: "#000",
    textDecoration: "none",
    marginRight: 60,
    "&:hover": {
      color: "#5E35B1",
    },
  },
  input: {
    marginLeft: theme.spacing(1),
  },
  iconMenu: {
    marginRight: 20,
    color: "#673AB7",
    background: "#EDE7F6",
    height: 28,
    width: 28,
    "&:hover": {
      color: "#fff",
      background: "#5E35B1",
    },
  },
  div: {
    flex: 1,
  },
  SearchIcon: {
    color: "#673AB7",
    "&:hover": {
      color: "#5E35B1",
    },
  },
  button: {
    color: "#673AB7",
    background: "#EDE7F6",
    "&:hover": {
      color: "#fff",
      background: "#5E35B1",
    },
  },
  MenuItem: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    textDecoration: "none",

    width: 180,
    "&:hover": {
      background: "#EDE7F6",
    },
  },
  linkMenu: {
    textDecoration: "none",
    color: "#212121",
  },
  popover: {
    marginTop: 50,
  },
  iconResumo: {
    color: "#2196F3",
  },

  iconReceita: {
    color: "#00C853",
  },
  iconDespesa: {
    color: "#F44336",
  },
  iconTransf: {
    color: "#4527A0",
  },
  iconConfig: {
    color: "#FFC107",
  },
}));

export default function Header() {
  const classes = useStyles();
  const history = useHistory();
  const [closeOrOpen, setCLoseOrOpen] = React.useState(null);

  const handleMenu = (e) => {
    setCLoseOrOpen(e.currentTarget);
  };

  const handleClose = () => {
    setCLoseOrOpen(null);
  };

  function sair() {
    history.push("/");
  }
  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.menu}>
        <Toolbar>
          <img src={Control} alt="Logo" className={classes.logo} />
          <Link to="/home" className={classes.name}>
            Control
          </Link>
          <MenuIcon
            aria-controls="Menu"
            aria-haspopup="true"
            onClick={handleMenu}
            className={classes.iconMenu}
          />
          <Menu
            id="simple-menu"
            anchorEl={closeOrOpen}
            keepMounted
            open={Boolean(closeOrOpen)}
            onClose={handleClose}
            className={classes.popover}
          >
            <MenuItem onClick={handleClose} className={classes.MenuItem}>
              <BarChartOutlinedIcon className={classes.iconResumo} />
              <Link className={classes.linkMenu} to="/home">
                Resumo
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose} className={classes.MenuItem}>
              <TrendingUpOutlinedIcon className={classes.iconReceita} />
              <Link className={classes.linkMenu} to="/receitas">
                Receitas
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose} className={classes.MenuItem}>
              <TrendingDownOutlinedIcon className={classes.iconDespesa} />
              <Link className={classes.linkMenu} to="/despesas">
                Despesas
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose} className={classes.MenuItem}>
              <CompareArrowsOutlinedIcon className={classes.iconTransf} />
              Transferências
            </MenuItem>
            <MenuItem onClick={handleClose} className={classes.MenuItem}>
              <SettingsIcon className={classes.iconConfig} />
              <Link className={classes.linkMenu} to="/configuracoes">
                Configurações
              </Link>
            </MenuItem>
          </Menu>
          <Box
            border={1}
            borderColor="#9e9e9e"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <InputBase className={classes.input} placeholder="Pesquisar" />
            <SearchIcon className={classes.SearchIcon} />
          </Box>
          <div className={classes.div} />
          <Avatar
            alt="Foto de perfil"
            variant="square"
            src={perfil}
            className={classes.small}
          />
          <Button className={classes.button} onClick={sair}>
            Sair
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
