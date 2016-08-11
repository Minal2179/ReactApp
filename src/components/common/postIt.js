import React, {Component} from 'react';


class PostInput extends Component{
  constructor(props){
    super(props);
  }
  render(){

    return(
      <div>
        <textarea className="form-control" rows="3" placeholder="How are u feeling today?? Type in your ideas" />
      </div>
    );
  }
}

export default PostInput;
