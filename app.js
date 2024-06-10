require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./app/router");
// Appel du routeur
app.use(router);

// vu que j'utilise le moteur de template ejs, je le précise à express
app.set("view engine", "ejs");
// ! on reviendra la dessus pour parler de sécurité
app.set('views', 'app/views');

// middleware pour préciser que les fichiers statiques des requêtes devront être trouvé dans le dossier public
app.use(express.static("public"));

app.listen(process.env.PORT, () => {
    console.log(`Listening on PORT ${process.env.PORT}`);
    });
    