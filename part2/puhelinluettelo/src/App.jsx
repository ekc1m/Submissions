import { useState, useEffect } from "react";
import personService from './services/persons';
import Persons from "./components/Persons.jsx";
import Filter from "./components/Filter.jsx";
import PersonForm from "./components/PersonForm.jsx";

const App = () => {

  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [showPerson, setShowPerson] = useState('');

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])
  //TODO: tää
  const updateNumber = (personName, personNumber) => {
    { }
  }

  const addPerson = event => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
      id: (persons.length + 1).toString(),
    };
    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
      // if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
      //   updateNumber(personObject)
      //}
    } else {
      personService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName("");
          setNewNumber("");
        })
    };
  };

  const deleteUser = id => {
    if (window.confirm(`Are you sure you want to delete`)) {
      personService
        .deletePerson(id)
        .then(() => {
          setPersons(persons.filter(person => person.id != id))
        })
        .catch(err => console.log(`error: ${err}`))
    }
  }

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
        deleteUser={deleteUser}
      />
    </div>
  )
}

export default App;
