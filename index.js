const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Users = require("./Routes/Users");
const IncidentCallDetails = require("./Routes/IncidentCallDetails");
const PatientAssessment = require("./Routes/PatientAssessment");
const PatientCallDetails = require("./Routes/PatientCallDetails");
const PatientTreatmentDetails = require("./Routes/PatientTreatmentDetails");
const PrimaryAssessment = require("./Routes/PrimaryAssessment");
const VehicleCallDetails = require("./Routes/VehicleCallDetails");
const VitalSignTreatment = require("./Routes/VitalSignTreatment");
require("dotenv").config();
const swaggerUi = require("swagger-ui-express");
const specs = require("./swagger");

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(
  "mongodb+srv://nandhinirs93:WEsjx0ArshoJyWgh@ems.mzuk7az.mongodb.net/EMS?retryWrites=true&w=majority"
);

// Group the endpoints under their respective headings
const options = {
  swaggerOptions: {
    tagsSorter: "alpha",
    operationsSorter: "alpha",
  },
};

// Add Swagger middleware
app.use("/EMS-Swagger-API", swaggerUi.serve, swaggerUi.setup(specs));

app.use("/api", Users);
app.use("/api", IncidentCallDetails);
app.use("/api", PatientAssessment);
app.use("/api", PatientCallDetails);
app.use("/api", PatientTreatmentDetails);
app.use("/api", PrimaryAssessment);
app.use("/api", VehicleCallDetails);
app.use("/api", VitalSignTreatment);

app.listen(PORT, () => {
  console.log(`Server Started successfully on PORT ${PORT}`);
});
