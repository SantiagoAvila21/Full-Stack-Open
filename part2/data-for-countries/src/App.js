import { useEffect, useState } from 'react';
import React from 'react';
import Search from './components/Search'
import Countries from './components/Countries'
import axios from 'axios';


const App = () => {
  const [filter, setFilter] = useState("");
  const [countries,setCountries] = useState([]);

  axios.get("https://restcountries.com/v3.1/all").then(response => {
    const data = response.data;
    setCountries(data);
  });

  const handleFilterChange = (event) => setFilter(event.target.value); 
  
  const countriesFiltered = countries.filter(country => country.name.common.toLowerCase().includes(filter.toLowerCase()));

  return (
    <>
      <Search handleFilterChange={handleFilterChange} filter={filter} />
      <Countries countries={countriesFiltered} setFilter={setFilter}/>
    </>
  );
}

export default App;