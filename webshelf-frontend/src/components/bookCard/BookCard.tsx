import './bookCard.css';

export const BookCard = (props: any) => {
    return (
        <div className='book-card'>
            <div className="row no-gutters w-100">
                <div className='col-4 d-flex align-items-center'>
                    <img className="book-cover me-3"src={props.coverImage} alt="" />
                    <div className='d-flex flex-column text-truncate'>
                        <div className='title mb-2 text-truncate'>{props.title}</div>
                        <span className='author'>{props.author}</span>
                    </div>
                </div>
                <div className='col-4 ms-auto d-flex justify-content-end align-items-center'>
                    <div className="isbn-container d-flex flex-column align-items-end me-4">
                        <small>ISBN</small>
                        <span>{props.isbn}</span>
                    </div>
                    <button className='btn btn-outline-primary'>Read</button>

                </div>
        </div>
        </div>
    );
}