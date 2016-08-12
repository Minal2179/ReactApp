
import 'babel-polyfill';
import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import configureStore from './store/configureStore';

const store=configureStore();

ReactDom.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>, document.getElementById('app'));




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
