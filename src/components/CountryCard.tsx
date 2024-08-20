import { Country } from '../data/apiRequests';

interface CountryCardProps {
  country: Country;
}

export default function CountryCard({ country }: CountryCardProps) {
  return (
    <div className=' flex flex-col gap-4 w-56 bg-white border border-gray-300 rounded-lg'>
      <img
        src={country.flags.png}
        alt='flag-img'
        className=' rounded-t-lg object-cover h-40'
      />
      <h1 className=' text-lg font-bold p-4'>{country.name.common}</h1>
      <p className=' text-sm font-semibold p-4'>Capital: {country.capital}</p>
    </div>
  );
}
