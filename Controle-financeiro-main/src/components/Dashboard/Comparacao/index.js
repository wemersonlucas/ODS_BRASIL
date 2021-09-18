import React, { Component } from "react";
import Chart from "react-apexcharts";

class Comparacao extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Despesas",
          data: [30, 40, 28, 51, 12, 10, 15],
        },
        {
          name: "Receitas",
          data: [50, 32, 45, 81, 32, 50, 30],
        },
        {
          name: "Saldo",
          data: [20, -8, 17, 30, 20, 40, 15],
        },
      ],
      options: {
        chart: {
          type: "area",
          height: 100,
          stacked: true,

          toolbar: {
            show: false,
          },
        },
        colors: ["#F44336", "#00E676", "#2196F3"],
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
        },
        fill: {
          type: "gradient",
          gradient: {
            opacityFrom: 0.6,
            opacityTo: 0.8,
          },
        },
        toolbar: { show: false },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],

        legend: {
          show: false,
          position: "top",
          horizontalAlign: "left",
        },
        grid: { show: false },
        xaxis: {
          show: false,
          labels: {
            show: false,
          },
        },
        yaxis: {
          show: false,
        },
      },
    };
  }

  render() {
    return (
      <div id="chart">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="area"
          height={350}
          width={800}
        />
      </div>
    );
  }
}

export default Comparacao;
