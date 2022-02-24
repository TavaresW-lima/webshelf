export const BookCard = (props: any) => {
    return (
        <div className="flex flex-col overflow-hidden rounded border border-stale-500 bg-white transition
                        hover:drop-shadow-lg">
            <div className="w-full h-[250px] flex items-center justify-center overflow-hidden border-b">
                <img className="h-full"src={props.coverImage} alt="" />
            </div>
            <div className="p-2">
                <div className='w-100 flex items-center'>
                    <div className='flex flex-col truncate'>
                        <span className='font-bold truncate'>{props.title}</span>
                        <span className='text-[0.9rem]'>{props.author}</span>
                    </div>
                </div>
                <div className='w-full ml-auto flex justify-between items-center mt-1'>
                    <div className="h-full flex flex-col items-start mr-2">
                        <small className="text-rose-500 font-black text-[0.5rem]">ISBN</small>
                        <span>{props.isbn}</span>
                    </div>
                    <div className="flex items-center">
                        <button className="py-2 px-4 text-rose-500 font-bold text-sm mx-1
                                           hover:text-rose-800 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:ring-opacity-75">More</button>
                        <button className="py-2 px-4 bg-rose-500 text-white font-semibold rounded-lg shadow-md text-sm mx-1
                                           hover:bg-rose-800 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:ring-opacity-75">Read</button>
                    </div>
                </div>
            </div>
        </div>
    );
}