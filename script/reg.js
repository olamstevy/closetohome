"use strict";

// Function to update member icons on load
window.addEventListener("load", function () {
  // Array of paths to member icons
  const memberIconPaths = [
    "./assets/charm_circle-tick.svg",
    "./assets/charm_circle-tick (1).svg",
    "./assets/charm_circle-tick (2).svg",
    "./assets/charm_circle-tick (3).svg",
  ];

  // Iterate over each set of member icons
  for (let i = 0; i < memberIconPaths.length; i++) {
    // Select header tick Icon for current member container
    const headerIcon = document.querySelector(
      `.membership_cont #memb_cont_${i} .memb_type_header img`
    );
    headerIcon.src = `./assets/mdi_tick (${i}).svg`;

    // Select all icons within the current member container
    const memberIcons = document.querySelectorAll(
      `#memb_cont_${i} .memb_type_benefit img`
    );
    console.log("yes");

    // Update icons with the corresponding path
    memberIcons.forEach((icon) => {
      icon.src = memberIconPaths[i];
    });
  }
});
