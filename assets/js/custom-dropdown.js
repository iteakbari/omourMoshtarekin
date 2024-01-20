const dropdownMenus = [...document.querySelectorAll(".menu-dropdown")];
const searchInputs = [...document.querySelectorAll(".search-input")];
const dropItems = [...document.querySelectorAll(".dropItem")];
const menus = [...document.querySelectorAll(".menu")];

dropdownMenus.forEach((item) => {
  const menu = item.querySelector(".menu");
  console.log(menu);

  item.addEventListener("mouseenter", () => {
    menu.classList.add("show");
  });
  item.addEventListener("mouseout", () => {
    menu.classList.remove("show");
  });
});
