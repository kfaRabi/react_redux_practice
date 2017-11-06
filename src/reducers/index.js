import { combineReducers } from 'redux';
import BooksListReducer from './red_books_list';
import SelectedBookReducer from './red_selected_book'

const rootReducer = combineReducers({
// crating a redux application level state called books using the BooksReducer
// Now, if the BooksReducer gets updated our books state will get updated too. 
  books : BooksListReducer,
  selectedBook: SelectedBookReducer,
});

export default rootReducer;
