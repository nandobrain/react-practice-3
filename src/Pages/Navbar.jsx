import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div>
          
        <Link to="/">Home</Link> 
        <Link to="/form">Form</Link> 
        {/* <Link to="/profile">Profile</Link> 
        <Link to="/Contact">Contact</Link> */}
      </div>
    )
}