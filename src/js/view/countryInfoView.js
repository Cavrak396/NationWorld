import View from "./view.js";

class CountryInfoView extends View {
  _generateMarkup(data) {
    this.data = data;
    const markup = `
    <div class="nation__informations-flag" style="background-image: url('${
      data.flags.png
    }')">
    </div>
    <div class="nation__informations-text">
        <div class="nation__informations-join">
            <h2 class="nation__informations-title">${data.name.common}</h2>
            <span class="nation__informations-region">${data.region}</span>
    </div>
    <div class="nation__informations-facts">
    <h3 class="nation__information-heading">
        Geographical information about Serbia that you should know.
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
       <h3 class="nation__information-heading">
       Neighbours:
       </h3>
       <ul class="nation__informations-list">
       <li class="nation__informations-item">
         ${data.neighbours.map((neighbour) => {
           return `
           <a href="#${neighbour}" class="nation__information-neighbour"> ${neighbour}</a>
           `;
         })}
      </li>
      </ul>
    `;

    this.parentEl.innerHTML = "";
    this.parentEl.style.display = "block";
    this.emptySign.style.display = "none";
    this.parentEl.insertAdjacentHTML("afterbegin", markup);
  }
}

export default new CountryInfoView();
