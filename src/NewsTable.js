import React, { Component } from 'react';
import NewsCategoryRow from './NewsCategoryRow.js';
import NewsRow from './NewsRow.js';

export default class NewsTable extends React.Component {
    render() {
      const filterText = this.props.filterText;
      const inStockOnly = this.props.inStockOnly;
  
      const rows = [];
      let lastCategory = null;
  
      this.props.news.forEach((product) => {          
        /* 
	if (news.indexOf(filterText) === -1) {
           return;
         }  
        */
        rows.push(
          <NewsRow
            news={news}
            key={news.index}
          />
        );

      });
  
      return (
        <table>
          <thead>
            <tr>
              <th>Author</th>
              <th>Title</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      );
    }
  }
