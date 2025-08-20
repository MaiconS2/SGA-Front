import { Link } from 'react-router-dom'
import './header.css'

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/"> <img src="/logo.svg" alt="logo" /> </Link>
      </div>
      <nav className="site-nav">
        <Link to="/login">Iniciar Sessão</Link>
        <Link to="/viagens">Viagens</Link>
        <Link to="/ambulancias">Ambulâncias</Link>
        <Link to="/usuarios">Usuários</Link>
        <Link to="/saiba-mais">Saiba Mais</Link>
        <Link to="/suporte">Suporte</Link>
      </nav>
    </header>
  )
}

export default Header

