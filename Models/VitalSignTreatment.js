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
      type: Number,
      required: true,
    },
    bloodPressure: [Object],
    respiration: {
      type: Number,
      required: true,
    },
    bloodGlucose: {
      type: Number,
      required: true,
    },
    oxygenSaturation: [Object],
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
