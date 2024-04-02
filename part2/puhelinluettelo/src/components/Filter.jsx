const Filter = (props) => {
  return (
    <div>
      filter shown with <input value={props.showPerson} onChange={props.handlePersonToShowChange} />
    </div>
  )
};

export default Filter;
