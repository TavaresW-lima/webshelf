import { useEffect, useState } from 'react';
import { Book } from '../../model/Book';
import { BookCard } from '../bookCard/BookCard';

export const BookList = (props: any) => {

    const bookUrl = 'http://127.0.0.1:8080/book';
    const [bookList, setbookList] = useState<Book[]>([]);

    useEffect(() => {
        async function fetchData() {
            let response = await fetch(bookUrl);
            let books = await response.json();
            setbookList(books);
        }
        fetchData();
    }, [])

    return (
        <div className="container w-100 d-flex flex-column align-items-center">
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