export const workTabs = () => {
  let tabsHeader = document.querySelector(".slider__header");
  let tabsBody = document.querySelector(".slider__body");

  let tabHeaderElements = document.querySelectorAll(".slider__tabHeader");
  let tabBodyElements = document.querySelectorAll(".slider__tabs");

  for (let i = 0; i < tabHeaderElements.length; i++) {
    tabHeaderElements[i].addEventListener("click", () => {
      tabsHeader.querySelector(".activeTitle").classList.remove("activeTitle");
      tabHeaderElements[i].classList.add("activeTitle");
      tabsBody.querySelector(".activeTab").classList.remove("activeTab");
      tabBodyElements[i].classList.add("activeTab");
    });
  }
};
