import { Component } from "react";
import { Monster } from "../../App";

import './card.styles.css';

type Props = {
  monster:Monster
}

class Card extends Component<Props>{
  render(){
    const {id,name,email} = this.props.monster;
    return(
      <div className='card-container' key={id}>
          <img alt={`monster ${name}`}src={`https://robohash.org/${id}?set=set2&size=180x180`} ></img>
          <h2>{name}</h2>
          <p>{email}</p>
        </div>
    )
  }
}

export default Card;