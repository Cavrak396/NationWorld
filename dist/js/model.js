// Calling REST countries API
export const loadCountryInfo = async function (countryName) {
  try {
    const country = await fetch(
      `https://restcountries.com/v3.1/name/${countryName}`
    );
    const countryData = await country.json();
    const countryInfo = countryData[0];
    return countryInfo;
  } catch (err) {
    alert(err);
  }
};
