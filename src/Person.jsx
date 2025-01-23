import { useState } from 'react';

function Person() {
    const [person, setPerson] = useState({ fname: "John", lname: "Doe", age: 100 });
  
    const handleIncreaseAge = () => {
      console.log("in handleIncreaseAge (before setPerson call): ", person);
      setPerson({ ...person, age: person.age + 1 });
      // we've called setPerson, surely person has updated?
      console.log("in handleIncreaseAge (after setPerson call): ", person);
    };
  
    // this console.log runs every time the component renders
    // what do you think this will print?
    console.log("during render: ", person);
  
    return (
      <>
        <h1>{person.fname + " " + person.lname}</h1>
        <h2>{person.age}</h2>
        <button onClick={handleIncreaseAge}>Increase age</button>
        <div>
            <input
            type="text"
            value={person.fname}
            onChange={event => setPerson({...person, "fname": event.target.value})}
            />
            <input
            type="text"
            value={person.lname}
            onChange={event => setPerson({...person, "lname": event.target.value})}
            />
        </div>
        </>
    );
}

export default Person;