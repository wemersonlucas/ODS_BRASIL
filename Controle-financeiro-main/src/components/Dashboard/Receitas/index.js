import React, { Component } from "react";
import Chart from "react-apexcharts";

class Receitas extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Receitas",
          data: [31, 40, 28, 51, 42, 109, 100],
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
        colors: ["#00E676"],
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
          show: true,
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
      <div className="app">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="area"
          width="250"
        />
      </div>
    );
  }
}

export default Receitas;
