const BASE_URL = 'https://restcountries.com/v3.1';

export interface Country {
  name: { common: string };
  capital: string;
  flags: { png: string };
}

export const getAllCountries = async () => {
  try {
    const response = await fetch(`${BASE_URL}/all`);
    return response.json();
  } catch (error) {
    console.error(error);
  }
};

export const filterCountriesByCapital = async (capital: string) => {
  try {
    const response = await fetch(`${BASE_URL}/capital/${capital}`);
    return response.json();
  } catch (error) {
    console.error(error);
  }
};
