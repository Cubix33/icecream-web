import './Navbar.css';
import logo from '../assets/chillis.png'; // use correct path based on your uploaded file

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Chillz logo" className="logo-img" />
      </div>
      <ul className="navbar-menu">
        <li>Home</li>
        <li>Shop</li>
        <li>Delivery</li>
        <li>Contact</li>
      </ul>
      <button className="order-btn">Order Your Ice-cream</button>
    </nav>
  );
}

export default Navbar;
