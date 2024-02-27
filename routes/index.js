const express = require("express");
const app = express();
app.use(express.json())
const { PrismaClient } = require ('@prisma/client')
const prisma = new PrismaClient()

// GET 
app.get("/", async (req, res, next) => {
  res.render("index", { title: "Revisão | Formulario" });
});

app.get("/listar", async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
})
// POST
app.post("/", async (req, res, next) => {
  const { name, email } = req.body;
  try {
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
      },
    })  
    res.json(newUser)
  } catch (error) {

    console.error(error)
  }

});

app.listen(3000, () => {
  console.log("cu");
})
module.exports = app;
