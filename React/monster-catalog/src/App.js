import {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters: []
    }
    console.log('Constructor');
  }
componentDidMount(){
  console.log('componentDidMount');
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => this.setState(()=>{
     return {monsters: data}
  },()=>{
    console.log(this.state);
  }))
  .catch(err => console.log(err))
}
  render(){
    console.log('render');
    return (
      <div className="App">
        {
        this.state.monsters.map(monster => <h1 key={monster.id}>{monster.name}</h1>)
        }
      </div>
    );
  }
}

export default App;
