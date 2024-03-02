/*class UserSetupView {
  userInfo = document.querySelector(".js-usersetup");
  userBtn = document.querySelector(".js-usersetup-submit");
  userText = document.querySelector(".js-usertext");

  user = {
    username: "",
    userCountry: "", // Make check letter
  };

  _getUserInfo() {
    this.userBtn.addEventListener("click", (e) => {
      e.preventDefault();

      let username = document.querySelector(".js-username").value;
      let userCountry = document.querySelector(".js-countryName").value;
      username = username.charAt(0).toUpperCase() + username.slice(1);

      if (!username || !userCountry) return;

      this.user.username = username;
      this.user.userCountry = userCountry;

      this.userInfo.style.display = "none";
      document.body.style.overflow = "auto";

      this.userText.textContent = `Hey ${this.user.username}, nice to meet you! :)`;
    });
  }
}

export default new UserSetupView();
*/