import React, { Component } from 'react';

import BookList from '../containers/book-list.js';
import BookDetail from '../containers/book_detail.js';

class App extends Component {


  render() {
    return (
      <div>
		<BookList />
		<BookDetail />
      </div>
    );
  }
}

export default App;