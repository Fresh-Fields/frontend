const inputElement = document.getElementById('districtInput');
const listElement = document.getElementById('districtList');

  function toggleList() {
    listElement.style.display = listElement.style.display === 'block' ? 'none' : 'block';
  }

  function selectDistrict(district) {
    inputElement.value = district;
    inputElement.classList.add('selected');
    listElement.style.display = 'none';
    document.querySelector('.watermark').style.display = 'none'; // Hide watermark when a district is selected
    alert(`Selected District: ${district}`); // Show alert for the selected district
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


  /*        ****Graph Js****        */

  const graph_1 = document.getElementsByClassName('yield-data-graph');

  new Chart(graph_1, {
    type: 'line',
    data: {
      labels: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'],
      datasets: [{
        label: 'Yield/Hector',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
        backgroundColor: ["#FFCC1D"]
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  const graph_2 = document.getElementsByClassName('npk-data-graph');

  new Chart(graph_2, {
    type: 'line',
    data: {
      labels: ['January', 'February', 'March', 'April', 'May'],
      datasets: [{
        label: 'Nitrogen', // Changed from array to string
        data: [50, 60, 70, 80, 90],
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        fill: false
      }, {
        label: 'Phosphorus', // Changed from array to string
        data: [40, 50, 60, 70, 80],
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 2,
        fill: false
      }, {
        label: 'Potassium', // Changed from array to string
        data: [30, 40, 50, 60, 70],
        borderColor: 'rgba(255, 206, 86, 1)',
        borderWidth: 2,
        fill: false
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  