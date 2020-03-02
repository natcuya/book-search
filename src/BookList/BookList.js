import React, { Component } from 'react';

class BookList extends Component {
    render() {
        const books = this.props.books.map((book, i) => {
            return (
                <div className='book' key={i}>
                    <img
                        className='book_cover'
                        src={book.volumeInfo.imageLinks.smallThumbnail}
                        alt={`Cover for ${book.volumeInfo.title}`}
                    />
                    <div className='book_info'>
                        <p>Title: {book.volumeInfo.title}</p>
                        <p>Author: {book.volumeInfo.author}</p>
                        <p>
                            Price: {book.saleInfo.listPrice
                            ? `$${book.saleInfo.listPrice.amount}`
                            : 'Not for sale'}
                        </p>
                        <p>Description: {book.volumeInfo.description}</p>
                    </div>                    
                </div>
            );
        });

        return <div className='book_list'>{books}</div>
    }
}

BookList.defaultProps = {
    books: []
};

export default BookList;