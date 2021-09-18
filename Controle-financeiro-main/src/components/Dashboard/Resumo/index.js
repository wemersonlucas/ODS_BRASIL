import React, { Component } from "react";
import Chart from "react-apexcharts";

class Resumo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [44, 55, 41, 17],

      options: {
        chart: {
          type: "donut",
          stacked: false,
        },
        colors: ["#2196F3", "#00E676", "#F44336", "#5E35B1"],
        dataLabels: {
          enabled: false,
        },
        labels: ["Saldo", "Receitas", "Despesas", "Transferências"],
        legend: {
          show: true,
          position: "bottom",
          horizontalAlign: "center",
          fontSize: "14px",
          fontFamily: "Helvetica, Arial",
          fontWeight: 400,
          onItemClick: {
            toggleDataSeries: true,
          },
          onItemHover: {
            highlightDataSeries: true,
          },
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
          type="donut"
          height={500}
          width={335}
        />
      </div>
    );
  }
}

export default Resumo;
