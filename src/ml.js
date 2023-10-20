import yield_data from '/src/yield.json';
import rec_data from '/src/rec.json';
import sample_rec_data from '/src/sample.crop.rec.json'

let rec_form = document.querySelector("#crop-recommendation-grid");
let yield_form = document.querySelector("#yield-production-grid");

let N = rec_form.querySelector("#nitrogen");
let P = rec_form.querySelector("#phosphorus");
let K = rec_form.querySelector("#potassium");

let temp_rec = rec_form.querySelector("#temperature");
let humidity = rec_form.querySelector("#humidity");
let pH = rec_form.querySelector("#ph");
let rainfall = rec_form.querySelector("#rainfall");

let crop = yield_form.querySelector("#crop");
let pesticides = yield_form.querySelector("#pesticides");
let temp_yield = yield_form.querySelector("#temperature");

let popup = document.querySelector(".result");

let popup_label = popup.querySelector(".popup-content")


let randomProperty = obj => {
  const keys = Object.keys(obj);
  return obj[keys[keys.length * Math.random() << 0]];
}

// populate `select`
yield_data.crops.forEach((e, i) => {
  let option = document.createElement("option");
  option.value = i;
  option.innerText = e;
  crop.appendChild(option);
});

/// setup autofill ///
rec_form.querySelector(".data-button").onclick = () => {
  let data = randomProperty(sample_rec_data);

  // NPK content
  N.value = data["N"];
  P.value = data["P"];
  K.value = data["K"];

  temp_rec.value = data["temperature"];
  humidity.value = data["humidity"];
  pH.value = data["ph"];
  rainfall.value = data["rainfall"];
}

yield_form.querySelector(".data-button").onclick = () => {
  crop.value = ~~(Math.random() * yield_data.crops.length).toString();
  pesticides.value = 15_000 + Math.random() * 50_000;
  temp_yield.value = 23 + Math.random() * 6;
}


rec_form.querySelector(".report-button").onclick = () => {
  let res = fetch("/recommend", {
    method: "POST",
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      data: [
        parseFloat(N.value / (N.value + P.value + K.value)),
        parseFloat(P.value / (N.value + P.value + K.value)),
        parseFloat(K.value / (N.value + P.value + K.value)),
        parseFloat(temp_rec.value),
        parseFloat(humidity.value),
        parseFloat(pH.value),
        parseFloat(rainfall.value),
      ]
    })
  }
  ).then((res) => res.json()
  ).then((data) => {
    let res = data["response"];
    popup_label.innerHTML = `Recommended crop: <h2>${rec_data.crops[res]}</h2>`
    popup.classList.remove("hidden");
  });
}

yield_form.querySelector(".report-button").onclick = () => {
  let res = fetch("/yield", {
    method: "POST",
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      data: [
        parseInt(crop.value),
        parseFloat(pesticides.value),
        parseFloat(temp_yield.value),
      ]
    })
  }
  ).then((res) => res.json()
  ).then((data) => {
    let res = data["response"];
    popup_label.innerHTML = `Predicted yield: <h2>${res.toFixed(3)}</h2> ton/hectare`;
    popup.classList.remove("hidden");
  });
}

popup.onclick = () => {
  popup.classList.add("hidden");
}