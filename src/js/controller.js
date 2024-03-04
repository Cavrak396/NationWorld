import * as model from "./model.js";
//import userSetupView from "./view/userSetupView.js";
import searchView from "./view/searchView.js";
import countryInfoView from "./view/countryInfoView.js";
import bookmarkView from "./view/bookmarksView.js";
import mapView from "./view/mapView.js";

/*const passUserSetup = function () {
  userSetupView._getUserInfo();
};

passUserSetup();*/

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

// Bookmark
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

/*
// Move to View letter
const userInfo = document.querySelector(".js-usersetup");
const userBtn = document.querySelector(".js-usersetup-submit");
const userText = document.querySelector(".js-usertext");

const user = {
  username: "",
  userCountry: "", // Make check letter
};

userBtn.addEventListener("click", function (e) {
  e.preventDefault();

  let username = document.querySelector(".js-username").value;
  let userCountry = document.querySelector(".js-countryName").value;
  username = username.charAt(0).toUpperCase() + username.slice(1);

  if (!username || !userCountry) return;

  user.username = username;
  user.userCountry = userCountry;

  userInfo.style.display = "none";

  userText.textContent = `Hey ${user.username}, nice to meet you! :)`;
});
*/ //Move this to view letter, this is join cloud
