import Chart from "chart.js/auto";

import { initSocket, onRecv, peek } from "./socket";

let graph = document.querySelector(".market-graph");

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
    labels: [...Array(101).keys()],
    datasets: [
      {
        label: "Market price",
        data: peek("market"),
      },
      {
        label: "Prediction",
        data: [...Array(44).fill(0)]
      }
    ]
  },
});

function addData(chart, newData) {
  chart.data.datasets.forEach((dataset) => {
    dataset.data.push(newData);
  });
  chart.update();
}

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
    // console.log(data)
    let data_arr = [...data];
    while(data_arr.length < 101) data_arr.unshift(0);
    chart.data.datasets[1].data =  data_arr;
    chart.update();
  });

})