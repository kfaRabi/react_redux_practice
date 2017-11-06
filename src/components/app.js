import React, { Component } from 'react';
import BooksList from '../containers/con_books_list';
import SelectedBook from '../containers/con_selected_book';


export default class App extends Component {
  render() {
    return (
      <div>
      	<BooksList />
      	<SelectedBook />
      </div>
    );
  }
}
