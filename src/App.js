import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Max', age: 24 },
      { id: 2, name: 'Manu', age: 25 },
      { id: 3, name: 'Rune', age: 29 },
    ],
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex( p => p.id === id);
    
    const person = {
      ...this.state.persons[personIndex],
      name: event.target.value
    };

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    })
  };

  togglePersonsHandler = () => {
    this.setState({ showPersons: !this.state.showPersons })
  }

  deletePersonsHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons: persons});
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
            this.state.persons.map( (p,personIndex) => {
              return <Person 
                key={p.id} 
                name={p.name} 
                age={p.age}
                click={() => this.deletePersonsHandler(personIndex)}
                changed={ (event) => this.nameChangedHandler(event, p.id)}/>
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
