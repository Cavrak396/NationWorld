import View from "./view.js";

class CountryInfoView extends View {
  _generateMarkup(data) {
    this.data = data;
    const markup = `
    <div class="nation__informations-flag" style="background-image: url('${data.flags.png}')">
    </div>
    <div class="nation__informations-text">
        <div class="nation__informations-join">
            <h2 class="nation__informations-title">${data.name.common}</h2>
            <span class="nation__informations-region">${data.region}</span>
        </div>
    </div>
    `;

    this.parentEl.innerHTML = "";
    this.parentEl.style.display = "block";
    this.emptySign.style.display = "none";
    this.parentEl.insertAdjacentHTML("afterbegin", markup);
  }
}

export default new CountryInfoView();
