const mongoose = require("mongoose");

const VitalSignTreatmentsSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    assessmentTime: {
      type: String,
      required: true,
    },
    consciousnessLevel: {
      type: String,
      required: true,
    },
    pulseRate: {
      type: String,
      required: true,
    },
    siteOfPulseCheck: {
      type: String,
      required: true,
    },
    temperature: {
      type: String,
      required: true,
    },
    siteOfTemperatureCheck: {
      type: String,
      required: true,
    },
    skinColor: {
      type: String,
      required: true,
    },
    moisture: {
      type: String,
      required: true,
    },
    bloodPressure: {
      systolic: String,
      diastolic: String,
    },
    respiration: {
      type: String,
      required: true,
    },
    bloodGlucose: {
      type: String,
      required: true,
    },
    oxygenSaturation: {
      preOxygen: String,
      postOxygen: String,
    },
  },
  {
    timestamps: true,
  }
);

const VitalSignTreatmentsModel = mongoose.model(
  "VitalSignTreatment",
  VitalSignTreatmentsSchema
);

module.exports = VitalSignTreatmentsModel;
