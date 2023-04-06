const express = require("express");
const cors = require("cors");
const router = express.Router();
const IncidentCallDetails = require("../Models/IncidentCallDetails");
const nodemailer = require("nodemailer");

router.use(express.json());
router.use(cors());

const secretKey = process.env.SECRET_KEY;

let mailTransporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "mohanraj16119@gmail.com",
    pass: "gasejsgdepyylqoi",
  },
});

/**
 * @swagger
 * /api/IncidentCallDetails:
 *   post:
 *     tags:
 *       - IncidentCallDetails
 *     summary: Create a new IncidentCallDetails
 *     description: Create a new IncidentCallDetails with the given information
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *               serviceCode:
 *                 type: string
 *               serviceType:
 *                 type: string
 *               dateOfIncident:
 *                 type: string
 *               timeOfIncident:
 *                 type: string
 *               incidentLocation:
 *                 type: object
 *                 properties:
 *                     street:
 *                       type: string
 *                     city:
 *                       type: string
 *                     state:
 *                       type: string
 *                     postalCode:
 *                       type: string
 *               destinationDeterminant:
 *                 type: string
 *               graphicLocator:
 *                 type: string
 *               sceneLocationType:
 *                 type: string
 *               destinationFacility:
 *                 type: string
 *               sceneFacility:
 *                 type: string
 *               destinationLocationType:
 *                 type: string
 *               destinationLocation:
 *                 type: object
 *                 properties:
 *                     street:
 *                       type: string
 *                     city:
 *                       type: string
 *                     state:
 *                       type: string
 *                     postalCode:
 *                       type: string
 *               servicePayment:
 *                 type: object
 *                 properties:
 *                     responsibility:
 *                       type: string
 *                     number:
 *                       type: string
 *               EMS:
 *                 type: string
 *               patientDisposition:
 *                 type: string
 *     responses:
 *       201:
 *         description: IncidentCallDetails created successfully
 *       400:
 *         description: Invalid request body
 */
router.post("/IncidentCallDetails", async (req, res) => {
  const details = {
    userId: req.body.userId,
    serviceCode: req.body.serviceCode,
    serviceType: req.body.serviceType,
    dateOfIncident: req.body.dateOfIncident,
    timeOfIncident: req.body.timeOfIncident,
    incidentLocation: req.body.incidentLocation,
    destinationDeterminant: req.body.destinationDeterminant,
    graphicLocator: req.body.graphicLocator,
    sceneLocationType: req.body.sceneLocationType,
    destinationFacility: req.body.destinationFacility,
    sceneFacility: req.body.sceneFacility,
    destinationLocationType: req.body.destinationLocationType,
    destinationLocation: req.body.destinationLocation,
    servicePayment: req.body.servicePayment,
    EMS: req.body.EMS,
    patientDisposition: req.body.patientDisposition,
  };

  const newDetails = new IncidentCallDetails(details);
  newDetails.save((err, savedObject) => {
    if (err) throw err;

    res.status(201).send({
      message: "Your request is successfully submitted!",
      data: savedObject,
    });
  });
});

/**
 * @swagger
 * /api/IncidentCallDetails:
 *   get:
 *     tags:
 *       - IncidentCallDetails
 *     summary: Get all IncidentCallDetails
 *     description: Retrieve a list of all IncidentCallDetails
 *     responses:
 *       200:
 *         description: A list of IncidentCallDetails
 */
router.get("/IncidentCallDetails", (req, res) => {
  IncidentCallDetails.find({}, (err, result) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send({
        message: "Success",
        data: result,
      });
    }
  });
});

/**
 * @swagger
 * /api/IncidentCallDetailsByGraphicLocator/{graphicLocator}:
 *   get:
 *     tags:
 *       - IncidentCallDetails
 *     summary: Get a IncidentCallDetails by ID
 *     description: Retrieve a IncidentCallDetails's information by their ID
 *     parameters:
 *       - in: path
 *         name: graphicLocator
 *         required: true
 *         description: ID of the IncidentCallDetails to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: IncidentCallDetails found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 graphicLocator:
 *                   type: string
 *                   example: 12345
 *       404:
 *         description: IncidentCallDetails not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: IncidentCallDetails not found
 */
router.get(
  "/IncidentCallDetailsByGraphicLocator/:graphicLocator",
  (req, res) => {
    const graphicLocator = req.params.graphicLocator;
    IncidentCallDetails.find({ graphicLocator: graphicLocator })
      .then((response) => {
        res.status(200).send({
          message: "Success",
          data: response,
        });
      })
      .catch((err) => res.json(err.message));
  }
);

/**
 * @swagger
 * /api/IncidentCallDetailsById/{_id}:
 *   get:
 *     tags:
 *       - IncidentCallDetails
 *     summary: Get a IncidentCallDetails by ID
 *     description: Retrieve a IncidentCallDetails's information by their ID
 *     parameters:
 *       - in: path
 *         name: _id
 *         required: true
 *         description: ID of the IncidentCallDetails to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: IncidentCallDetails found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   example: 12345
 *       404:
 *         description: IncidentCallDetails not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: IncidentCallDetails not found
 */
router.get("/IncidentCallDetailsById/:_id", (req, res) => {
  const _id = req.params._id;
  IncidentCallDetails.find({ _id: _id })
    .then((response) => {
      res.status(200).send({
        message: "Success",
        data: response,
      });
    })
    .catch((err) => res.json(err.message));
});

/**
 * @swagger
 * /api/IncidentCallDetails/{_id}:
 *   put:
 *     summary: Update a IncidentCallDetails by ID
 *     description: Update a IncidentCallDetails's information by ID
 *     tags:
 *       - IncidentCallDetails
 *     parameters:
 *       - name: _id
 *         in: path
 *         description: ID of the IncidentCallDetails to update
 *         required: true
 *         type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               dateOfIncident:
 *                 type: string
 *               timeOfIncident:
 *                 type: string
 *               incidentLocation:
 *                 type: object
 *                 properties:
 *                     street:
 *                       type: string
 *                     city:
 *                       type: string
 *                     state:
 *                       type: string
 *                     postalCode:
 *                       type: string
 *     responses:
 *       200:
 *         description: IncidentCallDetails updated successfully
 *       400:
 *         description: Invalid IncidentCallDetails ID supplied or invalid IncidentCallDetails object
 *       404:
 *         description: IncidentCallDetails not found
 */
router.put("/IncidentCallDetails/:_id", (req, res) => {
  const _id = req.params._id;
  IncidentCallDetails.findById(_id, (err, result) => {
    if (!result) {
      res.status(400).send({
        message: "Unable to update data please try again!",
      });
    } else {
      (result.dateOfIncident = req.body.dateOfIncident),
        (result.timeOfIncident = req.body.timeOfIncident),
        (result.incidentLocation = req.body.incidentLocation),
        result
          .save()
          .then((user) => {
            res.status(200).send({
              message: "Updated Successfully",
            });
          })
          .catch((err) => {
            res.status(400).send({
              message: "Unable to update data please try again!",
            });
          });
    }
  });
});

/**
 * @swagger
 * info:
 *   title: My API
 *   description: This is a sample API for demonstration purposes.
 *   version: 1.0.0
 *
 * /api/DeleteIncidentCallDetailsById/{_id}:
 *   delete:
 *     tags:
 *       - IncidentCallDetails
 *     summary: Delete a IncidentCallDetails by ID
 *     description: Delete a IncidentCallDetails's information by their ID
 *     parameters:
 *       - in: path
 *         name: _id
 *         required: true
 *         description: ID of the IncidentCallDetails to delete
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: IncidentCallDetails deleted successfully
 *       404:
 *         description: IncidentCallDetails not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: IncidentCallDetails not found
 */
router.delete("/DeleteIncidentCallDetailsById/:_id", (req, res) => {
  const _id = req.params._id;
  IncidentCallDetails.findByIdAndRemove(_id, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

module.exports = router;
