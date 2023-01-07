import {Link} from 'react-router-dom';

function Footer () {
    return (
        <footer className="page-footer #6a1b9a purple darken-3">
          <div className="footer-copyright">
            <div className="container">
              <div className="footer-links">
                <Link className="footer-links-item" to="/">Shop</Link>
                <Link className="footer-links-item" to="/about">About</Link>
                <Link className="footer-links-item" to="/contacts">Contacts</Link>
              </div>
              <span>© {new Date().getFullYear()} Stanislav Ivanov</span>
              <a className="grey-text text-lighten-4 right" href="https://github.com/stanislaviw/reactFortniteShop">Repositorie</a>
            </div>
          </div>
        </footer>
    )
}

export {Footer}