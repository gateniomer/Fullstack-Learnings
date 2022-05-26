import {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from './components/card-list/card-list.component';

class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
    console.log('Constructor');
  }
componentDidMount(){
  console.log('componentDidMount');
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => this.setState(()=>{
     return {monsters: data}
  }))
  .catch(err => console.log(err))
}

onSearchChanged = (event)=>{
  const searchField = event.target.value;
  this.setState(()=>{
    return {
      searchField
    }
  })
}

  render(){
    console.log('render');

    //Destructuring
    const {monsters,searchField} = this.state;
    const {onSearchChanged} = this;

    const filteredMonsters = monsters.filter(monster=>monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
        <input className='search-box' type='search' placeholder='type name'onChange={onSearchChanged}/>
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
