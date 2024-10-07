import './SidebarItem.css';
import { Link } from "react-router-dom";

function SidebarItem({ item }) {
  return (
    <> 
        <li className='nav-item'>
            <Link to={item.linkTo}>
              <span className='sidebarIcon'>{item.icon}</span>
              <span className='sidebarTitle'>{item.title}</span>
            </Link>
        </li>
    </>
  );
}

export default SidebarItem;