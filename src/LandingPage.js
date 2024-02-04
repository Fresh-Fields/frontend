import Chart from 'chart.js/auto'

import districts from "./districts.json";

const inputElement = document.getElementById('districtInput');
const listElement = document.getElementById('districtList');
const districtNameElement = document.querySelector('.district-name-span');
const districtRainfallElement = document.querySelector('.rainfall-data');
const districtHumidityElement = document.querySelector('.humidity-data');
const districtMapElement = document.querySelector('img');

function getRainfall(district) {
  if (districts[district]) {
    return districts[district].rainfall;
  }
}

function getTemp(district) {
  if (districts[district]) {
    return districts[district].humidity;
  }
}

// function toggleList is now this
document.querySelector(".listArrow").addEventListener("click",
  () => {
    listElement.style.display = listElement.style.display === 'block' ? 'none' : 'block';
  }
)

function selectDistrict(district) {
  inputElement.value = district;
  inputElement.classList.add('selected');
  listElement.style.display = 'none';
  document.querySelector('.watermark').style.display = 'none'; // Hide watermark when a district is selected
  districtNameElement.textContent = `${district}`;
  districtRainfallElement.textContent = `${getRainfall(district)} mm`
  districtHumidityElement.textContent = `${getTemp(district)} °c`
  const nValue = districts[district]['N-ratio'];
  const pValue = districts[district]['P-ratio'];
  const kValue = districts[district]['K-ratio'];

  myChart.data.datasets[0].data = [nValue, pValue, kValue];
  myChart.update();

  const imagePath = `assets/maps_district/${district}.jpg`
  districtMapElement.src = imagePath

}

document.addEventListener('click', function (event) {
  if (!event.target.classList.contains('dropdown-input') && !event.target.classList.contains('arrow-icon')) {
    listElement.style.display = 'none';
  }
});

inputElement.addEventListener('input', function () {
  const filter = inputElement.value.toLowerCase();
  const items = document.querySelectorAll('.dropdown-list-item');
  items.forEach(item => {
    const itemName = item.textContent.toLowerCase();
    if (itemName.includes(filter)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
  document.querySelector('.watermark').style.display = filter === '' ? 'block' : 'none'; // Hide watermark when typing
});

// populate page
/* EXPLANATION FOR SAMARTH
 * What this does is first goes through every object in district.json
 * After that for each KEY (for example Nagpur) it creates a div
 */
for (let district in districts) {
  let div = document.createElement("div");
  div.innerText = district;
  div.addEventListener("click", () => { selectDistrict(district); });
  document.querySelector("#districtList").appendChild(div);
}


/*        *****Graphical work*****       */

var ctx = document.getElementById("myChart").getContext("2d");

var myChart = new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: ["Nitrogen", "Phosphorus", "Potassium"],
    datasets: [{
      data: [1, 1, 1],
      label: "N:P:K Ratio",
      backgroundColor: ["red", "blue", "yellow"],
    }]
  },

})