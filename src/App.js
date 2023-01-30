import { Component } from 'react';
import './App.css';

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
                <input
                    className="search-box"
                    type="search"
                    placeholder="search monsters"
                    onChange={ filterMonsters }/>
                {
                    filteredMonsters.map((monster, index) => <h1 key={ index }>{ monster.name }</h1>)
                }
            </div>
        );
    }
}

export default App;
