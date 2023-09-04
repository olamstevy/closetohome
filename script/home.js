"use strict";

document.addEventListener("DOMContentLoaded", function () {
  // Cache frequently used DOM elements
  const faqOverlay = document.querySelector(".faq_overlay");
  const faqQuesEl = document.querySelector(".faq_overlay .quest_text");
  const faqAnsEl = document.querySelector(".faq_overlay .faq_ans_text");
  const faqOpenButtons = document.querySelectorAll(
    ".faq_section_cont .open_ans_btn"
  );
  const faqCloseBtn = document.querySelector(".faq_overlay .close_ans_btn");

  const spaceContainer = document.querySelector(
    ".spaces_section_cont .spaces_content .spaces"
  );
  const rightSpaceNav = document.querySelector(
    ".spaces_section_cont .spaces_content .right_spaces_nav"
  );
  const leftSpaceNav = document.querySelector(
    ".spaces_section_cont .spaces_content .left_spaces_nav"
  );
  const firstSpace = spaceContainer.firstElementChild;
  const lastSpace = spaceContainer.lastElementChild;

  // Function to show FAQ answer overlay
  function showFaqAns(question, answer) {
    faqQuesEl.textContent = question;
    faqAnsEl.textContent =
      answer || "Sorry, this question has not been answered!";
    faqOverlay.style.display = "flex";
    document.body.style.overflowY = "hidden";
  }

  // Function to hide FAQ answer overlay
  function hideFaqAns() {
    faqOverlay.style.display = "none";
    document.body.style.overflowY = "";
  }

  // Function to check if space container is visible
  function isSpaceVisible(space) {
    const spaceRect = space.getBoundingClientRect();
    const spaceContRect = spaceContainer.getBoundingClientRect();
    return (
      spaceRect.left >= spaceContRect.left &&
      spaceRect.right <= spaceContRect.right
    );
  }

  // Add event listeners for FAQ buttons
  faqOpenButtons.forEach((btn) => {
    btn.src = "assets/simple-line-icons_plus.svg";
    btn.addEventListener("click", () => {
      const faqQues = btn.previousElementSibling.textContent;
      const faqAns = btn.dataset.answer;
      showFaqAns(faqQues, faqAns);
    });
  });

  faqCloseBtn.addEventListener("click", hideFaqAns);

  // Add event listeners for space navigation
  rightSpaceNav.addEventListener("click", () => {
    if (!isSpaceVisible(lastSpace)) {
      scrollSpaces(-1);
      leftSpaceNav.style.opacity = "100%";
    } else {
      rightSpaceNav.style.opacity = "25%";
    }
  });

  leftSpaceNav.addEventListener("click", () => {
    if (!isSpaceVisible(firstSpace)) {
      scrollSpaces(1);
      rightSpaceNav.style.opacity = "100%";
    } else {
      leftSpaceNav.style.opacity = "25%";
    }
  });

  // Function to scroll spaces
  function scrollSpaces(direction) {
    const firstSpaceWidth = firstSpace.clientWidth;
    const leftMargin = parseInt(firstSpace.style.marginLeft) || 0;
    firstSpace.style.marginLeft = `${
      leftMargin + direction * (firstSpaceWidth + 20)
    }px`;
  }

  // Initial height adjustment for the about section
  const aboutImage = document.querySelector(".about_section_img img");
  const aboutContent = document.querySelector(".about_section_content");
  aboutImage.style.height = `${aboutContent.clientHeight}px`;

  // Adjust height on window resize
  window.addEventListener("resize", () => {
    aboutImage.style.height = `${aboutContent.clientHeight}px`;
  });

  // Set membership icons
  const membershipIcons = [
    "./assets/charm_circle-tick.svg",
    "./assets/charm_circle-tick (1).svg",
    "./assets/charm_circle-tick (2).svg",
    "./assets/charm_circle-tick (3).svg",
  ];

  membershipIcons.forEach((iconPath, i) => {
    const membershipIconsList = document.querySelectorAll(
      `#memb_cont_${i} .memb_type_benefit img`
    );
    membershipIconsList.forEach((icon) => {
      icon.src = iconPath;
    });
  });
});
