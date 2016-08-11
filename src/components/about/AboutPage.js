import React, {Component} from 'react';
import ReactDom from 'react-dom';
import SearchBar from '../common/searchBar';

class about extends Component{
  constructor(props){
    super(props);
    this.state = {label: 'Search Term'};
  }
  render(){
    return(
      <div>
        About page
      </div>
    );
  }
}

export default about;
