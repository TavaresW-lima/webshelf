import { useEffect, useState } from 'react';
import { Book } from '../../model/Book';
import { BookCard } from './bookCard/BookCard';
import axios from 'axios';
import { API_BASE_URL } from '../../config/api.conf';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch, faSpinner } from '@fortawesome/free-solid-svg-icons';

const BOOK_LIST_URL = `${API_BASE_URL}/book`;

library.add(faCircleNotch)

export const BookList = (props: any) => {

    const [bookList, setbookList] = useState<Book[] | null>(null);

    useEffect(() => {
        fetchBooks();
    }, []);

    async function fetchBooks() {
        const response = await axios(BOOK_LIST_URL);
        const books = await response.data;
        setbookList(books);
    };

    if(bookList != null) {
        return(
            <div className="p-2 grid grid-cols-5 gap-4">
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
    } else {
        return (
            <div className="w-full h-screen flex items-center justify-center text-5xl text-rose-800">
                <FontAwesomeIcon icon={'circle-notch'} spin/>
            </div>
        )
    }
}