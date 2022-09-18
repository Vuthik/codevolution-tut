import React from 'react';
import Person from './Person';
function NameList() {
  const names = ['Bruce', 'Clark', 'Diana', 'Bruce'];
  const persons = [
    {
      id: 1,
      name: 'Bruce',
      age: 30,
      skill: 'React',
    },
    {
      id: 2,
      name: 'Clark',
      age: 25,
      skill: 'Angular',
    },
    {
      id: 3,
      name: 'Diana',
      age: 28,
      skill: 'Vue',
    },
  ];
  const personList = persons.map((person) => (
    <Person key={person.id} person={person} />
  ));
  //index as key may cause problems if we do sorting with this list
  //adding an item at the start of list or sorting may cause values to be 
  //overwritten 
  //can use index as key if all below 3 conditions are met:
  //1: The items in your list does not have a unique id
  //2: The list is a static list and will not change. No adding or removing items
  //3: The list will never be reordered or filtered
  const nameList = names.map((name, index) => (
    <h2 key={index}>
      {index}: {name}
    </h2>
  ));
  return <div>{nameList}</div>;
}

export default NameList;
