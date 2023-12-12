  const inputElement = document.getElementById('districtInput');
  const listElement = document.getElementById('districtList');
  const districtNameElement = document.querySelector('.district-name-span');
  const districtRainfallElement = document.querySelector('.rainfall-data');
  const districtHumidityElement = document.querySelector('.humidity-data');

  /*        *****All the district data*****         */

  const districts = 
  {
    "Ahmednagar": {
      "rainfall": 675,
      "humidity": 27.5,
      "N-ratio": 0,
      "P-ratio": 1,
      "K-ratio": 2
    },
    "Akola": {
      "rainfall": 725,
      "humidity": 28,
      "N-ratio": 1,
      "P-ratio": 1.5,
      "K-ratio": 1
    },
    "Amravati": {
      "rainfall": 800,
      "humidity": 28,
      "N-ratio": 2,
      "P-ratio": 1,
      "K-ratio": 1
    },
    "Aurangabad": {
      "rainfall": 650,
      "humidity": 29,
      "N-ratio": 1,
      "P-ratio": 1.5,
      "K-ratio": 1
    },
    "Beed": {
      "rainfall": 575,
      "humidity": 28.5,
      "N-ratio": 0,
      "P-ratio": 1,
      "K-ratio": 2
    },
    "Bhandara": {
      "rainfall": 1100,
      "humidity": 28,
      "N-ratio": 1,
      "P-ratio": 1,
      "K-ratio": 1
    },
    "Buldhana": {
      "rainfall": 750,
      "humidity": 28.5,
      "N-ratio": 1.5,
      "P-ratio": 1,
      "K-ratio": 1
    },
    "Chandrapur": {
      "rainfall": 1400,
      "humidity": 27.5,
      "N-ratio": 1,
      "P-ratio": 1,
      "K-ratio": 1
    },
    "Dhule": {
      "rainfall": 625,
      "humidity": 26.5,
      "N-ratio": 0,
      "P-ratio": 1,
      "K-ratio": 2
    },
    "Gadchiroli": {
      "rainfall": 1500,
      "humidity": 27,
      "N-ratio": 1,
      "P-ratio": 1,
      "K-ratio": 1
    },
    "Gondia": {
      "rainfall": 1000,
      "humidity": 27.5,
      "N-ratio": 1,
      "P-ratio": 1,
      "K-ratio": 1
    },
    "Hingoli": {
      "rainfall": 700,
      "humidity": 29,
      "N-ratio": 1.5,
      "P-ratio": 1,
      "K-ratio": 1
    },
    "Jalgaon": {
      "rainfall": 600,
      "humidity": 28,
      "N-ratio": 1,
      "P-ratio": 1.5,
      "K-ratio": 1
    },
    "Jalna": {
      "rainfall": 625,
      "humidity": 28.5,
      "N-ratio": 1,
      "P-ratio": 1.5,
      "K-ratio": 1
    },
    "Kolhapur": {
      "rainfall": 1200,
      "humidity": 27.5,
      "N-ratio": 2,
      "P-ratio": 1,
      "K-ratio": 1
    },
    "Latur": {
      "rainfall": 600,
      "humidity": 29,
      "N-ratio": 1,
      "P-ratio": 2,
      "K-ratio": 1
    },
    "Mumbai city": {
      "rainfall": 2500,
      "humidity": 27,
      "N-ratio": 1,
      "P-ratio": 1,
      "K-ratio": 1
    },
    "Mumbai suburban": {
      "rainfall": 2300,
      "humidity": 27,
      "N-ratio": 1,
      "P-ratio": 1,
      "K-ratio": 1
    },
    "Nagpur": {
      "rainfall": 1150,
      "humidity": 28,
      "N-ratio": 1,
      "P-ratio": 1.5,
      "K-ratio": 1
    },
   "Nandurbar": {
      "rainfall": 600,
      "humidity": 26.5,
      "N-ratio": 1,
      "P-ratio": 1.5,
      "K-ratio": 1
    },
    "Nanded": {
      "rainfall": 750,
      "humidity": 29,
      "N-ratio": 1.5,
      "P-ratio": 1,
      "K-ratio": 1
    },
    "Nashik": {
      "rainfall": 650,
      "humidity": 27,
      "N-ratio": 1,
      "P-ratio": 1.5,
      "K-ratio": 1
    },
    "Osmanabad": {
      "rainfall": 650,
      "humidity": 29,
      "N-ratio": 1,
      "P-ratio": 2,
      "K-ratio": 1
    },
    "Palghar": {
      "rainfall": 2500,
      "humidity": 27.5,
      "N-ratio": 1,
      "P-ratio": 1,
      "K-ratio": 1
    },
    "Parbhani": {
      "rainfall": 725,
      "humidity": 29,
      "N-ratio": 1.5,
      "P-ratio": 1,
      "K-ratio": 1
    },
    "Pune": {
      "rainfall": 575,
      "humidity": 27.5,
      "N-ratio": 1.5,
      "P-ratio": 1,
      "K-ratio": 1
    },
    "Raigad": {
      "rainfall": 2500,
      "humidity": 26.5,
      "N-ratio": 1,
      "P-ratio": 1,
      "K-ratio": 1
    },
    "Ratnagiri": {
      "rainfall": 3500,
      "humidity": 26.5,
      "N-ratio": 2,
      "P-ratio": 1,
      "K-ratio": 1
    },
    "Sangli": {
      "rainfall": 750,
      "humidity": 28,
      "N-ratio": 1,
      "P-ratio": 1.5,
      "K-ratio": 1
    },
    "Satara": {
      "rainfall": 625,
      "humidity": 27.5,
      "N-ratio": 1,
      "P-ratio": 2,
      "K-ratio": 1
    },
    "Sindhudurg": {
      "rainfall": 4000,
      "humidity": 26.5,
      "N-ratio": 2,
      "P-ratio": 1,
      "K-ratio": 1
    },
    "Solapur": {
      "rainfall": 600,
      "humidity": 28.5,
      "N-ratio": 1,
      "P-ratio": 2,
      "K-ratio": 1
    },
    "Thane": {
      "rainfall": 2500,
      "humidity": 27,
      "N-ratio": 1,
      "P-ratio": 1,
      "K-ratio": 1
    },
    "Wardha": {
      "rainfall": 900,
      "humidity": 28,
      "N-ratio": 1,
      "P-ratio": 1.5,
      "K-ratio": 1
    },
    "Washim": {
      "rainfall": 700,
      "humidity": 28.5,
      "N-ratio": 1,
      "P-ratio": 2,
      "K-ratio": 1
    },
    "Yavatmal": {
      "rainfall": 850,
      "humidity": 28,
      "N-ratio": 1,
      "P-ratio": 1.5,
      "K-ratio": 1
    },
  
  }

  function getRainfall(district){
    if(districts[district]){
      return districts[district].rainfall;
    }
  }

  function getTemp(district){
    if(districts[district]){
      return districts[district].humidity;
    }
  }

  function toggleList() {
    listElement.style.display = listElement.style.display === 'block' ? 'none' : 'block';
  }

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

  /*        *****Graphical work*****       */ 

var ctx = document.getElementById("myChart").getContext("2d");

var myChart = new Chart(ctx,{

    type:"doughnut",
    data:{
        labels:["Nitrogen","Phosphorus","Potassium"],
        datasets:[{
            data:[1,1,1],
            label:"N:P:K Ratio",
            backgroundColor:["red","blue","yellow"],
        }]
    },

})