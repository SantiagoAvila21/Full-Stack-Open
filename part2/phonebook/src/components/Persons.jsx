const Persons = ({ persons, handleDelete }) => {
    return (
        <>
            {persons.map(person => {
                return (
                    <div key={person.id + person.name}>
                        <p key = {person.name}>{person.name} {person.number} </p> <button key={person.name + "bt"} onClick={() => handleDelete(person.id, person.name)} > Delete </button>
                    </div>
                );
            })}
        </>
    );
}

export default Persons;