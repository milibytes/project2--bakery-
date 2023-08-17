import { Link } from 'react-router-dom'


function Header(props) {

  return (
    <header className="main-header">
      <nav className="navBar">
        
        {/* Link is a lot like <a> except it's more react-router specific */}

        <Link to="/home">Home</Link>
        <Link to="/about">About</Link> 
        <Link to="/menu">Menu</Link>
        <Link to="/gallery">Gallery</Link>
      </nav>

    

    </header>
  )
}

export default Header