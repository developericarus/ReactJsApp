import React, { Component } from 'react';
import SearchBar from './SearchBar.js';
import NewsTable from './NewsTable.js';

export default class FilterableNewsTable extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        filterText: '',
      };
      
      this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    }
  
    handleFilterTextChange(filterText) {
      this.setState({
        filterText: filterText
      });
    }
  
    render() {
      return (
        <div>
          <SearchBar
            filterText={this.state.filterText}
            onFilterTextChange={this.handleFilterTextChange}
          />
          <NewsTable
            news={this.props.news}
            filterText={this.state.filterText}
          />
        </div>
      );
    }
  }
  
