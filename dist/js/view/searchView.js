import View from "./view.js";

class SearchView extends View {
  exploreBtn = document.querySelector(".js-explore-btn");
  searchBar = document.querySelector(".js-search-country");

  _clear() {
    this.searchBar.value = "";
  }

  _loadCountry() {
    const searchData = this.searchBar.value;
    if (!searchData) return;
    return searchData;
  }

  _getName(handler) {
    this.exploreBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const searchData = this._loadCountry();
      handler(searchData);
      this._clear();
    });
  }

  _checkSearch(data) {
    if (!data) {
      this.parentEl.style.display = "none";
      this.emptySign.style.display = "block";
      this.emptySign.textContent = `Country with this name doesn't exist! Try another :)`;
    }
  }
}

export default new SearchView();
