import Card from '../card/card.component';
import './card-list.styles.css';

const CardList = ({ monsters }) => (
  <div className="card-list">
    { monsters.map((monster, index) => (<Card key={ index } monster={ monster }/>)) }
  </div>
)

export default CardList;