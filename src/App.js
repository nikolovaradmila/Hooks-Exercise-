import React, { useState } from 'react';
 
import './App.css';

export default () => {
const [age, setAge] = useState(29);
const [name, setName] = useState('Radmila');

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <p>
            Name:
             <input type="text"
             value={name}
             onChange={(e) => setName(e.target.value)}
             ></input>
          </p>

          <p>Age: {age}</p>
          <button onClick={() => setAge(age + 1)}>Increment age by one</button>

          <p>Pesonal data: Age: {age}, Name : {name}</p>
        
        </div>
      </header>
    </div>
  );
}
 






