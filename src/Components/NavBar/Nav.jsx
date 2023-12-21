import './Nav.css';
import { Link } from 'react-router-dom';
const Nav = () => {
  return (
    <div>
    <nav className="navbar">
      <ul className="nav-menu">
        <li className="nav-item">
          <Link className="nav-link" to={'./HomePage'}>HOME</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to={'/'}>LOGIN</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={'./Signin'}>SIGN UP</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={'./AboutUs'}>ABOUT</Link>
        </li>
       
      </ul>
    </nav>



  <div class="area"></div>
  <nav class="main-menu">
    <ul>
      <li>
        <a href="https://jbfarrow.com">
          <i class="fa fa-home fa-2x"></i>
          <span class="nav-text">
            Home
          </span>
        </a>

      </li>
      <li class="has-subnav">
        <a href="#">
          <i class="fa fa-globe fa-2x"></i>
          <span class="nav-text">
            Report
          </span>
        </a>

      </li>
      <li class="has-subnav">
        <a href="#">
          <i class="fa fa-comments fa-2x"></i>
          <span class="nav-text">
            Message
          </span>
        </a>

      </li>
     
      <li>
        <a href="#">
          <i class="fa fa-film fa-2x"></i>
          <span class="nav-text">
            Shops
          </span>
        </a>
      </li>
      <li>
        <a href="#">
          <i class="fa fa-book fa-2x"></i>
          <span class="nav-text">
            Customer ref
          </span>
        </a>
      </li>
      <li>
        <a href="#">
          <i class="fa fa-cogs fa-2x"></i>
          <span class="nav-text">
            Settings
          </span>
        </a>
      </li>
      
      <li>
        <a href="#">
          <i class="fa fa-info fa-2x"></i>
          <span class="nav-text">
            Documentation
          </span>
        </a>
      </li>
    </ul>

    <ul class="logout">
      <li>
        <a href="#">
          <i class="fa fa-power-off fa-2x"></i>
          <span class="nav-text">
            Logout
          </span>
        </a>
      </li>
    </ul>
  </nav>
  




</div>

  );
}

export default Nav;