import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import FilterListIcon from "@material-ui/icons/FilterList";
import PrintIcon from "@material-ui/icons/Print";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import TablePagination from "@material-ui/core/TablePagination";

//Components
import Header from "../../components/Header";
import ModalAddReceitas from "../../components/ModalReceitas";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    width: "100%",
    height: "100%",
    backgroundColor: "#E3F2FD",
    borderRadius: 10,
    marginTop: 80,
  },
  table: {
    minWidth: 650,
  },
  SearchIcon: {
    color: "#673AB7",
    "&:hover": {
      color: "#5E35B1",
    },
  },
  input: {
    marginLeft: theme.spacing(1),
  },
  cardForm: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginTop: 80,
    marginBottom: 30,
  },
  receita: {
    fontFamily: "Roboto",
    fontSize: 18,
    margin: 10,
  },
  div: {
    flex: 1,
  },
  paperIcons: {
    marginBottom: 15,
  },
  icons: {
    margin: 10,
    "&:hover": {
      color: "#1E88E5",
    },
  },
  tableHead: {
    color: "#212121",
    fontFamily: "Roboto",
    fontWeight: 700,
  },
  buttonIcons: {
    margin: 5,
  },
  iconEdit: {
    color: "#1E88E5",
    "&:hover": {
      color: "#1565C0",
    },
  },
  iconDelet: {
    marginRight: 10,
    color: "#D84315",
    "&:hover": {
      color: "#C62828",
    },
  },
}));

function createData(
  id,
  situacao,
  data,
  descricao,
  categoria,
  conta,
  valor,
  acoes
) {
  return { id, situacao, data, descricao, categoria, conta, valor, acoes };
}

const rows = [
  createData(1, "Aberto", "28/09/2021", "Salario", "Receita", "Poupança", 3000),
  createData(2, "Aberto", "28/09/2021", "Salario", "Receita", "Poupança", 3000),
  createData(3, "Aberto", "28/09/2021", "Salario", "Receita", "Poupança", 3000),
  createData(4, "Aberto", "28/09/2021", "Salario", "Receita", "Poupança", 3000),
  createData(5, "Aberto", "28/09/2021", "Salario", "Receita", "Poupança", 3000),
  createData(6, "Aberto", "28/09/2021", "Salario", "Receita", "Poupança", 3000),
  createData(7, "Aberto", "28/09/2021", "Salario", "Receita", "Poupança", 3000),
  createData(8, "Aberto", "28/09/2021", "Salario", "Receita", "Poupança", 3000),
  createData(9, "Aberto", "28/09/2021", "Salario", "Receita", "Poupança", 3000),
  createData(
    10,
    "Aberto",
    "28/09/2021",
    "Salario",
    "Receita",
    "Poupança",
    3000
  ),
  createData(
    11,
    "Aberto",
    "28/09/2021",
    "Salario",
    "Receita",
    "Poupança",
    3000
  ),
  createData(
    12,
    "Aberto",
    "28/09/2021",
    "Salario",
    "Receita",
    "Poupança",
    3000
  ),
  createData(
    13,
    "Aberto",
    "28/09/2021",
    "Salario",
    "Receita",
    "Poupança",
    3000
  ),
  createData(
    14,
    "Aberto",
    "28/09/2021",
    "Salario",
    "Receita",
    "Poupança",
    3000
  ),
  createData(
    15,
    "Aberto",
    "28/09/2021",
    "Salario",
    "Receita",
    "Poupança",
    3000
  ),
  createData(
    16,
    "Aberto",
    "28/09/2021",
    "Salario",
    "Receita",
    "Poupança",
    3000
  ),
  createData(
    17,
    "Aberto",
    "28/09/2021",
    "Salario",
    "Receita",
    "Poupança",
    3000
  ),
  createData(
    18,
    "Aberto",
    "28/09/2021",
    "Salario",
    "Receita",
    "Poupança",
    3000
  ),
  createData(
    19,
    "Aberto",
    "28/09/2021",
    "Salario",
    "Receita",
    "Poupança",
    3000
  ),
  createData(
    20,
    "Aberto",
    "28/09/2021",
    "Salario",
    "Receita",
    "Poupança",
    3000
  ),
];

export default function Despesas() {
  const classes = useStyles();
  const [page, setPage] = React.useState(2);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <Header />

      <Container maxWidth="lg" className={classes.container}>
        <Grid item xs={12} className={classes.cardForm}>
          <Paper className={classes.paperIcons}>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
            >
              <p className={classes.receita}>Despesas</p>
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
              <PrintIcon className={classes.icons} />
              <FilterListIcon className={classes.icons} />
              <ModalAddReceitas />
            </Box>
          </Paper>
          <TableContainer component={Paper}>
            <Divider light />
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell className={classes.tableHead} align="center">
                    ID
                  </TableCell>
                  <TableCell className={classes.tableHead} align="center">
                    Situação
                  </TableCell>
                  <TableCell className={classes.tableHead} align="center">
                    Data
                  </TableCell>
                  <TableCell className={classes.tableHead} align="center">
                    Descrição
                  </TableCell>
                  <TableCell className={classes.tableHead} align="center">
                    Categoria
                  </TableCell>
                  <TableCell className={classes.tableHead} align="center">
                    Conta
                  </TableCell>
                  <TableCell className={classes.tableHead} align="center">
                    Valor
                  </TableCell>
                  <TableCell className={classes.tableHead} align="center">
                    Ações
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <TableRow key={row.id}>
                      <TableCell align="center" component="th" scope="row">
                        {row.id}
                      </TableCell>
                      <TableCell align="center">{row.situacao}</TableCell>
                      <TableCell align="center">{row.data}</TableCell>
                      <TableCell align="center">{row.descricao}</TableCell>
                      <TableCell align="center">{row.categoria}</TableCell>
                      <TableCell align="center">{row.conta}</TableCell>
                      <TableCell align="center">{row.valor}</TableCell>
                      <TableCell align="center">
                        <DeleteIcon
                          color="primary"
                          className={(classes.buttonIcons, classes.iconDelet)}
                        />
                        <EditIcon
                          color="secondary"
                          className={(classes.buttonIcons, classes.iconEdit)}
                        />
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
            <TablePagination
              backIconButtonText="Página anterior"
              nextIconButtonText="Próxima página"
              labelRowsPerPage="Linhas por página"
              rowsPerPageOptions={[5, 10, 15]}
              component="div"
              count={rows.length}
              page={page}
              onPageChange={handleChangePage}
              rowsPerPage={rowsPerPage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </TableContainer>
        </Grid>
      </Container>
    </>
  );
}
