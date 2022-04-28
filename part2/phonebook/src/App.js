import { useState } from 'react'
import Filter from './components/Filter';
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  const addPerson = (e) => {
    e.preventDefault();
    const rep = persons.filter(person => person.name === newName);
    if(rep.length >= 1){
      alert(`${newName} is already added to phonebook`);
      return;
    }
    const newPersons = [...persons];
    
    newPersons.push({
      name: newName,
      number: newNumber,
    });

    setPersons(newPersons);
  }

  const personsToShow = persons.filter(person => person.name.toLowerCase().includes(filter));

  const handleFilterChange = event => setFilter(event.target.value);

  const handleNameChange = event => setNewName(event.target.value);

  const handleNumberChange = event => setNewNumber(event.target.value);

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter = {filter} handleFilterChange={handleFilterChange}/>
      <h2> Add a new Person</h2>
      <PersonForm addPerson={addPerson} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <Persons persons={personsToShow} />
    </div>
  )
}

export default App