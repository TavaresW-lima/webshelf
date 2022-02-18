import './AppHeader.css';
import logo from './webshelflogo.svg';

export const AppHeader = () => {
    return (
        <div className='main-wrapper'>
            <div className="d-flex align-items-center">
                <span className="logo-wrapper cursor-pointer">
                    <img className="logo-image" src={logo} alt="Logo Webshelf"  />
                    <span>Webshelf</span>
                </span>
                <h5 className="ms-2"> - Your online reading platform</h5>
            </div>
        </div>
    )
}