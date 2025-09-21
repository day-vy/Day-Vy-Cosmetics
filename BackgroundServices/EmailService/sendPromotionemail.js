import ejs from "ejs";
import dotenv from "dotenv";
import sendMail from "../helpers/sendMail.js";
import products from "../models/product.model.js";
import user from "../models/user.model.js";
dotenv.config();

const sendPromotionEmail = async () => {
  const users = await User.find();
  const products = await Product.aggragate([{ $sample: { size: 5 } }]);

  for (let user of users) {
    ejs.renderFile(
      "templates/promotion.ejs",
      {
        products
      },
      async (err, data) => {
        let messageOptions = {
          // Fixed variable naming convention
          from: process.env.EMAIL, // Fixed 'form' to 'from'
          to: user.email, // Fixed typo in 'email'
          subject: "Your weekly products.",
          html: data,
        };

        try {
          await sendMail(messageOptions);
        } catch (error) {
          console.log(error); // Improved error logging
        }
      }
    );
  }
};

export default sendPromotionEmail;
