"use strict";

// Function to show login overlay
const showLoginOverlay = () => {
  const loginOverlay = document.querySelector(".login_overlay");
  loginOverlay.style.display = "flex";
  document.body.style.overflowY = "hidden"; // Disable background scrolling
};

// Function to hide login overlay
const hideLoginOverlay = () => {
  const loginOverlay = document.querySelector(".login_overlay");
  loginOverlay.style.display = "none";
  document.body.style.overflowY = ""; // Re-enable background scrolling
};

// Function to show signup overlay
const showSignupOverlay = () => {
  const signupOverlay = document.querySelector(".signup_overlay");
  signupOverlay.style.display = "flex";
  document.body.style.overflowY = "hidden"; // Disable background scrolling
};

// Function to hide signup overlay
const hideSignupOverlay = () => {
  const signupOverlay = document.querySelector(".signup_overlay");
  signupOverlay.style.display = "none";
  document.body.style.overflowY = ""; // Re-enable background scrolling
};

window.addEventListener("load", () => {
  // Add event listeners to login and signup buttons
  const loginButton = document.querySelector(".login_signup .login_btn");
  const signupButton = document.querySelector(".login_signup .signup_btn");

  loginButton.addEventListener("click", showLoginOverlay);
  signupButton.addEventListener("click", showSignupOverlay);

  // Add event listeners to close buttons in the login and signup overlays
  const loginCloseButton = document.querySelector(
    ".login_overlay .close_login_overlay_btn"
  );
  const signupCloseButton = document.querySelector(
    ".signup_overlay .close_signup_overlay_btn"
  );

  loginCloseButton.addEventListener("click", hideLoginOverlay);
  signupCloseButton.addEventListener("click", hideSignupOverlay);
});
