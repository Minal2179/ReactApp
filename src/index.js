/* eslint-disable no-console */
// import React from 'react';
// import ReactDom from 'react-dom';
//
// const App = function(){
//   return <div>hii</div>;
// }
//
// ReactDom.render(<App/>, document.getElementById('app'));

import React, {Component} from 'react';
import ReactDom from 'react-dom';
import SearchBar from './searchBar';

class App extends Component{
  render(){
    return(
      <div>
        <SearchBar />
      </div>
    );
  }
}

ReactDom.render(<App/>, document.getElementById('app'));
