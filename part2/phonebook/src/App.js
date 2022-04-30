import { useEffect, useState } from 'react'
import Filter from './components/Filter';
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import axios from 'axios';

const App = () => {
  const [persons, setPersons] = useState([]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then(response => {
      const persons = response.data;
      setPersons(persons);
    });
  },[]);

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