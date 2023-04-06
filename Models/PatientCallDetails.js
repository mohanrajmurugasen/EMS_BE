const mongoose = require("mongoose");

const PatientCallDetailsSchema = mongoose.Schema(
  {
    userId: {
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
    address: {
      street: String,
      city: String,
      state: String,
      country: String,
      postalCode: String,
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
    governmentInsurance: {
      insuranceId: String,
      coverageAmount: String,
      benefits: String,
    },
    privateInsurance: {
      insuranceId: String,
      benefits: String,
    },
    hospitalChart: {
      type: String,
      required: true,
    },
    comments: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const PatientCallDetailsModel = mongoose.model(
  "PatientCallDetail",
  PatientCallDetailsSchema
);

module.exports = PatientCallDetailsModel;
