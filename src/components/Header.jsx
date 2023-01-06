import {Link} from 'react-router-dom';

function Header () {
    
    return (
        <nav className="#6a1b9a purple darken-3">
            <div className="nav-wrapper">
                <a href="https://stanislaviw.github.io/reactFortniteShop" className="brand-logo">Fortnite Shop</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to="/">Shop</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contacts">Contacts</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export {Header}