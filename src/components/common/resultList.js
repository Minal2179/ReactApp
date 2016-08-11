import React, {Component} from 'react';
import ResultItem from './resultItem';

class ResultList extends Component{
  constructor(props){
    super(props);
  }

  render(){
    const result=this.props.results.map((result)=>{
      return(
        <ResultItem name={result.name} comments={result.comments} key={result.id} />
      );
    });

    return(
      <div>
        {result}
      </div>
    );
  }
}

export default ResultList;
