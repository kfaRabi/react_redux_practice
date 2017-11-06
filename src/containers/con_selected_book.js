import React from 'react';
import {connect} from 'react-redux';

class SelectedBook extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

  	if(this.props.selectedBook == null){
  		return (<div> Select a book to get going... </div>);
  	}

    return (
      <div>
      	{"Title: " + this.props.selectedBook.title}
      </div>
    );
  }
}

function mapStateToProps(reduxState){
	return { selectedBook: reduxState.selectedBook };
}

export default connect(mapStateToProps)(SelectedBook);