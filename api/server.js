// Importar el módulo express
const express = require("express");

// Crear una instancia de la aplicación Express
const app = express();

// Definir una ruta que maneje las solicitudes a la raíz
app.get("/test", (req, res) => {
  res.status(200).json({ message: "Hello from Vercel Serverless Function!" });
});

// Definir una ruta que maneje las solicitudes a /jujutsu-kaisen
app.get("/jujutsu-kaisen", (req, res) => {
  const characters = [
    { name: "Yuji Itadori", cursedTechnique: "Divergent Fist" },
    { name: "Megumi Fushiguro", cursedTechnique: "Ten Shadows Technique" },
    { name: "Nobara Kugisaki", cursedTechnique: "Straw Doll Technique" },
    { name: "Satoru Gojo", cursedTechnique: "Limitless" },
    { name: "Sukuna", cursedTechnique: "Malevolent Shrine" },
  ];
  res.status(200).json(characters);
});

// Exportar la aplicación para que Vercel pueda manejarla
module.exports = app;
