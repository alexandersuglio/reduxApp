import React, {Component} from 'react';
import { connect } from 'react-redux';
import {selectBook} from '../actions/index.js';
import {bindActionCreators} from 'redux';

class BookList extends Component {
	
	renderList() {

return this.props.books.map((book) => {

return (

<li key={book.title} 
onClick={() => this.props.selectBook(book)}
className="list-group-item"> {book.title} 
</li>
	
	);
})
	}

	render() {
		return (
// console.log(this.props.asdf)
<ul className="list-group col-sm-4">
{this.renderList()}
</ul>

		)
	}
}

//This is was makes the component a container
//if state ever changes, the entire function rerenders
function mapStateToProps(state) {
//Whatever gets returned will show up as props inside of BookList
return {
// asdf: '123'
books: state.books

};

}

//special syntax
//Rect-redux
//takes function and component and makes a continaer
//contianer is a component which is aware of the state contained by redux

//anythin greturned to this function will end up as porops on the booklist container
function mapDispatchToProps(dispatch){

	//whenever select book is called the result should be passed to all of our reducers
	//dispatch receives all actions, and spits them all back out to reducers 
	return bindActionCreators({selectBook: selectBook}, dispatch)
}

// promote booklist from a component to a container- it needs to know about this new dispatch method, selectBook. Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);