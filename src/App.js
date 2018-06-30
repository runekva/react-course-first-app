import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 24 },
      { name: 'Manu', age: 25 },
      { name: 'Rune', age: 29 },
    ],
    showPersons: false
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: 24 },
        { name: "Heimdal", age: 25 },
        { name: 'Rune', age: 23 },
      ]
    })
  };

  togglePersonsHandler = () => {
    this.setState({ showPersons: !this.state.showPersons })
  }

  deletePersonsHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div >
          {
            this.state.persons.map( (p,i) => {
              return <Person 
                key={i} 
                name={p.name} 
                age={p.age}
                click={() => this.deletePersonsHandler(i)}/>
            })
            }
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, Im Rune</h1>
        <button style={style}
          onClick={this.togglePersonsHandler}>Toggle persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
