<template>
  <div class="p-3 pb-0 card-header">
    <h6>{{ title }}</h6>
    <!-- eslint-disable vue/no-v-html -->
    <!--<p v-if="description" class="text-sm" v-html="getDescription" />-->
  </div>
  <div class="p-3 card-body">
    <div class="chart">
      <canvas :id="id" class="chart-canvas" :height="height"></canvas>
    </div>
  </div>
</template>

<script>
import Chart from "chart.js/auto";

export default {
  name: "Gradient1LineChart",
  props: {
    id: {
      type: String,
      required: true,
    },
    height: {
      type: String,
      default: "300",
    },
    title: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    chart: {
      type: Object,
      required: true,
      labels: Array,
      datasets: {
        type: Array,
        label: String,
        data: Array,
      },
    },
    arrow: {
      type: String,
      default: 'right'
    },
    color: {
      type: String,
      default: 'secondary'
    },
    proc: {
      type: Number,
      default: 0
    }
  },

  mounted() {
    var ctx = document.getElementById(this.id).getContext("2d");

    var gradientStroke1 = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke1.addColorStop(1, "rgba(39, 155, 74,0.2)");
    gradientStroke1.addColorStop(0.2, "rgba(72,72,176,0.0)");
    gradientStroke1.addColorStop(0, "rgba(39, 155, 74,0)");

    let chartStatus = Chart.getChart(this.id);
    if (chartStatus != undefined) {
      chartStatus.destroy();
    }

    new Chart(ctx, {
      type: "line",
      data: {
        labels: this.chart.labels,
        datasets: [
          {
            label: this.chart.datasets[0].label,
            tension: 0.6,
            borderWidth: 0,
            pointRadius: 0,
            borderColor: "#279b4a",
            // eslint-disable-next-line no-dupe-keys
            borderWidth: 2,
            backgroundColor: gradientStroke1,
            fill: true,
            data: this.chart.datasets[0].data,
            maxBarThickness: 6,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
        interaction: {
          intersect: false,
          mode: "index",
        },
        scales: {
          y: {
            grid: {
              drawBorder: false,
              display: true,
              drawOnChartArea: true,
              drawTicks: false,
              borderDash: [5, 5],
            },
            ticks: {
              display: true,
              padding: 10,
              color: "#b2b9bf",
              font: {
                size: 11,
                family: "Open Sans",
                style: "normal",
                lineHeight: 2,
              },
            },
          },
          x: {
            grid: {
              drawBorder: false,
              display: false,
              drawOnChartArea: false,
              drawTicks: false,
              borderDash: [5, 5],
            },
            ticks: {
              display: true,
              color: "#b2b9bf",
              padding: 10,
              font: {
                size: 11,
                family: "Open Sans",
                style: "normal",
                lineHeight: 2,
              },
            },
          },
        },
      },
    });
  },
  computed: {
    getDescription() {
      return `<i class='fa fa-arrow-${this.arrow} text-${this.color}'></i>
      <span class='font-weight-bold'>${this.proc}% </span> ${this.description}`
    },
  },
};
</script>
