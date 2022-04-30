
const Search = ({handleFilterChange, filter}) => {
    return (
        <>
            find countries <input onChange={handleFilterChange} value={filter}></input>
        </>
    );
}

export default Search;