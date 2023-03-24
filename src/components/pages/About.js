import React from "react";
import profilepic from "../../assets/IMG-0757.jpg";

export default function About() {
  return (

    

    <main>
      <div class="titleHeading">
          <h2>My Portfolio</h2>
      </div>
    <div className={"portfolioCard cardBorder aboutCard"}>
      
      <div className="portfolioCardRightColumn">
      
        <div>
        
          <h1>Brady Collier</h1>

              <p>
              Thanks for visiting my page! My name is Brady, I'm a fullstack developer based out of Washington.
              </p>
              <p>
              I'm a graduate of the University of Washington with a bachelor's degree in economics. Education is important to me, so
              I continued my education and I have recently graduated from the full-stack coding bootcamp at the same university, gaining valuable
              skills in front end development, back end development, and database management. Prior to gaining my technical skills, I worked at Amazon in recruiting, worked in the 
              wine industry for a decade in sales and events, and have worked with nonprofits helping out with boards and volunteering.
              </p>
              </div>
      </div>
      <div className="portfolioCardLeftColumn">
        <img src={profilepic} alt="Profile picture" />
      </div>
      </div>
    </main>
  );
}