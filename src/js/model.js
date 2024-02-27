import { API_URL, CODE_API } from "./config.js";

export const bookmarkInfo = {
  flag: "",
  name: "",
  region: "",
};

// Calling REST countries API
export const loadCountryInfo = async function (countryName) {
  try {
    const country = await fetch(`${API_URL}${countryName}`);
    const countryData = await country.json();
    const countryInfo = countryData[0];

    // Get neigbour
    if (countryInfo.borders) {
      const neighbours = await Promise.all(
        countryInfo.borders.map(async (border) => {
          const neighbourResponse = await fetch(`${CODE_API}${border}`);
          const neighbourData = await neighbourResponse.json();
          return neighbourData[0];
        })
      );

      countryInfo.neighbours = neighbours;
    }
    return countryInfo;
  } catch (err) {
    console.log(err);
  }
};
