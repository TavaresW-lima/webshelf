function ButtonPrimary(props: any) {

    const { children } = props;

    return (
        <button 
        className="py-2 px-4 bg-rose-500 text-white font-semibold rounded-lg shadow-md text-sm mx-1
                    hover:bg-rose-800 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:ring-opacity-75"
        >
            { children }
        </button>
    );
}

export default ButtonPrimary;