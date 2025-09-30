import {  Typewriter } from "react-simple-typewriter";
const Announcement = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        fontSize: "19px",
        fontWeight: 600,
        height: "28px",
        background: "linear-gradient(90deg, #e9acd9 29%, #c471ed 100%)"
      }}
    >
      <Typewriter
        words={["Day Vy Cosmetics", "Retail 50$ up", "Wholesale 300$ up", "Free Shipping", "Cellcard 012 258508, Smart 093258508"]}
        loop={5}
        cursor
        cursorStyle="_"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </div>
  );
};

export default Announcement;
