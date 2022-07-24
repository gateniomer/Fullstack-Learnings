import {Component} from 'react';

import './card-list.styles.css';

import Card from '../card/card.component'
import type {Monster} from '../../App';

type Props = {
  monsters:Monster[]
}

class CardList extends Component<Props> {
  render(){
    const {monsters} = this.props;
    return (
      <div className='card-list'>
        {monsters.map(monster=> <Card key={monster.id} monster={monster}/>)}
      </div>
    )
  }
}

export default CardList;