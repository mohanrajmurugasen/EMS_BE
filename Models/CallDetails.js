const mongoose = require("mongoose");

const CallDetailsSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    serviceCode: {
      type: String,
      required: true,
    },
    serviceType: {
      type: String,
      required: true,
    },
    dateOfIncident: {
      type: String,
      required: true,
    },
    timeOfIncident: {
      type: String,
      required: true,
    },
    incidentLocation_street: {
      type: String,
      required: true,
    },
    incidentLocation_city: {
      type: String,
      required: true,
    },
    incidentLocation_state: {
      type: String,
      required: true,
    },
    incidentLocation_postalCode: {
      type: String,
      required: true,
    },
    incident_destinationDeterminant: {
      type: String,
      required: true,
    },
    graphicLocator: {
      type: String,
      required: true,
    },
    sceneLocationType: {
      type: String,
      required: true,
    },
    destinationFacility: {
      type: String,
      required: true,
    },
    sceneFacility: {
      type: String,
      required: true,
    },
    destinationLocationType: {
      type: String,
      required: true,
    },
    destinationLocation_street: {
      type: String,
      required: true,
    },
    destinationLocation_city: {
      type: String,
      required: true,
    },
    destinationLocation_state: {
      type: String,
      required: true,
    },
    destinationLocation_postalCode: {
      type: String,
      required: true,
    },
    responsibility: {
      type: String,
      required: true,
    },
    number: {
      type: String,
      required: true,
    },
    EMS: {
      type: String,
      required: true,
    },
    patientDisposition: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    sureName: {
      type: String,
      required: true,
    },
    street: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    postalCode: {
      type: String,
      required: true,
    },
    telePhone: {
      type: String,
      required: true,
    },
    DOB: {
      type: String,
      required: true,
    },
    age: {
      type: String,
      required: false,
    },
    gender: {
      type: String,
      required: false,
    },
    aadhar: {
      type: String,
      required: false,
    },
    medicalInsurance: {
      type: String,
      required: true,
    },
    typeOfInsurance: {
      type: String,
      required: false,
    },
    governmentInsurance_insuranceId: {
      type: String,
      required: false,
    },
    governmentInsurance_coverageAmount: {
      type: String,
      required: false,
    },
    governmentInsurance_benefits: {
      type: String,
      required: false,
    },
    privateInsurance_insuranceId: {
      type: String,
      required: false,
    },
    privateInsurance_benefits: {
      type: String,
      required: false,
    },
    hospitalChart: {
      type: String,
      required: true,
    },
    comments: {
      type: String,
      required: true,
    },

    timeNotified: {
      type: String,
      required: true,
    },
    timeEnroute: {
      type: String,
      required: true,
    },
    timeAtScene: {
      type: String,
      required: true,
    },
    crewPatient: {
      type: String,
      required: true,
    },
    timeOutScene: {
      type: String,
      required: true,
    },
    timeAtDestination: {
      type: String,
      required: true,
    },
    available: {
      type: String,
      required: true,
    },
    backArea: {
      type: String,
      required: true,
    },
    responseToScene: {
      type: String,
      required: true,
    },
    responseFromScene: {
      type: String,
      required: true,
    },
    crewType: {
      type: String,
      required: true,
    },
    mileage: {
      type: String,
      required: true,
    },
    patientContact: {
      type: String,
      required: true,
    },
    vehicle_destinationDeterminant: {
      type: String,
      required: true,
    },
    startDate: {
      type: String,
      required: false,
    },
    endDate: {
      type: String,
      required: false,
    },
    dateModified: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const CallDetailsModel = mongoose.model(
  "CallDetail",
  CallDetailsSchema
);

module.exports = CallDetailsModel;
