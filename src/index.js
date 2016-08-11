/* eslint-disable no-console */
// import React from 'react';
// import ReactDom from 'react-dom';
//
// const App = function(){
//   return <div>hii</div>;
// }
//
// ReactDom.render(<App/>, document.getElementById('app'));
//------------------------------------------
// import React, {Component} from 'react';
// import ReactDom from 'react-dom';
// import SearchBar from './searchBar';
//
// class App extends Component{
//   constructor(props){
//     super(props);
//     this.state = {label: 'Search Term'}
//   }
//   render(){
//     return(
//       <div>
//         <SearchBar label={this.state.label}/>
//       </div>
//     );
//   }
// }
//
// ReactDom.render(<App/>, document.getElementById('app'));
//-----------------------------------------------------------
import 'babel-polyfill';
import React from 'react';
import ReactDom from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from './routes';

ReactDom.render(<Router history={browserHistory} routes={routes} />, document.getElementById('app'));
