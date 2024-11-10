const express = require("express");
const User = require("../Models/userModel");
const Router = express.Router();

Router.post("/", async (req, res) => {
    const { name, email, age } = req.body;
    try {
      const userAdded = await User.create({
        name: name,
        email: email,
        age: age
      });
      res.status(201).json(userAdded);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  
  Router.get("/", async (req, res) => {
    try {
      const showData = await User.find();
      res.status(201).json(showData);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  // single user
  Router.get("/:id", async (req, res) => {
    const id = req.params.id;
    try {
      const singleUser = await User.findById({_id:id});
      res.status(201).json(singleUser);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });


  //delete user

  Router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    try {
      const deleteUser = await User.findByIdAndDelete({_id:id});
      res.status(201).json(deleteUser);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  //put/Patch

  Router.patch("/:id", async (req, res) => {
    const id = req.params.id;
    try {
      const UpdateUser = await User.findByIdAndUpdate(id, req.body, {new:true});
      res.status(201).json(UpdateUser);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });






  module.exports = Router;