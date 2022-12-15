function Footer () {
    return (
        <footer className="page-footer #6a1b9a purple darken-3">
          <div className="footer-copyright">
            <div className="container">
              <span>© {new Date().getFullYear()} Stanislav Ivanov</span>
              <a className="grey-text text-lighten-4 right" href="https://github.com/stanislaviw/reactFortniteShop">Repositorie</a>
            </div>
          </div>
        </footer>
    )
}

export {Footer}