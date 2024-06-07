import {} from 'react'
import '../sass/styleNav.scss'
import { Link } from 'react-router-dom'
import OndaVerde from '../assets/ondaverde.svg'

const Nav = () => {
    return (
        <>
        <header className='menu'>
            <nav className='nav-menu'>
                <ul>
                    <Link to="/" className="tlink">
                        Home
                    </Link>
                    <Link to="/Projeto" className="tlink">
                        Projeto
                    </Link>
                    <Link to="/Sobre" className="tlink">
                        Sobre
                    </Link>

                    <Link to="/Login" className="tlink">
                        Login
                    </Link>
                </ul>
            </nav>
        </header>
        </>
    )
}

export default Nav