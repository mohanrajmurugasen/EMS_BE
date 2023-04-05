const mongoose = require("mongoose");

const IncidentCallDetailsSchema = mongoose.Schema(
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
    incidentLocation: {
      type: String,
      required: true,
    },
    destinationDeterminant: {
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
    destinationLocation: {
      type: String,
      required: true,
    },
    servicePayment: {
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
  },
  {
    timestamps: true,
  }
);

const IncidentCallDetailsModel = mongoose.model(
  "IncidentCallDetail",
  IncidentCallDetailsSchema
);

module.exports = IncidentCallDetailsModel;
