// Calling REST countries API
export const loadCountryInfo = async function (countryName) {
  try {
    const country = await fetch(
      `https://restcountries.com/v3.1/name/${countryName}`
    );
    const countryData = await country.json();
    const countryInfo = countryData[0];

    // Get neigbour
    const neighbours = await Promise.all(
      countryInfo.borders.map(async (border) => {
        const neighbourResponse = await fetch(
          `https://restcountries.com/v3.1/alpha/${border}`
        );
        const neighbourData = await neighbourResponse.json();
        return neighbourData[0].name.common;
      })
    );

    countryInfo.neighbours = neighbours;

    return countryInfo;
  } catch (err) {
    console.log(err);
  }
};
