// pour créer un router il nous faut express et utiliser sa méthode router
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
res.render("home");
})

module.exports = router;