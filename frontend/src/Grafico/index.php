<?php

$con = mysqli_connect('localhost', 'root', '', 'ods');
$con ->set_charset("utf8");
$result = mysqli_query($con,"SELECT * FROM usuario");
$idade = [];
$sexo = [];

while($line = mysqli_fetch_array($result, MYSQLI_ASSOC)){
    $idade[] = "`{$line['idade']}`";
    $sexo[] = $line['sexo'];
}

$idade = implode(',', $idade);
$sexo = implode(',', $sexo);
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
    <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>

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
          <a class="nav-link active text-white" href="../Home/index.php">Home</a>
          <a class="nav-link text-white" href="../Form/index.php">Formulario</a>
          <a class="nav-link text-white" href="../Grafico/index.php">Gráfico</a>
        </nav>
      </nav>
      <h1 id="title">Gráfico</h1>
      <div id="chart">
        <script>
          var options = {
            series: [
              {
                name: "Media de idade",
                data: [<?= $idade ?>],
              },
            ],
            annotations: {
              points: [
                {
                  x: "Falta de atenção",
                  seriesIndex: 0,
                  label: {
                    borderColor: "#775DD0",
                    offsetY: 0,
                    style: {
                      color: "#fff",
                      background: "#775DD0",
                    },
                  },
                },
              ],
            },
            chart: {
              height: 350,
              type: "bar",
            },
            plotOptions: {
              bar: {
                borderRadius: 10,
                columnWidth: "50%",
              },
            },
            dataLabels: {
              enabled: false,
            },
            stroke: {
              width: 2,
            },
  
            grid: {
              row: {
                colors: ["#fff", "#f2f2f2"],
              },
            },
            xaxis: {
              labels: {
                show: false,
                rotate: -95,
              },
              categories: [
                "Falta de atenção",
                "Desobediência à sinalização",
                "Velocidade incompatível",
                "Ingestão de álcool no volante",
                "Defeito mecânico no veículo",
                "Desobediência em relação à distância de segurança",
                "Dormir ao volante",
                "Animais na pista",
                "Ultrapassagem indevida",
                "Defeito na via",
              ],
              tickPlacement: "on",
            },
            yaxis: {
              title: {
                text: "Dados coletados",
              },
            },
            fill: {
              type: "gradient",
              gradient: {
                shade: "light",
                type: "horizontal",
                shadeIntensity: 0.25,
                gradientToColors: undefined,
                inverseColors: true,
                opacityFrom: 0.85,
                opacityTo: 0.85,
                stops: [50, 0, 100],
              },
            },
          };
  
          var chart = new ApexCharts(document.querySelector("#chart"), options);
          chart.render();
        </script>
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
