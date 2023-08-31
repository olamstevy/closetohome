"use strict";

window.addEventListener("load", function () {
  const membIconMappings = [
    "./assets/charm_circle-tick.svg",
    "./assets/charm_circle-tick (1).svg",
    "./assets/charm_circle-tick (2).svg",
    "./assets/charm_circle-tick (3).svg",
  ];

  const img = document.querySelector(".about_section_img img");
  const content = document.querySelector(".about_section_content");
  const faq_open_btns = document.querySelectorAll(
    ".faq_section_cont .open_ans_btn"
  );

  faq_open_btns.forEach((btn) => {
    btn.src = "assets/simple-line-icons_plus.svg";
  });

  for (let i = 0; i < membIconMappings.length; i++) {
    const membListIcons = document.querySelectorAll(
      `#memb_cont_${i} .memb_type_benefit img`
    );
    membListIcons.forEach((img) => {
      img.src = membIconMappings[i];
    });
  }

  img.style.height = `${content.clientHeight}px`;
});
