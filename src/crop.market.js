import Chart from "chart.js/auto";

import { initSocket, onRecv, peek } from "./socket";

let graph = document.querySelector(".market-graph");
let predictionDIV = document.querySelector(".prediction-div")

initSocket();

const chart = new Chart(graph.getContext("2d"), {
  type: "line",
  options: {
    responsive: true,
    animation: {
      duration: 0
    }
  },
  data: {
    labels: [...Array(101).fill(0).map((_, i) => i * 7)],
    datasets: [
      {
        label: "Market price",
        data: peek("market"),
      },
      {
        label: "Prediction",
        data: [...Array(101).fill(10)]
      }
    ]
  },
});

onRecv(e => {
  const data_array = peek("market");
  chart.data.datasets[0].data = data_array;

  fetch("/price", {
    method: 'POST',
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data_array)
  }).then(res => res.json()).then(data => {
    predictionDIV.innerHTML = data.toFixed(2);
    chart.data.datasets[1].data.shift();
    chart.data.datasets[1].data.push(data);
    chart.update();
  });
})