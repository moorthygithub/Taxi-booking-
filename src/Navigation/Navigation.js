import "../Navigation/navigation.css";
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';

function Navigation() {
  return (
    <div>
      
      <div class="navigation-bar">
      <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/booking">Booking</Link>
        </li>
        <li>
          <Link to="/map">Availability</Link>
        </li>
    
      </ul>
    </nav>
      </div>
    </div>
  );
}
export default Navigation;
