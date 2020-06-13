import React from "react";
import SignUp from "../../components/SignUp/SignUp";
import "./LandingPage.scss";

// if user has token then redirect to main goals page
// if not nothing and stay on landing page

function LandingPage() {
  return (
    <main className="landingPageMain">
      <section>
        <div>
          <h3>Start forming better habits</h3>
          <p>
            Habitz will help you form better everyday habits that will
            eventually lead to a healthier and more fulfilling lifestyle.
          </p>
        </div>
        <div>
          <h3>Build a list of tasks to accomplish every day</h3>
          <p>
            Habitz generates a list of 20 common tasks people aspire to
            accomplish to make a better life for themselves. Pick from the list
            or create your own tasks to tackle on the daily!
          </p>
        </div>
        <div>
          <h3>Accountability</h3>
          <p>
            Habitz keeps track of your progress and holds you accountable to
            complete each task that you have set out to accomplish every day.
          </p>
        </div>
      </section>
      <SignUp />
    </main>
  );
}

export default LandingPage;
