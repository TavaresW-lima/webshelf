function ButtonTerciary(props: any) {
    const { children } = props;

    return (
        <button 
        className="py-2 px-4 text-rose-500 font-bold text-sm hover:text-rose-800"
        >
            { children }
        </button>
    )
}

export default ButtonTerciary;