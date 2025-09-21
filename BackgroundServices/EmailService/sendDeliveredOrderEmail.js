import ejs from "ejs";
import dotenv from "dotenv";
import sendMail from "../helpers/sendMail.js";
import Order from "../models/order.model.js"; // Fixed typo in model name
dotenv.config();

const sendDeliveredOrderEmail = async () => {
const orders = await Order.find({ status: 2 });
  if (orders.length > 0) {
    for (let order of orders) {
      ejs.renderFile(
        "templates/deliveredorder.ejs",
        {
            name: order.name,
            products: order.products
        },
        async (err, data) => {
             let messageOptions = { // Fixed variable naming convention
                        from: process.env.EMAIL, // Fixed 'form' to 'from'
                        to: order.email, // Fixed typo in 'email'
                        subject: "Your order has been delivered.",
                        html: data,
                    };

                    try {
                        await sendMail(messageOptions);
                        await Order.findByIdAndUpdate(order._id, { $set: { status: 3 } });
                    } catch (error) {
                      console.log(error); // Improved error logging
                    }
        }
      )
    }
  }
};

export default sendDeliveredOrderEmail;
