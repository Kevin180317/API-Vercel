// Importar el módulo express
const express = require("express");

// Crear una instancia de la aplicación Express
const app = express();

// Definir una ruta que maneje las solicitudes a la raíz
app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello from Vercel Serverless Function!" });
});

// Definir una ruta que maneje las solicitudes a /jujutsu-kaisen
app.get("/jujutsu-kaisen", (req, res) => {
  const characters = [
    {
      name: "Yuji Itadori",
      cursedTechnique: "Divergent Fist",
      type: "Hechicero",
    },
    {
      name: "Megumi Fushiguro",
      cursedTechnique: "Ten Shadows Technique",
      type: "Hechicero",
    },
    {
      name: "Nobara Kugisaki",
      cursedTechnique: "Straw Doll Technique",
      type: "Hechicero",
    },
    { name: "Satoru Gojo", cursedTechnique: "Limitless", type: "Hechicero" },
    { name: "Sukuna", cursedTechnique: "Malevolent Shrine", type: "Maldición" },
    {
      name: "Maki Zenin",
      cursedTechnique: "Heavenly Restriction",
      type: "Hechicero",
    },
    {
      name: "Toge Inumaki",
      cursedTechnique: "Cursed Speech",
      type: "Hechicero",
    },
    { name: "Panda", cursedTechnique: "Gorilla Mode", type: "Hechicero" },
    {
      name: "Kento Nanami",
      cursedTechnique: "Ratio Technique",
      type: "Hechicero",
    },
    {
      name: "Mahito",
      cursedTechnique: "Idle Transfiguration",
      type: "Maldición",
    },
    { name: "Jogo", cursedTechnique: "Disaster Flames", type: "Maldición" },
    { name: "Hanami", cursedTechnique: "Disaster Plants", type: "Maldición" },
    { name: "Dagon", cursedTechnique: "Disaster Tides", type: "Maldición" },
    { name: "Aoi Todo", cursedTechnique: "Boogie Woogie", type: "Hechicero" },
    { name: "Mai Zenin", cursedTechnique: "Construction", type: "Hechicero" },
    {
      name: "Noritoshi Kamo",
      cursedTechnique: "Blood Manipulation",
      type: "Hechicero",
    },
    { name: "Choso", cursedTechnique: "Blood Manipulation", type: "Maldición" },
    {
      name: "Yuta Okkotsu",
      cursedTechnique: "Rika Orimoto",
      type: "Hechicero",
    },
    {
      name: "Suguru Geto",
      cursedTechnique: "Cursed Spirit Manipulation",
      type: "Hechicero",
    },
    {
      name: "Kasumi Miwa",
      cursedTechnique: "New Shadow Style",
      type: "Hechicero",
    },
  ];
  res.status(200).json(characters);
});

app.listen(3001, () => console.log("Server ready on port 3001."));

module.exports = app;
