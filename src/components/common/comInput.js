import React, {Component} from 'react';
import ResultItem from './resultItem';

class ComInput extends Component{
  constructor(props){
    super(props);

    this.state = {term: '', results: []};
  }
  onSubmit(event){

  }
  render(){

    return(
      <div>
      <form className="form-inline">
        <div className="form-group">
          <input className="form-control" placeholder="Enter your Name" />
        </div>
        <div className="form-group">
          <input className="form-control" placeholder="Enter your Comments" />
        </div>
        <button className="btn btn-default" onSubmit={this.onSubmit}>Submit</button>
      </form>
      </div>
    );
  }
}

export default ComInput;
