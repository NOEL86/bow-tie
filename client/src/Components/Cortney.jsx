import React from "react";

const Cortney = props => (
  <div>
    <div style={{ paddingTop: "10%" }} className="row center">
      <div className="col m2 l2"></div>
      <div className="col s12 m3 l3">
        <div id="aboutCard" className="card">
          <div id="imageDiv" className="card-image">
            <img
              id="cortney"
              className="activator"
              src="../images/headShotCort.jpeg"
              alt="Headshot"
            />
          </div>
        </div>
      </div>
      <div className="col m1 l1"></div>

      <div className="col s12 m4 l4">
        <div id="infoCard" className="card">
          <div className="row">
            <div className="col s12 m12 l12">
              <h6
                id="cortneyName"
                className="card-title grey-text text-darken-3"
              >
                Cortney M Kuntz
              </h6>
            </div>
          </div>

          <div className="row">
            <div
              id="paragraph"
              style={{
                marginTop: "5%",
                paddingLeft: "5%",
                paddingRight: "5%",
                textAlign: "left",
                width: "500px"
              }}
              className="col s12 m12 l12"
            >
              <p>
                Hello my dear! My name is Cortney Kuntz and I am Founder and
                Lead Planner of Bow & Tie Events. I love traveling, being a dog
                mom, murder mystery shows, trying new foods and laundry as odd
                as it sounds.{" "}
              </p>{" "}
              <p>
                I have always been a planner by nature and now as a
                professional! I remember planning all my birthday parties as a
                kid almost a year in advance. I loved coming up with various
                themes, color palettes, and activities in my Lisa Frank
                notebook.
              </p>{" "}
              <p>
                I am a 911 dispatcher which shares similar qualities with being
                an event planner. I’m used to working with all different types
                of people including difficult people, strange, long hours
                without breaks all in high stress situations where decisions
                need to be made quickly.{" "}
              </p>{" "}
              <p>
                {" "}
                I’ve always considered being an event planner, but just never
                pulled the trigger. After getting engaged in May of 2018 and
                planning my own wedding, I enjoyed it so much that I knew after
                ours was complete, I needed to give it a shot. So, here we are!
                I’m so excited to meet you and can’t wait to get started on
                making your vision a reality.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Cortney;
