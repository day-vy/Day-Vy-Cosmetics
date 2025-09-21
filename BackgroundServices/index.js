
import express from "express";
import dotenv from "dotenv";
import dbConnection from "./utils/db.js";
import cron from "node-cron";
import sendWelcomeEmail from "./EmailService/sendWelcomeEmail.js";
import sendPendingOrderEmail from "./EmailService/sendPendingOrderEmail.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT;


// SCHEDULE SERVICES
const services = () => {
  cron.schedule("* * * * * *", async () => {
    sendWelcomeEmail();
    sendPendingOrderEmail();
    sendDeliveredOrderEmail();
  });
};

const promotion = () => {
  cron.schedule("30 5 * * 5", async () => {
    // send promotion email
  });
};

services();
promotion();

app.listen(PORT, () => {
  console.log(`Backgroundservice is running on port ${PORT}`);
  dbConnection();
});
