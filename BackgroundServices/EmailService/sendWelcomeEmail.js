import ejs from "ejs";
import dotenv from "dotenv";
import sendMail from "../helpers/sendMail.js";
import User from "../models/user.model.js"; // Fixed typo in model name
dotenv.config();

const sendWelcomeEmail = async () => {
    const users = await User.find({ status: 0 });
    if (users.length > 0) {
        for (let user of users) {
            ejs.renderFile(
                "templates/welcome.ejs",
                {name: user.name},
                async (err, data) => {
                    
                    let messageOptions = { // Fixed variable naming convention
                        from: process.env.EMAIL, // Fixed 'form' to 'from'
                        to: user.email, // Fixed typo in 'email'
                        subject: "Welcome to Day-Vy-Cosmetics",
                        html: data,
                    };

                    try {
                        await sendMail(messageOptions);
                        await User.findByIdAndUpdate(user._id, { $set: { status: 1 } });
                    } catch (error) {
                        console.log(error); // Improved error logging
                    }
                }
            );
        }
    }
};

export default sendWelcomeEmail;