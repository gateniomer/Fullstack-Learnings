import { Component,ChangeEventHandler } from "react";

import './search-box.styles.css';

type Props = {
  className:string,
  placeholder?:string,onChangeHandler:ChangeEventHandler<HTMLInputElement>
}

class SearchBox extends Component<Props>{
  
  render(){
    return(
      <input 
      className={`search-box ${this.props.className}`}
      type='search' 
      placeholder={this.props.placeholder}
      onChange={this.props.onChangeHandler}/>
    )
  }
}

export default SearchBox;