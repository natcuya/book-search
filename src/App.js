import React from "react";
import "./App.css";

import Header from "./Header/Header.js";
import Search from "./Search/Search.js";
import BookList from "./BookList/BookList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }

  handleSearch = (e, searchTerm, printType, bookType) => {
    e.preventDefault();
    console.log(searchTerm, "from handel", printType, bookType);
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=AIzaSyDGLQfHn1YQ3EJZI0WkmJDh3vvJiuaUV6g`)
    .then(res => res.json())
    .then(books => {
      const booksArr = books.items;
      this.setState({
        books: booksArr
      });
    });
};

render() {
  return (
    <>
      <Header />
      <Search
        handleSearch={(e, searchTerm, printType, bookType) =>
          this.handleSearch(e, searchTerm, printType, bookType)
        }
      />
      <BookList books={this.state.books} />
    </>
  );
}
}

export default App;