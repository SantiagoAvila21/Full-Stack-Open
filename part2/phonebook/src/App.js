import { useEffect, useState } from 'react'
import Filter from './components/Filter';
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    personService.getPersons().then(personsFetched => {
      setPersons(personsFetched);
    });
  },[]);

  const addPerson = (e) => {
    e.preventDefault();
    
    const rep = persons.filter(person => person.name === newName);
    const newPersons = [...persons];

    if(rep.length >= 1){
      if(window.confirm(`${newName} is already added to phonebook, replace the old number with new one?`)){
        // Handle update
        const repIndex = persons.findIndex(person => person === rep[0]);
        rep[0].number = newNumber;
        personService.updatePerson(repIndex+1, rep[0]);
        newPersons[repIndex] = rep[0];
        setPersons(newPersons);
        return ;
      }else return ;
    }
    const newPerson = {
      name: newName,
      number: newNumber,
      id: persons[persons.length - 1].id + 1,
    }
    
    newPersons.push(newPerson);
    setPersons(newPersons);

    personService.createPerson(newPerson);  
  }

  const handleDelete = (id, namePersonDelete) => {
    if(window.confirm("Delete " + namePersonDelete)){
      const newPersons = persons.filter(person => person.id !== id);
      setPersons(newPersons);
      personService.deletePerson(id);
    }else return ;
  }

  const personsToShow = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()));

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
      <Persons persons={personsToShow} handleDelete = {handleDelete}/>
    </div>
  )
}

export default App