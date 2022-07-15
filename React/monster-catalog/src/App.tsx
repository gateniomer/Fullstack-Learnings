import {ChangeEvent, Component} from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import { getData } from './utils/data.utils';

type Monster = {
  id: string,
  name: string,
  email: string
}

type State = {
  monsters: Monster[],
  searchField: string
}

class App extends Component<{},State> {
  constructor(props: {}){
    super(props);

    this.state = {
      monsters: [],
      searchField: ''
    }
    console.log('Constructor');
  }
componentDidMount(){
  console.log('componentDidMount');
  // fetch('https://jsonplaceholder.typicode.com/users')
  // .then(response => response.json())
  // .then(data => this.setState(()=>{
  //    return {monsters: data}
  // }))
  // .catch(err => console.log(err))
  const fetchMonsters = async () =>{
    const data = await getData<Monster[]>('https://jsonplaceholder.typicode.com/users');
    this.setState(()=>({monsters:data}))
  }
  fetchMonsters();
}

onSearchChanged = (event: ChangeEvent<HTMLInputElement>) => {
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
