import logo from './webshelflogo.svg';

export const AppHeader = () => {
    return (
        <div className='h-[50px] py-2 px-10 flex justify-between items-center border-b-2 border-rose-500 bg-white text-rose-800'>
            <div className="flex items-center">
                <span className="flex items-center text-lg font-bold cursor-pointer">
                    <img className="h-[25px] mr-[5px]" src={logo} alt="Logo Webshelf"  />
                    <span>Webshelf</span>
                </span>
                <h5 className="ml-2"> - Your online reading platform</h5>
            </div>
        </div>
    )
}