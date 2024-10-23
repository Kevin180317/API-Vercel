// Importar el módulo express
const express = require("express");
const cors = require("cors");

// Crear una instancia de la aplicación Express
const app = express();
app.use(cors());

// Definir una ruta que maneje las solicitudes a la raíz
app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello from Render Express Server!" });
});

// Definir una ruta que maneje las solicitudes a /jujutsu-kaisen
app.get("/jujutsu-kaisen", (req, res) => {
  const characters = [
    {
      name: "Yuji Itadori",
      cursedTechnique: "Divergent Fist",
      type: "Hechicero",
      grade: "1",
      affiliation: "Tokyo Metropolitan Magic Technical College",
    },
    {
      name: "Megumi Fushiguro",
      cursedTechnique: "Ten Shadows Technique",
      type: "Hechicero",
      grade: "2",
      affiliation: "Tokyo Metropolitan Magic Technical College",
    },
    {
      name: "Nobara Kugisaki",
      cursedTechnique: "Straw Doll Technique",
      type: "Hechicero",
      grade: "3",
      affiliation: "Tokyo Metropolitan Magic Technical College",
    },
    {
      name: "Satoru Gojo",
      cursedTechnique: "Limitless",
      type: "Hechicero",
      grade: "Especial",
      affiliation: "Tokyo Metropolitan Magic Technical College",
    },
    {
      name: "Sukuna",
      cursedTechnique: "Malevolent Shrine",
      type: "Maldición",
      grade: "Especial",
      affiliation: "N/A",
    },
    {
      name: "Maki Zenin",
      cursedTechnique: "Heavenly Restriction",
      type: "Hechicero",
      grade: "4",
      affiliation: "Tokyo Metropolitan Magic Technical College",
    },
    {
      name: "Toge Inumaki",
      cursedTechnique: "Cursed Speech",
      type: "Hechicero",
      grade: "2",
      affiliation: "Tokyo Metropolitan Magic Technical College",
    },
    {
      name: "Panda",
      cursedTechnique: "Gorilla Mode",
      type: "Hechicero",
      grade: "2",
      affiliation: "Tokyo Metropolitan Magic Technical College",
    },
    {
      name: "Kento Nanami",
      cursedTechnique: "Ratio Technique",
      type: "Hechicero",
      grade: "1",
      affiliation: "Tokyo Metropolitan Magic Technical College",
    },
    {
      name: "Mahito",
      cursedTechnique: "Idle Transfiguration",
      type: "Maldición",
      grade: "Especial",
      affiliation: "N/A",
    },
    {
      name: "Jogo",
      cursedTechnique: "Disaster Flames",
      type: "Maldición",
      grade: "Especial",
      affiliation: "N/A",
    },
    {
      name: "Hanami",
      cursedTechnique: "Disaster Plants",
      type: "Maldición",
      grade: "Especial",
      affiliation: "N/A",
    },
    {
      name: "Dagon",
      cursedTechnique: "Disaster Tides",
      type: "Maldición",
      grade: "Especial",
      affiliation: "N/A",
    },
    {
      name: "Aoi Todo",
      cursedTechnique: "Boogie Woogie",
      type: "Hechicero",
      grade: "1",
      affiliation: "Kyoto Metropolitan Magic Technical College",
    },
    {
      name: "Mai Zenin",
      cursedTechnique: "Construction",
      type: "Hechicero",
      grade: "3",
      affiliation: "Kyoto Metropolitan Magic Technical College",
    },
    {
      name: "Noritoshi Kamo",
      cursedTechnique: "Blood Manipulation",
      type: "Hechicero",
      grade: "2",
      affiliation: "Kyoto Metropolitan Magic Technical College",
    },
    {
      name: "Choso",
      cursedTechnique: "Blood Manipulation",
      type: "Maldición",
      grade: "Especial",
      affiliation: "N/A",
    },
    {
      name: "Yuta Okkotsu",
      cursedTechnique: "Rika Orimoto",
      type: "Hechicero",
      grade: "Especial",
      affiliation: "Tokyo Metropolitan Magic Technical College",
    },
    {
      name: "Suguru Geto",
      cursedTechnique: "Cursed Spirit Manipulation",
      type: "Hechicero",
      grade: "Especial",
      affiliation: "N/A",
    },
    {
      name: "Kasumi Miwa",
      cursedTechnique: "New Shadow Style",
      type: "Hechicero",
      grade: "3",
      affiliation: "Kyoto Metropolitan Magic Technical College",
    },
    {
      name: "Kokichi Muta",
      cursedTechnique: "Puppet Manipulation",
      type: "Hechicero",
      grade: "2",
      affiliation: "Kyoto Metropolitan Magic Technical College",
    },
    {
      name: "Mei Mei",
      cursedTechnique: "Black Bird Manipulation",
      type: "Hechicero",
      grade: "1",
      affiliation: "N/A",
    },
    {
      name: "Utahime Iori",
      cursedTechnique: "Unknown",
      type: "Hechicero",
      grade: "Semi-1",
      affiliation: "Kyoto Metropolitan Magic Technical College",
    },
    {
      name: "Yoshinobu Gakuganji",
      cursedTechnique: "Electric Guitar",
      type: "Hechicero",
      grade: "1",
      affiliation: "Kyoto Metropolitan Magic Technical College",
    },
    {
      name: "Shoko Ieiri",
      cursedTechnique: "Reverse Cursed Technique",
      type: "Hechicero",
      grade: "1",
      affiliation: "Tokyo Metropolitan Magic Technical College",
    },
  ];
  res.status(200).json(characters);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
