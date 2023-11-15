const express = require('express')
const {affiche, addPanier, suppPanier, affichePanier}=require('./controlleur');
const sendMail = require('./email');
const routes = express.Router();

module.exports= routes

routes.get("/produits", affiche)
routes.post("/sendMail", sendMail)
routes.post("/addproduits", addPanier)

routes.put('/suppProduit', suppPanier)

routes.get('/afficheProduit', affichePanier)