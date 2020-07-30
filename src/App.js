import React, {useState} from 'react';
import logo from './logo.svg';
import Person from './Persons/Person';
import './App.css';


const app = props =>{
const[personsState, setPersonsState] = useState({
	persons:[
	{name: 'Max', age:20},
	{name: 'Maxi', age:20},
	{name: 'Maxii', age:20}
	]
});
	const items = personsState.persons.map((persons) => 
	<li> <Person name={persons.name} age={persons.age}/> </li>
	);
	
	return(
	<ul>{items}</ul>
)
}
export default app;
