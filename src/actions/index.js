// redux action creator that creates an action and returns the object to all the reducers
export default function selectBook(book){
	// console.log(book.title);
	return {
		type: 'BOOK_SELECTED',
		payload: book
	};
}