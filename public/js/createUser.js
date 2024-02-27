// const form = document.querySelector("#form");

// form.addEventListener("submit", async (event) => {
//   event.preventDefault();
//   const name = form.name.value;
//   const email = form.email.value;

//   const data = {
//     name,
//     email,
//   };
//   console.log(data);
//   try {
//     await axios.post("/", data);
//   } catch (error) {
//     console.log(error);
//   }
// });

// document.addEventListener("DOMContentLoaded", async (event) => {
//   const tableBody = document.querySelector("tbody");
//   const response = await axios.get("http://localhost:3000/listar");
//   response.data.forEach((user) => {
//     const row = tableBody.insertRow(-1);
//     row.insertCell(0).innerHTML = user.id;
//     row.insertCell(1).innerHTML = user.name;
//     row.insertCell(2).innerHTML = user.email;
//   });
// });
