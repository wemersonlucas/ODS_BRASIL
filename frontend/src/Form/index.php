<?php
 include "action.php";
?>
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <!-- Meta tags Obrigatórias -->
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <link rel="stylesheet" type="text/css" href="style.css" media="screen" />
    <!-- Bootstrap CSS -->
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
      integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
      crossorigin="anonymous"
    />

    <title>Ods - saúde e bem estar</title>
  </head>
  <body>
    <div class="container-fluid">
      <nav class="navbar navbar-dark bg-primary" id="navBar">
        <nav class="nav">
          <a class="nav-link active text-white"  href="../Home/index.php">Home</a>
          <a class="nav-link text-white" href="../Form/index.php">Formulario</a>
          <a class="nav-link text-white " href="../Grafico/index.php">Gráfico</a>
        </nav>
      </nav>
      <div class="row">
        <div class="col-sm-4">
          <form method="post" action="action.php">
            <div class="form-column">
                <h6>Dados pessoais</h6>
              <div class="col">
                <input type="text" class="form-control" placeholder="Nome" name="nome" />
              </div>
              <div class="col">
                <input
                  name="ra"
                  type="number"
                  class="form-control"
                  placeholder="Ra"
                />
              </div>
              <div class="col">
                <input
                  name="idade"
                  type="number"
                  class="form-control"
                  placeholder="Idade"
                />
              </div>
              <div class="col">
                <label for="inputSexo">Sexo</label>
                <select id="inputSexo" class="form-control" name="sexo">
                  <option selected>Masculino</option>
                  <option>Feminino</option>
                  <option>Outros</option>
                </select>
              </div>
              <div class="col">
                <input
                 name="cidade"
                  type="text"
                  class="form-control"
                  placeholder="Cidade"
                />
              </div>
            </div>
          </form>
        </div>
        <div class="col-sm-8">
          <form>
            <div class="form-column">
                <h6>Perguntas</h6>
              <div class="col">
                <p class="text">Alguma vez já sofreu acidente automobilistico?</p>
                <div class="form-check form-check-inline" name="checkBox">
                  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="opcao1">
                  <label class="form-check-label" for="inlineRadio1">Sim</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="opcao2">
                  <label class="form-check-label" for="inlineRadio2">Não</label>
                </div>
              </div>
                <div class="col">
                  <p class="text">Se sim, foi por algum motivo abaixo?</p>
                  <label for="inputSelect">Escolha um tipo</label>
                  <select id="inputSelect" class="form-control"name="opcao">
                    <option selected>Nunca sofri acidente no transito</option>
                    <option>Falta de atenção</option>
                    <option>Desobediência à sinalização</option>
                    <option>Velocidade incompatível</option>
                    <option>Ingestão de álcool</option>
                    <option>Defeito mecânico em veículo</option>
                    <option>Não guardar distância de segurança</option>
                    <option>Dormindo</option>
                    <option>Animais na pista</option>
                    <option>Ultrapassagem indevida</option>
                    <option>Defeito na via</option>
                    <option>Outros</option>
                  </select>
                </div>
                  </div>
              </div>
            </div>
            <div class="button">
                <div class="col-sm-12">
                  <button type="submit" class="btn btn-primary btn-sm btn-block" name="submit" >Enviar</button>
                </div>
            </div>
          </form>
        </div>
      </div>
    </div>

    <!-- JavaScript (Opcional) -->
    <!-- jQuery primeiro, depois Popper.js, depois Bootstrap JS -->
    <script
      src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
      integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"
      integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"
      integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy"
      crossorigin="anonymous"
    ></script>
  </body>
</html>
