import ButtonPrimary from '../../Button/ButtonPrimary';
import ButtonTerciary from '../../Button/ButtonTerciary';

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
                        <ButtonTerciary>More</ButtonTerciary>
                        <ButtonPrimary>Read</ButtonPrimary>
                    </div>
                </div>
            </div>
        </div>
    );
}