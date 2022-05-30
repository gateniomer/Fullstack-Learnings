import {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

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
    //Destructuring
    const {monsters,searchField} = this.state;
    const {onSearchChanged} = this;

    const filteredMonsters = monsters.filter(monster=>monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
        <SearchBox 
        onChangeHandler={this.onSearchChanged} 
        placeholder='search monsters'
        className='monsters-search-box'/>
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
