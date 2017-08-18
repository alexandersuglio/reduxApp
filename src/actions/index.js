export function selectBook(book) {
	console.log('You picked out ', book.title);

return {

type: 'BOOK_SELECTED',
payload: book
	};

}


