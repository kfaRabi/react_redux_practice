import React from 'react';
import {connect} from 'react-redux'; // to establish a bridge btn react and redux
import {bindActionCreators} from 'redux';

import selectedBook from '../actions/index';

class BooksList extends React.Component {

  constructor(props) {
    super(props);
  }

  renderList(){
  	return this.props.books.map(
  		book => {
  			return(
  				<li onClick = { () => this.props.selectBook(book) } key = {book.title}> {book.title} </li> 
  			);
  		}
  	);
  }

  render() {

    return (
      <div>
      	<ul>
      		{this.renderList()}
      	</ul>
      </div>
    );
  }
}

// crate function to map redux application level state with this containers props
// takes the global redux state as argument and assigns appropriate reducers to this cotainers props
function mapStateToProps(reduxState){
	return {
		books: reduxState.books
// 		  ^^		^^		^^
//		props:   golobal	BooksReducer(se)
//				redux state
	};
}


// An action creator that passes/dispatches the created action on a perticular event(i.e onClick) to all the reducers
// so that they can make use of this event if they want to
function mapDispatchToProps(dispatch){
	// bind the action creator coded in the ../actions/index.js file to this containers props
	// and then dispathc the action to every reducers.
	return bindActionCreators({selectBook: selectedBook}, dispatch);
}

// by connecting mapStateToProps and mapDispatchToProps we are upgrading our
// react component to a container. connect method makes sure that this container
// get access to the actionCreator and the required global state as props
export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
