const Persons = (props) => {
  return (
    <div>
      {props.peopleToShow.map(person =>
        <div key={person.id}>
          <p>{person.name} {person.number} <button onClick={() => props.deleteUser(person.id)}>delete</button></p>
        </div>
      )}
    </div>
  )
};

export default Persons;
