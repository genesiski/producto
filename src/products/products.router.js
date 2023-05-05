const router = require("express").Router();

//! const express = require('express')
//! const router = express.Router()

const productServices = require("./products.services");

// router.get('/users', userServices.getAllUsers)
// router.post('/users', userServices.postNewUser)

router.route("/")
  .get(productServices.getAllProducts)
  .post(productServices.postNewProduct);

// router.get('/users/:id', userServices.getUserById)
// router.patch('/users/:id', userServices.patchUser)
// router.delete('/users/:id', userServices.deleteUser)

router.route("/:id")
  .get(productServices.getProductById)
  .patch(productServices.patchProduct)
  .delete(productServices.deleteProduct);

module.exports = router;