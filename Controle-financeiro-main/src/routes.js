import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./pages/Login";
import Cadastrar from "./pages/Cadastrar";
import RecuperarSenha from "./pages/RecuperarSenha";
import Home from "./pages/Home";
import Configuracoes from "./pages/Configuracoes";
import Receitas from "./pages/Receitas";
import Despesas from "./pages/Despesas/index";
import NotFound from "./pages/Erro";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exct path="/cadastrar" component={Cadastrar} />
        <Route exct path="/RecuperarSenha" component={RecuperarSenha} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/configuracoes" component={Configuracoes} />
        <Route exact path="/receitas" component={Receitas} />
        <Route exact path="/despesas" component={Despesas} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}
