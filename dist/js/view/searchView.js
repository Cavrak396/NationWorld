import View from "./view.js";

class SearchView extends View {
  exploreBtn = document.querySelector(".js-explore-btn");
  searchBar = document.querySelector(".js-search-country");
  neighbour = document.querySelector(".js-neighbour");

  /*_addHandlerRender(handler) {
    ["hashchange", "load"].forEach((e) => window.addEventListener(e, handler));
  }*/

  _addHandlerRender(handler) {
    const events = ["hashchange", "load"];

    // Dodajemo "hashchange" događaj
    window.addEventListener("hashchange", () => {
      location.reload();
      handler();
    });

    // Dodajemo "load" događaj
    window.addEventListener("load", handler);
  }

  _loadCountry() {
    const searchData = this.searchBar.value;
    if (!searchData)
      this.emptySign.textContent = `Oops, try with full filed :D`;
    return searchData;
  }

  _getName(handler) {
    this.exploreBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const searchData = this._loadCountry();
      window.location.hash = searchData;
      handler(searchData);
      this._clear();
    });
  }

  _checkSearch(data) {
    this.parentEl.style.display = data ? "block" : "none";
    this.mapField.style.display = data ? "block" : "none";
    this.emptySign.textContent = data
      ? ""
      : `Country with this name doesn't exist! Try another :)`;
    this.emptySign.style.display = data ? "none" : "block";
  }

  _clear() {
    this.searchBar.value = "";
  }
}

export default new SearchView();
