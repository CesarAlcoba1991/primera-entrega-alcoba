import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="nav-estilo">
      <Link to="/inicio" className="link"><h2>Biscotti di Angi</h2></Link>
      <ul className="nav-list">
        <li>
          <Link to="/tortas" className="link">Tortas</Link>
        </li>
        <li>
          <Link to="/porciones" className="link">Porciones</Link>
        </li>
        <li>
          <Link to="/cupcake" className="link">CupCake</Link>
        </li>
        <li><Link to="/carrito" className="link">Mi Compra 🛒:0</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
