const express = require("express");
const cors = require("cors");
const router = express.Router();
const userModel = require("../Models/Users");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const Validation = require("../Auth/Validation");

router.use(express.json());
router.use(cors());

process.env.SECRET_KEY = "Users";

/**
 * @swagger
 * /api/Users:
 *   post:
 *     tags:
 *       - Authentication
 *     summary: Create a new Users
 *     description: Create a new Users with the given information
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userName:
 *                 type: string
 *               email:
 *                 type: string
 *               phone:
 *                 type: string
 *               password:
 *                 type: string
 *               status:
 *                 type: string
 *               userType:
 *                 type: string
 *     responses:
 *       201:
 *         description: Users created successfully
 *       400:
 *         description: Invalid request body
 */
router.post("/Users", async (req, res) => {
  const users = {
    userName: req.body.userName,
    email: req.body.email,
    phone: req.body.phone,
    password: req.body.password,
    status: "Active",
    userType: req.body.userType,
  };

  userModel.findOne({ email: req.body.email }, (err, result) => {
    if (!result) {
      bcrypt.hash(req.body.password, 10, async (errs, hash) => {
        users.password = hash;
        let token = jwt.sign(users.userName, process.env.SECRET_KEY);

        const newUser = new userModel(users);
        await newUser.save();

        res.status(200).send({
          message: "Success",
          data: { token, newUser },
        });
      });
    } else {
      res.status(400).send({
        message: "Email already exists!",
      });
    }
  });
});

/**
 * @swagger
 * /api/UsersLogin:
 *   post:
 *     summary: Logs in a user.
 *     description: Logs in a user with the provided email and password.
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 description: The user's email address.
 *               password:
 *                 type: string
 *                 format: password
 *                 description: The user's password.
 *             required:
 *               - email
 *               - password
 *     responses:
 *       '200':
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: A JSON Web Token (JWT) used to authenticate future requests.
 */
router.post("/UsersLogin", (req, res) => {
  const { email, password } = req.body;
  userModel.findOne({ email: email }, (err, result) => {
    console.log(result, password);
    if (result) {
      if (bcrypt.compareSync(password, result.password)) {
        let token = jwt.sign(result.userName, process.env.SECRET_KEY);

        res.status(200).send({
          status: "Success",
          message: "Logged in successfully!",
          data: { result, token },
        });
      } else {
        res.send({
          status: "error",
          message: "Incorrect password !",
          data: [],
        });
      }
    } else {
      res.send({
        status: "error",
        message: "Incorrect email !",
        data: [],
      });
    }
  });
});

/**
 * @swagger
 * /api/Users:
 *   get:
 *     tags:
 *       - Authentication
 *     summary: Get all users
 *     description: Retrieve a list of all users
 *     responses:
 *       200:
 *         description: A list of users
 */
router.get("/Users", (req, res) => {
  userModel.find({}, (err, result) => {
    if (err) {
      res.status(400).send({
        message: "Failure",
        data: err,
      });
    } else {
      res.status(200).send({
        message: "Successs",
        data: result,
      });
    }
  });
});

router.get("/UsersById/:id", Validation, (req, res) => {
  const id = req.params.id;
  jwt.verify(req.token, "Users", async (err, data) => {
    if (err) {
      res.status(400).send({
        message: "Failure",
        data: err,
      });
    } else {
      userModel.findById(id, (err, result) => {
        if (err) {
          res.status(400).send({
            message: "Failure",
            data: err,
          });
        } else {
          res.status(200).send({
            message: "Successs",
            data: result,
          });
        }
      });
    }
  });
});

router.get("/UsersByEmail/:email", (req, res) => {
  const email = req.params.email;
  userModel
    .find({ email: email })
    .then((response) => {
      res.status(200).send({
        message: "Success",
        data: response,
      });
    })
    .catch((err) =>
      res.status(400).send({
        message: "Failure",
        data: err,
      })
    );
});

/**
 * @swagger
 * /api/UpdateUsersById/{_id}:
 *   put:
 *     summary: Update a user by ID
 *     description: Update a user's information by ID
 *     tags:
 *       - Authentication
 *     parameters:
 *       - name: _id
 *         in: path
 *         description: ID of the user to update
 *         required: true
 *         type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userName:
 *                 type: string
 *               email:
 *                 type: string
 *               phone:
 *                 type: string
 *               password:
 *                 type: string
 *               userType:
 *                 type: string
 *     responses:
 *       200:
 *         description: User updated successfully
 *       400:
 *         description: Invalid user ID supplied or invalid user object
 *       404:
 *         description: User not found
 */
router.put("/UpdateUsersById/:_id", (req, res) => {
  const _id = req.params._id;
  userModel.findById(_id, (err, result) => {
    if (!result) {
      res.status(400).send({
        message: "Please register first!",
        data: err,
      });
    } else {
      result.userName = req.body.userName;
      result.phone = req.body.phone;
      result.password = req.body.password;
      result.email = req.body.email;
      result.userType = req.body.userType;

      result
        .save()
        .then((user) => {
          res.status(200).send({
            message: "Updated Successfully",
            data: user,
          });
        })
        .catch((err) => {
          res.status(400).send({
            message: "Unable to update data please try again!",
            data: err,
          });
        });
    }
  });
});

router.delete("/DeleteUsersById/:id", (req, res) => {
  const id = req.params.id;
  userModel.findByIdAndRemove(id, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

module.exports = router;
