export const workInputSearch = () => {
  const searchInput = document.getElementById("search");
  const searchBtn = document.querySelector(".header__btn");

  searchInput.addEventListener("input", (e) => {
    console.log(e.target.value);

    if (e.target.value.trim()) {
      searchBtn.style.backgroundImage = "url(public/images/close.svg)";
      searchBtn.setAttribute("type", "reset");
    } else {
      searchBtn.setAttribute("type", "submit");
      searchBtn.style.backgroundImage = "url(public/images/search.svg)";
    }

    if (searchBtn.getAttribute('type') === "reset") {
      searchBtn.addEventListener('click', () => {
        searchBtn.style.backgroundImage = "url(public/images/search.svg)";
      })
    }
    
  });
};
