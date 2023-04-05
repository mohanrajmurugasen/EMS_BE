const mongoose = require("mongoose");

const PatientTreatmentDetailsSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    procedureStartTime: {
      type: String,
      required: true,
    },
    procedureType: {
      type: String,
      required: true,
    },
    procedureEndTime: {
      type: String,
      required: true,
    },
    deviceMethod: {
      type: String,
      required: true,
    },
    technicianID: {
      type: String,
      required: true,
    },
    deviceSize: {
      type: String,
      required: true,
    },
    outcome: {
      type: String,
      required: true,
    },
    successfull: {
      type: Number,
      required: true,
    },
    treatment: {
      type: Number,
      required: true,
    },
    totalTime: {
      type: Number,
      required: true,
    },
    treatmentType: {
      type: Number,
      required: true,
    },
    administrativeRoute: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const PatientTreatmentDetailsModel = mongoose.model(
  "PatientTreatmentDetail",
  PatientTreatmentDetailsSchema
);

module.exports = PatientTreatmentDetailsModel;
