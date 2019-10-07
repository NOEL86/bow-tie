import React from "react";

const Cortney = props => (
  <div id="aboutCard" className="card small">
    <div
      id="imageDiv"
      className="card-image waves-effect waves-block waves-light"
    >
      <img
        id="cortney"
        className="activator"
        src="../images/headShotCort.jpeg"
        alt="Headshot"
      />
    </div>

    {/* <div className="card-content">
      {/* <span className="card-title activator grey-text text-darken-4">
        Cortney Kuntz
      </span> 
    </div> */}
    <div className="card-reveal">
      <h6 className="card-title grey-text text-darken-4">Cortney M Kuntz</h6>
      <br />
      <p>
        Hello my dear! My name is Cortney Kuntz and I am Founder and Lead
        Planner of Bow & Tie Events. I love traveling, being a dog mom, murder
        mystery shows, trying new foods and laundry as odd as it sounds.{" "}
      </p>{" "}
      <p>
        I have always been a planner by nature and now as a professional! I
        remember planning all my birthday parties as a kid almost a year in
        advance. I loved coming up with various themes, color palettes, and
        activities in my Lisa Frank notebook.
      </p>{" "}
      <p>
        I am a 911 dispatcher which shares similar qualities with being an event
        planner. I’m used to working with all different types of people
        including difficult people, strange, long hours without breaks all in
        high stress situations where decisions need to be made quickly.{" "}
      </p>{" "}
      <p>
        {" "}
        I’ve always considered being an event planner, but just never pulled the
        trigger. After getting engaged in May of 2018 and planning my own
        wedding, I enjoyed it so much that I knew after ours was complete, I
        needed to give it a shot. So, here we are! I’m so excited to meet you
        and can’t wait to get started on making your vision a reality.{" "}
      </p>
    </div>
  </div>
);

export default Cortney;
