import React, {Component} from 'react';
import ResultList from './resultList';
import ComInput from './comInput';
import PostInput from './postIt';


class SearchBar extends Component {

  constructor(props){
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
    this.onClick = this.onClick.bind(this);

    //this.onSubmit = this.onSubmit.bind(this);

    this.state = {term: '', results: []};
  }

  onInputChange(event){
    this.setState({term: event.target.value});
  }
  onClick(event){
    this.setState({
      results:[
        {
          id: 1,
          name: 'Rinu Zachariah',
          comments: 'Hello dear. How r u?'
        },
        {
          id: 2,
          name: 'Minal Shettigar',
          comments: 'Fine'
        },
        {
          id: 3,
          name: 'Mathew Jose',
          comments: 'M mad'
        },
        {
          id: 4,
          name: 'Prerana Karad',
          comments: 'True that'
        },
        {
          id: 5,
          name: 'Gurpreet Arora',
          comments: 'M super'
        },
        {
          id: 6,
          name: 'Xavier Martin',
          comments: 'M hungry. R u?'
        }

      ]
    });
  }


  render() {
    return(
      <div className="container-fluid">

        <PostInput />

        <br/><br/>
        <button className="btn btn-default" onClick={this.onClick}>View your Comments</button>
        <br/><br/>
        <ResultList results={this.state.results} />

        <ComInput />


      </div>
    );

  }
}

export default SearchBar;
