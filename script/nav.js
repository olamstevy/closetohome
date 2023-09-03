const changeNavLayout = function () {
  // JavaScript to toggle the mobile menu
  const mobileShowMenu = document.querySelector("header .show_menu_btn");
  const mobileHideMenu = document.querySelector("header .hide_menu_btn");
  const navLinks = document.querySelector(".nav_links");

  mobileShowMenu.addEventListener("click", () => {
    navLinks.classList.add("active");
  });
  mobileHideMenu.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
};

window.addEventListener("load", () => {
  changeNavLayout();
  //   windows.addEventListener("resize", window.innerWidth = changeNavLayout);
});
