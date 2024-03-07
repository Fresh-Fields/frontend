export let login = async (data) => fetch("/login", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
}).then(res => res.json())
  .then(data => data)
  .catch(_ => -1);
