import React from "react";

const SMedia = (props) => (
  <div id="sMediaIcons" className="row">
    <a
      href="https://www.facebook.com/Bow-Tie-Events-122658612466871/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        id="fb"
        style={{ width: "35px", marginRight: "10px" }}
        src="../images/icons8-facebook-f-50.png"
        alt="FB Logo"
      />
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </a>
    {/* <a href="">
                <img
                  style={{ width: "30px" }}
                  src="../images/icons8-pinterest-50.png"
                  alt="Pintrest Logo"
                />
              </a> */}
    <a
      href="https://www.instagram.com/bowandtieevents/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        id="iGram"
        style={{ width: "35px" }}
        src="../images/icons8-instagram-old-50.png"
        alt="Instagram Logo"
      />
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </a>
    {/* <a href="">
                <img
                  style={{ width: "30px" }}
                  src="../images/icons8-snapchat-50.png"
                  alt="Snapchat Logo"
                />
              </a> */}
  </div>
);
export default SMedia;
