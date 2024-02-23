import * as model from "./model.js";
import searchView from "./view/searchView.js";
import countryInfoView from "./view/countryInfoView.js";

const loadCountry = async function (data) {
  try {
    data = searchView._loadCountry();
    if (!data) return;
    const country = await model.loadCountryInfo(data);

    searchView._checkSearch(country);
    countryInfoView._generateMarkup(country);

    console.log(country);
  } catch (err) {
    throw err;
  }
};

const init = function () {
  searchView._getName(loadCountry);
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
