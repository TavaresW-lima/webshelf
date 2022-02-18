import { useEffect, useState } from 'react';
import { Book } from '../../model/Book';
import { BookCard } from './bookCard/BookCard';
import './BookList.css'
import axios from 'axios';

const BOOK_LIST_URL = 'http://127.0.0.1:8080/book';

export const BookList = (props: any) => {

    const [bookList, setbookList] = useState<Book[]>([]);

    useEffect(() => {
        fetchBooks();
    }, []);

    async function fetchBooks() {
        const response = await axios(BOOK_LIST_URL);
        const books = await response.data;
        setbookList(books);
    };

    return (
        <div className="book-list">
            {bookList.map(book => {
                return (
                    <BookCard 
                        key={book.id} 
                        author={book.author}
                        title={book.title}
                        coverImage={book.coverImage}
                        isbn={book.isbn_10}/>
                )
            })}
        </div>
    )
}