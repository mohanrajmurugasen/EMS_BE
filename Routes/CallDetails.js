const express = require("express");
const cors = require("cors");
const router = express.Router();
const CallDetails = require("../Models/CallDetails");
const nodemailer = require("nodemailer");

router.use(express.json());
router.use(cors());

const secretKey = process.env.SECRET_KEY;

let mailTransporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "mohanraj16119@gmail.com",
    pass: "zywfxadkscwqyadl",
  },
});

/**
 * @swagger
 * /api/CallDetails:
 *   post:
 *     tags:
 *       - CallDetails
 *     summary: Create a new CallDetails
 *     description: Create a new CallDetails with the given information
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
 *               incidentLocation_street:
 *                 type: string
 *               incidentLocation_city:
 *                 type: string
 *               incidentLocation_state:
 *                 type: string
 *               incidentLocation_postalCode:
 *                 type: string
 *               incident_destinationDeterminant:
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
 *               destinationLocation_street:
 *                 type: string
 *               destinationLocation_city:
 *                 type: string
 *               destinationLocation_state:
 *                 type: string
 *               destinationLocation_postalCode:
 *                 type: string
 *               responsibility:
 *                 type: string
 *               number:
 *                 type: string
 *               EMS:
 *                 type: string
 *               patientDisposition:
 *                 type: string
 *               firstName:
 *                 type: string
 *               sureName:
 *                 type: string
 *               street:
 *                 type: string
 *               city:
 *                 type: string
 *               state:
 *                 type: string
 *               country:
 *                 type: string
 *               postalCode:
 *                 type: string
 *               telePhone:
 *                 type: string
 *               DOB:
 *                 type: string
 *               age:
 *                 type: string
 *               gender:
 *                 type: string
 *               aadhar:
 *                 type: string
 *               medicalInsurance:
 *                 type: string
 *               typeOfInsurance:
 *                 type: string
 *               governmentInsurance_insuranceId:
 *                 type: string
 *               governmentInsurance_coverageAmount:
 *                 type: string
 *               governmentInsurance_benefits:
 *                 type: string
 *               privateInsurance_insuranceId:
 *                 type: string
 *               privateInsurance_benefits:
 *                 type: string
 *               hospitalChart:
 *                 type: string
 *               comments:
 *                 type: string
 *               timeNotified:
 *                 type: string
 *               timeEnroute:
 *                 type: string
 *               timeAtScene:
 *                 type: string
 *               crewPatient:
 *                 type: string
 *               timeOutScene:
 *                 type: string
 *               timeAtDestination:
 *                 type: string
 *               available:
 *                 type: string
 *               backArea:
 *                 type: string
 *               responseToScene:
 *                 type: string
 *               responseFromScene:
 *                 type: string
 *               crewType:
 *                 type: string
 *               mileage:
 *                 type: string
 *               patientContact:
 *                 type: string
 *               vehicle_destinationDeterminant:
 *                 type: string
 *               startDate:
 *                 type: string
 *               endDate:
 *                 type: string
 *               dateModified:
 *                 type: string
 * 
 *               email1:
 *                 type: string
 *               email2:
 *                 type: string
 *     responses:
 *       201:
 *         description: CallDetails created successfully
 *       400:
 *         description: Invalid request body
 */
router.post("/CallDetails", async (req, res) => {
  const details = {
    userId: req.body.userId,
    serviceCode: req.body.serviceCode,
    serviceType: req.body.serviceType,
    dateOfIncident: req.body.dateOfIncident,
    timeOfIncident: req.body.timeOfIncident,
    incidentLocation_street: req.body.incidentLocation_street,
    incidentLocation_city: req.body.incidentLocation_city,
    incidentLocation_state: req.body.incidentLocation_state,
    incidentLocation_postalCode: req.body.incidentLocation_postalCode,
    incident_destinationDeterminant: req.body.incident_destinationDeterminant,
    graphicLocator: req.body.graphicLocator,
    sceneLocationType: req.body.sceneLocationType,
    destinationFacility: req.body.destinationFacility,
    sceneFacility: req.body.sceneFacility,
    destinationLocationType: req.body.destinationLocationType,
    destinationLocation_street: req.body.destinationLocation_street,
    destinationLocation_city: req.body.destinationLocation_city,
    destinationLocation_state: req.body.destinationLocation_state,
    destinationLocation_postalCode: req.body.destinationLocation_postalCode,
    responsibility: req.body.responsibility,
    number: req.body.number,
    EMS: req.body.EMS,
    patientDisposition: req.body.patientDisposition,
    firstName: req.body.firstName,
    sureName: req.body.sureName,
    street: req.body.street,
    city: req.body.city,
    state: req.body.state,
    country: req.body.country,
    postalCode: req.body.postalCode,
    telePhone: req.body.telePhone,
    DOB: req.body.DOB,
    age: req.body.age,
    gender: req.body.gender,
    aadhar: req.body.aadhar,
    medicalInsurance: req.body.medicalInsurance,
    typeOfInsurance: req.body.typeOfInsurance,
    governmentInsurance_insuranceId: req.body.governmentInsurance_insuranceId,
    governmentInsurance_coverageAmount:
      req.body.governmentInsurance_coverageAmount,
    governmentInsurance_benefits: req.body.governmentInsurance_benefits,
    privateInsurance_insuranceId: req.body.privateInsurance_insuranceId,
    privateInsurance_benefits: req.body.privateInsurance_benefits,
    hospitalChart: req.body.hospitalChart,
    comments: req.body.comments,
    timeNotified: req.body.timeNotified,
    timeEnroute: req.body.timeEnroute,
    timeAtScene: req.body.timeAtScene,
    crewPatient: req.body.crewPatient,
    timeOutScene: req.body.timeOutScene,
    timeAtDestination: req.body.timeAtDestination,
    available: req.body.available,
    backArea: req.body.backArea,
    responseToScene: req.body.responseToScene,
    responseFromScene: req.body.responseFromScene,
    crewType: req.body.crewType,
    mileage: req.body.mileage,
    patientContact: req.body.patientContact,
    vehicle_destinationDeterminant: req.body.vehicle_destinationDeterminant,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    dateModified: req.body.dateModified,
  };

  let mails = {
    from: "mohanraj16119@gmail.com",
    to: `${req.body.email2}, ${req.body.email1}`,
    subject: `Subject`,
    text: `Text Message`,
  };

  const newDetails = new CallDetails(details);
  newDetails.save((err, savedObject) => {
    if (err) throw err;

    mailTransporter.sendMail(mails, (err) => {
      if (err) {
        console.log(err);
        res.status(500).send("Email sending failed!");
      } else {
        console.log("Email send successsfully");
        res.status(201).send({
          message: "Your request is successfully submitted!",
          data: savedObject,
        });
      }
    });
  });
});

/**
 * @swagger
 * /api/CallDetails:
 *   get:
 *     tags:
 *       - CallDetails
 *     summary: Get all CallDetails
 *     description: Retrieve a list of all CallDetails
 *     responses:
 *       200:
 *         description: A list of CallDetails
 */
router.get("/CallDetails", (req, res) => {
  CallDetails.find()
    .sort({ createdAt: -1 })
    .then((response) => {
      res.status(200).send({
        message: "Success",
        data: response,
      });
    })
    .catch((err) => res.status(400).send(err));
});

/**
 * @swagger
 * /api/CallDetailsByGraphicLocator/{graphicLocator}:
 *   get:
 *     tags:
 *       - CallDetails
 *     summary: Get a CallDetails by ID
 *     description: Retrieve a CallDetails's information by their ID
 *     parameters:
 *       - in: path
 *         name: graphicLocator
 *         required: true
 *         description: ID of the CallDetails to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: CallDetails found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 graphicLocator:
 *                   type: string
 *                   example: 12345
 *       404:
 *         description: CallDetails not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: CallDetails not found
 */
router.get(
  "/CallDetailsByGraphicLocator/:graphicLocator",
  (req, res) => {
    const graphicLocator = req.params.graphicLocator;
    CallDetails.find({ graphicLocator: graphicLocator })
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
 * /api/CallDetailsById/{_id}:
 *   get:
 *     tags:
 *       - CallDetails
 *     summary: Get a CallDetails by ID
 *     description: Retrieve a CallDetails's information by their ID
 *     parameters:
 *       - in: path
 *         name: _id
 *         required: true
 *         description: ID of the CallDetails to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: CallDetails found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   example: 12345
 *       404:
 *         description: CallDetails not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: CallDetails not found
 */
router.get("/CallDetailsById/:_id", (req, res) => {
  const _id = req.params._id;
  CallDetails.find({ _id: _id })
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
 * /api/CallDetails/{_id}:
 *   put:
 *     summary: Update a CallDetails by ID
 *     description: Update a CallDetails's information by ID
 *     tags:
 *       - CallDetails
 *     parameters:
 *       - name: _id
 *         in: path
 *         description: ID of the CallDetails to update
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
 *     responses:
 *       200:
 *         description: CallDetails updated successfully
 *       400:
 *         description: Invalid CallDetails ID supplied or invalid CallDetails object
 *       404:
 *         description: CallDetails not found
 */
router.put("/CallDetails/:_id", (req, res) => {
  const _id = req.params._id;
  CallDetails.findById(_id, (err, result) => {
    if (!result) {
      res.status(400).send({
        message: "Unable to update data please try again!",
      });
    } else {
      (result.dateOfIncident = req.body.dateOfIncident),
        (result.timeOfIncident = req.body.timeOfIncident),
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
 * /api/DeleteCallDetailsById/{_id}:
 *   delete:
 *     tags:
 *       - CallDetails
 *     summary: Delete a CallDetails by ID
 *     description: Delete a CallDetails's information by their ID
 *     parameters:
 *       - in: path
 *         name: _id
 *         required: true
 *         description: ID of the CallDetails to delete
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: CallDetails deleted successfully
 *       404:
 *         description: CallDetails not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: CallDetails not found
 */
router.delete("/DeleteCallDetailsById/:_id", (req, res) => {
  const _id = req.params._id;
  CallDetails.findByIdAndRemove(_id, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

module.exports = router;
