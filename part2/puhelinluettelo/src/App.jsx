import { useState, useEffect } from "react";
import axios from 'axios';
import Persons from "./components/Persons.jsx";
import Filter from "./components/Filter.jsx";
import PersonForm from "./components/PersonForm.jsx";

const App = () => {

  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [showPerson, setShowPerson] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(persons.concat(response.data))
      })
  }, [])
  const addPerson = (event) => {
    event.preventDefault();
    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
    } else {
      const personObject = {
        name: newName,
        number: newNumber,
        id: persons.length + 1
      };
      setPersons(persons.concat(personObject));
      setNewName("");
      setNewNumber("");
    };
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  };
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  };
  const handlePersonToShowChange = (event) => {
    setShowPerson(event.target.value)
  };
  const peopleToShow = showPerson === '' ? persons : persons.filter(person =>
    person.name
      .toLowerCase()
      .includes(showPerson.toLowerCase())
    || person.number
      .toLowerCase()
      .includes(showPerson.toLowerCase()));

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        showPerson={showPerson}
        handlePersonToShowChange={handlePersonToShowChange}
      />
      <h3>add a new</h3>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons
        peopleToShow={peopleToShow}
      />
    </div>
  )
}

export default App;
