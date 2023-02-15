import { createStore, combineReducers } from 'redux'
import cartReducer from './Reducer/cartReducer'
import notesReducer from './notes/notesReducer'
import selectedReducer from './notes/selectedReducer'
import modalsReducer from './modalsReducer';

	// store pour carte de commande
	// const store = createStore(cartReducer)

	const rootReducer = combineReducers({
		notesReducer: notesReducer,
		cartReducer : cartReducer,
		modalsReducer: modalsReducer,
		selectedReducer: selectedReducer

	})
	const store = createStore(rootReducer)


export default store;