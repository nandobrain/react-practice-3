import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div>
          
        <Link to="/">Home</Link> 
        <Link to="/Menu">Menu</Link> 
        <Link to="/Contact">Contact</Link>
      </div>
    )
}