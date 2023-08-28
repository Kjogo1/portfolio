import "./navbar.css";
import List from "./List";
function Navbar() {

    const toggleMenu = () => {
        const menu = document.querySelector('.menu-links')
        const icon = document.querySelector('.hamburger-icon')
        menu.classList.toggle('open')
        icon.classList.toggle('open')
    }
  return (
    <>
      <nav id="desktop-nav">
        <div className="logo">Mon David</div>
        <ul className="nav-link">
          <List link="#about" name="About" />
          <List link="#experience" name="Experience" />
          <List link="#projects" name="Projects" />
          <List link="#contact" name="Contact" />
        </ul>
      </nav>
      
      <nav id="hamburger-nav">
        <div className="logo">Mon David</div>
        <div className="hamburger-menu">
          <div className="hamburger-icon" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="menu-links" onClick={toggleMenu}>
              <List link="#about" name="About" />
              <List link="#experience" name="Experience" />
              <List link="#projects" name="Projects" />
              <List link="#contact" name="Contact" />
            </div>
      </nav>
    </>
  );
}

export default Navbar;