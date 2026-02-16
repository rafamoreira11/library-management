import Logo from '../../assets/icon-open-book.svg'
import Plus from '../../assets/plus-icon.png'
import './header.css'


function Header() {

  return (
    
        <header>
            <article className="header-logo">
                <img src={Logo} alt="logo" className="heaer-logo-img" />
                <h1 className="header-logo-name">Minha Biblioteca</h1>
            </article>
            <article className="header-button">
                <img src={Plus} alt="plus-icon" />
                <p className="header-button-text">Adicionar Livro</p>
            </article>
        </header>
  )
}

export default Header

