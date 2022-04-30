import Country from './Country';

const Countries = ({ countries, setFilter }) => {
    if(countries.length === 250) return ;
    const handleClickShow = (newFilter) => setFilter(newFilter);

    if(countries.length > 10) return <p>Too many matches specify another filter</p>
    else if(countries.length > 1){
        return (
            <>
                {countries.map((country,index) => {
                    return (
                        <div key={`${country.cioc} ${index}`}>
                            <p key={country.name.common}>{country.name.common}</p> 
                            <button key={country.ccn3} onClick={() => handleClickShow(country.name.common)}>Show</button>
                        </div>
                    );
                })}
            </>
        );
    }else if(countries.length === 1){
        return <Country country = {countries[0]} />
    }
}

export default Countries;