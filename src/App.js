import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FilterableNewsTable from './FilterableNewsTable.js';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {    
    console.log('Mount')
    fetch("https://newsapi.org/v2/everything?q=bitcoin&from=2018-09-05&sortBy=publishedAt&apiKey=974192cdd1664119b77af9b5442a0ae5")
      .then(res => res.json())
      .then(
        (result) => {
          console.log("API RESPONSE :::",result)
          this.setState({
            isLoaded: true,
            items: result.articles
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  componentWillUnmount(){
    console.log('Unmount')
  }

  render() {
    console.log("Render")
    return (
      <div className="App">
        <FilterableNewsTable news={this.state.items} />        
      </div>
    );
  }
}
