import View from "./view.js";

class CountryInfoView extends View {
  _generateMarkup(data) {
    this.data = data;
    const markup = `
    <div class="nation__informations-flag js-country-flag" alt="country flag" style="background-image: url('${
      data.flags.png
    }')">
    </div>
    <div class="nation__informations-text">
        <div class="nation__informations-join">
            <h2 class="nation__informations-title js-country-title">${
              data.name.common
            }</h2>
            <span class="nation__informations-region js-country-region">${
              data.region
            }</span>
            <button type="button" class="nation__informations-save js-bookmark-save">Save</button>
    </div>
    <div class="nation__informations-facts">
    <h3 class="nation__informations-heading">
        Geographical information about ${data.name.common} that you should know.
    </h3>
    <ul class="nation__informations-list">
        <li class="nation__informations-item">
            <p class="nation__informations-fact">
                <span class=nation__informations-tag>
                    Alternative spellings of ${data.name.common} are: 
                </span>
                <span class="nation__informations-result">
                ${[data.altSpellings.slice(0, 4).join(", ")]}
                </span>
            </p>
        </li>
        <li class="nation__informations-item">
            <p class="nation__informations-fact">
                <span class=nation__informations-tag>
                    Capital City:
                </span>
                <span class="nation__informations-result">
                    ${data.capital}
                </span>
            </p>
        </li>
        <li class="nation__informations-item">
            <p class="nation__informations-fact">
                <span class=nation__informations-tag>
                    Offical language:
                </span>
                <span class="nation__informations-result">
                   ${Object.values(data.languages)[0]}
                </span>
            </p>
        </li>
        <li class="nation__informations-item">
        <p class="nation__informations-fact">
            <span class=nation__informations-tag>
                Population:
            </span>
            <span class="nation__informations-result">
               ${data.population}
            </span>
        </p>
    </li>
        <li class="nation__informations-item">
            <p class="nation__informations-fact">
                <span class=nation__informations-tag>
                    Status:
                </span>
                <span class="nation__informations-result">
                    ${data.status}
                </span>
            </p>
        </li>
        <li class="nation__informations-item">
            <p class="nation__informations-fact">
                <span class=nation__informations-tag>
                    Independent:
                </span>
                <span class="nation__informations-result">
                    ${data.independent ? "Yes" : "No"}
                </span>
            </p>
        </li>
    </ul>
    <h3 class="nation__information-heading">
    Time zones 🕒
</h3>
<ul class="nation__informations-list">
    <li class="nation__informations-item">
        <p class="nation__informations-fact">
            <span class=nation__informations-tag>
                Continent:
            </span>
            <span class="nation__informations-result">
                ${data.continents}
            </span>
        </p>
    </li>
    <li class="nation__informations-item">
        <p class="nation__informations-fact">
            <span class=nation__informations-tag>
                Time zones:
            </span>
            <span class="nation__informations-result">
                ${data.timezones[0]}
            </span>
        </p>
    </li>
    <li class="nation__informations-item">
        <p class="nation__informations-fact">
            <span class=nation__informations-tag>
                Start of week:
            </span>
            <span class="nation__informations-result">
                ${data.startOfWeek}
            </span>
        </p>
    </li>
</ul>
</div>       
<div class=""nation__informations-neighbours>
    <h3 class="nation__informations-heading">
    Neighbours:
    </h3>
    <ul class="nation__informations-neighbourList">
      ${this._loadNeighbour(data)}
    </ul>
    </div>
    `;

    this.parentEl.innerHTML = "";
    this.parentEl.style.display = "block";
    this.emptySign.style.display = "none";
    this.parentEl.insertAdjacentHTML("afterbegin", markup);
  }

  _loadNeighbour(data) {
    return data.neighbours
      ? data.neighbours
          .map((neighbour) => {
            return `
      <li class="nation__informations-neighbourItem js-neighbour">
        <a href="#${neighbour.name.common}" class="nation__informations-neighbour js-neighbour"> 
          <div class="nation__inofmartions-neighbourFlag" style="background-image: url('${neighbour.flags.png}')"></div>
          <div class="nation__information-neigbourText">
          <span class="nation__informations-neighbourName">${neighbour.name.common}</span>
          </div>
        </a>
      </li>`;
          })
          .join("")
      : "<span>No neighbours found!</span>";
  }
}

export default new CountryInfoView();
