import * as model from "./model.js";
import searchView from "./view/searchView.js";
import countryInfoView from "./view/countryInfoView.js";
import bookmarkView from "./view/bookmarksView.js";
import mapView from "./view/mapView.js";

const loadCountry = async function () {
  try {
    const id = window.location.hash.slice(1);
    console.log(id);

    if (!id) return;
    const country = await model.loadCountryInfo(id);

    searchView._checkSearch(country);

    countryInfoView._generateMarkup(country);

    mapView._getCountryCoords(country);

    handleBookmarkAction();

    console.log(country);
  } catch (err) {
    throw err;
  }
};

const handleBookmarkAction = function () {
  bookmarkView._showBookmarks();
  bookmarkView._saveBookmark();
  bookmarkView._showSavedBookmarks();
  bookmarkView._removeBookmark();
};

const init = function () {
  searchView._getName(loadCountry);
  searchView._addHandlerRender(loadCountry);
};

init();
