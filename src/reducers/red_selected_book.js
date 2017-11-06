// reducers can take the global state of redux and the action created by action creator as arguments
// with the help of the dispatcher.

// so the main job of any reducer is to work with the state and action passed by the dispatcher
// and return some data which will be combined by the combineReducer so that any container can 
// use this data as props if they want to.
export default function(state = null, action){
	switch(action.type) {
		case 'BOOK_SELECTED':
			return action.payload;
	}
	return state;
}