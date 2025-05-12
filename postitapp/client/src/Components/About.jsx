import React from "react"; // Ensure this line is present if necessary
import userImage from "../Images/user.png"; // Import a default user image
const About = () => {
  return (
    <div>
      <h1>About this project</h1>
      <p>This project is developed by: Tanbir Ahmed</p>
      <p>Email: 66S2136295@utas.edu.om</p>
      <img src={userImage} alt="devimage" className="userImage" />
      <button>Contact developer</button>
    </div>
  );
};
export default About;
