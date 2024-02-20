// const nome = document.querySelector("#name").value;
// const email = document.querySelector("#email").value;
const form = document.querySelector('#form')

fomr.addEventListener("submit", async () => {
  const data = {
    nome,
    email,
  };
  try{
    await axios.post('/', data)
  } catch(error) {
    console.log(error);
    
  }
});

// document.addEventListener("DOMContentLoaded", async (event) => {
//   const tableBody = document.querySelector("tbody");
//   const response = await axios.get("http://localhost:3000/");
//   response.data.forEach((user) => {
//     const row = tableBody.insertRow(-1);
//     row.insertCell(0).innerHTML = user.id;
//     row.insertCell(1).innerHTML = user.name;
//     row.insertCell(1).innerHTML = user.email;
//   });
// });
