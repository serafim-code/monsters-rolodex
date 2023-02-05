import { useEffect, useState } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

const App = () => {
    const [searchField, setSearchField] = useState('');
    const [monsters, setMonsters] = useState([]);
    const [filteredMonsters, setFilteredMonsters] = useState(monsters);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(resp => resp.json())
            .then(users => setMonsters(users));
    }, []);

    useEffect(() => {
        const newFilteredMonsters = monsters.filter(monster => {
            const currentMonsterName = monster.name.toLowerCase();
            return currentMonsterName.includes(searchField);
        });
        setFilteredMonsters(newFilteredMonsters);
    }, [monsters, searchField])
    const onSearchChange = (event) => {
        const searchString = event.target.value.toLowerCase();
        setSearchField(searchString);
    }

    return (
        <div className="App">
            <h1 className="app-title">Monsters rolodex</h1>
            <SearchBox
                className="monsters-search-box"
                placeholder="search monsters"
                onChangeHandler={ onSearchChange }/>
            <CardList monsters={ filteredMonsters }/>
        </div>
    )
}

export default App;
