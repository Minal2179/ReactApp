import React, {Component} from 'react';

class ResultItem extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="media">
        <div className="media-left">
          <span className="media-object glyphicon glyphicon-user" />
        </div>
        <div className="media-body">
          <h4 className="media-heading">
            {this.props.name}
          </h4>
          <p>{this.props.comments}</p>
        </div>
        <hr/>
      </div>

    );
  }
}

export default ResultItem;
