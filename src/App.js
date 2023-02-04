import { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

class App extends Component {
    constructor() {
        super();

        this.state = {
            monsters: [],
            searchField: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(resp => resp.json())
            .then(users => this.setState(
                () => ({ monsters: users }),
            ));
    }

    filterMonsters = (event) => {
        const searchField = event.target.value.toLowerCase();
        this.setState(() => ({ searchField }))
    }

    render() {
        const { monsters, searchField } = this.state;
        const { filterMonsters } = this;

        const filteredMonsters = monsters.filter(monster => {
            const currentMonsterName = monster.name.toLowerCase();
            return currentMonsterName.includes(searchField);
        });

        return (
            <div className="App">
                <h1 className="app-title">Monsters rolodex</h1>
                <SearchBox
                    className="monsters-search-box"
                    placeholder="search monsters"
                    onChangeHandler={ filterMonsters }/>
                <CardList monsters={ filteredMonsters }/>
            </div>
        );
    }
}

export default App;
