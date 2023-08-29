import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css'

const Navbar = (props) => {
  return (
    <nav className={s.nav}>
      <div>
        <NavLink className={ navData => navData.isActive ? s.item : s.active} to="/profile">Profile</NavLink>
      </div>
      <div>
        <NavLink className={ navData => navData.isActive ? s.item : s.active} to="/dialogs">Messages</NavLink>
      </div>
      <div>
        <NavLink className={ navData => navData.isActive ? s.item : s.active} to="/users">Users</NavLink>
      </div>
      <div>
        <NavLink className={ navData => navData.isActive ? s.item : s.active} to="/p">News</NavLink>
      </div>
      <div>
        <NavLink className={ navData => navData.isActive ? s.item : s.active} to="/di">Music</NavLink>
      </div>
      <div>
        <NavLink className={ navData => navData.isActive ? s.item : s.active} to="/pr">Settings</NavLink>
      </div>
    </nav>
  );
}

export default Navbar

