"use strict";

// Function to show FAQ answer overlay
const showFaqAns = (question, answer) => {
  const faqOverlay = document.querySelector(".faq_overlay");
  const faqQuesEl = document.querySelector(".faq_overlay .quest_text");
  const faqAnsEl = document.querySelector(".faq_overlay .faq_ans_text");

  faqQuesEl.textContent = question;
  faqAnsEl.textContent =
    answer ?? "Sorry, this question has not been answered!";
  faqOverlay.style.display = "flex";
  document.body.style.overflowY = "hidden"; // Disable background scrolling
};

// Function to hide FAQ answer overlay
const hideFaqAns = () => {
  const faqOverlay = document.querySelector(".faq_overlay");
  faqOverlay.style.display = "none";
  document.body.style.overflowY = ""; // Re-enable background scrolling
};

window.addEventListener("load", () => {
  const membershipIcons = [
    "./assets/charm_circle-tick.svg",
    "./assets/charm_circle-tick (1).svg",
    "./assets/charm_circle-tick (2).svg",
    "./assets/charm_circle-tick (3).svg",
  ];

  const faqOpenButtons = document.querySelectorAll(
    ".faq_section_cont .open_ans_btn"
  );
  const faqCloseBtn = document.querySelector(".faq_overlay .close_ans_btn");

  faqCloseBtn.addEventListener("click", hideFaqAns);

  faqOpenButtons.forEach((btn) => {
    btn.src = "assets/simple-line-icons_plus.svg";
    btn.addEventListener("click", () => {
      const faqQues = btn.previousElementSibling.textContent;
      const faqAns = btn.dataset.answer;
      showFaqAns(faqQues, faqAns);
    });
  });

  membershipIcons.forEach((iconPath, i) => {
    const membershipIconsList = document.querySelectorAll(
      `#memb_cont_${i} .memb_type_benefit img`
    );
    membershipIconsList.forEach((icon) => {
      icon.src = iconPath;
    });
  });
  const aboutImage = document.querySelector(".about_section_img");
  const aboutContent = document.querySelector(".about_section_content");
  aboutImage.style.height = `${aboutContent.clientHeight}px !important`;

  window.addEventListener("resize", () => {
    console.log(window.innerWidth);
    aboutImage.style.height = `${aboutContent.clientHeight}px !important`;
  });
});
