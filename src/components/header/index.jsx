import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="bg-gray-800 px-8 py-4 flex items-center justify-between sticky top-0 z-20">
      <div className="logo">
        <Link to="/">
          <img
            src="/logo.svg"
            alt="logo"
            className="h-9 rounded-md shadow-[0_6px_20px_rgba(0,0,0,0.3)]"
          />
        </Link>
      </div>
      <nav className="flex">
        <Link to="/login" className="ml-4 text-black font-semibold">Iniciar Sessão</Link>
        <Link to="/viagens" className="ml-4 text-black font-semibold">Viagens</Link>
        <Link to="/ambulancias" className="ml-4 text-black font-semibold">Ambulâncias</Link>
        <Link to="/usuarios" className="ml-4 text-black font-semibold">Usuários</Link>
        <Link to="/saiba-mais" className="ml-4 text-black font-semibold">Saiba Mais</Link>
        <Link to="/suporte" className="ml-4 text-black font-semibold">Suporte</Link>
      </nav>
    </header>
  )
}

export default Header
