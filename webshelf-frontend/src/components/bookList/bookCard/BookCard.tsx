import './bookCard.css';

export const BookCard = (props: any) => {
    return (
        <div className='book-card'>
            <div className="book-cover-container">
                <img className="book-cover"src={props.coverImage} alt="" />
            </div>
            <div className="book-info">
                <div className='w-100 d-flex align-items-center'>
                    <div className='d-flex flex-column text-truncate'>
                        <span className='title text-truncate'>{props.title}</span>
                        <span className='author'>{props.author}</span>
                    </div>
                </div>
                <div className='w-100 ms-auto d-flex justify-content-between align-items-center mt-1'>
                    <div className="isbn-container d-flex flex-column align-items-start me-2">
                        <small>ISBN</small>
                        <span>{props.isbn}</span>
                    </div>
                    <div className="d-flex">
                        <button className='btn btn-link'>More</button>
                        <button className='btn btn-outline-primary'>Read</button>
                    </div>
                </div>
            </div>
        </div>
    );
}