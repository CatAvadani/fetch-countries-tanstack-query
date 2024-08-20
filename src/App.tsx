import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import CountryCard from './components/CountryCard';
import {
  Country,
  filterCountriesByCapital,
  getAllCountries,
} from './data/apiRequests';

const FILTERED_CAPITALS = [
  'Stockholm',
  'Berlin',
  'Paris',
  'London',
  'Rome',
  'Madrid',
];

type Capital = (typeof FILTERED_CAPITALS)[number];
function App() {
  const [capital, setCapital] = useState<Capital | 'All'>('All');

  const {
    data: countries,
    isError,
    isLoading,
  } = useQuery<Country[]>({
    queryKey: ['countries', capital],
    queryFn: () =>
      capital === 'All' ? getAllCountries() : filterCountriesByCapital(capital),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error when fetching countries</div>;
  }

  return (
    <div className=' min-h-screen flex flex-col justify-center items-center  max-w-7xl mx-auto'>
      <h1 className=' text-5xl pt-8'>Fetch Countries</h1>
      <select
        value={capital}
        onChange={(value) => setCapital(value.target.value as Capital | 'All')}
        className=' px-4 py-2 m-4 self-end  border border-slate-300 rounded-lg'
      >
        <option value='All'>All</option>
        {FILTERED_CAPITALS.map((capital) => (
          <option key={capital} value={capital}>
            {capital}
          </option>
        ))}
      </select>
      <div className=' max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-8 my-4 p-4 w-full bg-slate-50'>
        {countries?.map((country) => (
          <CountryCard key={country.capital} country={country} />
        ))}
      </div>
    </div>
  );
}

export default App;
