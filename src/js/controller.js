// Move to View letter
const userInfo = document.querySelector(".js-usersetup");
const userBtn = document.querySelector(".js-usersetup-submit");
const userText = document.querySelector(".js-usertext");

const user = {
  username: "",
};

userBtn.addEventListener("click", function (e) {
  e.preventDefault();

  let username = document.querySelector(".js-username").value;
  username = username.charAt(0).toUpperCase() + username.slice(1);
  user.username = username;

  if (!username) return;
  userInfo.style.display = "none";

  userText.textContent = `Hey ${user.username}, nice to meet you! :)`;
});
