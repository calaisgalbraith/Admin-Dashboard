import './SidebarItem.css';
import { Link } from "react-router-dom";

function SidebarItem({ item }) {
  return (
    <> 
        <li className='nav-item'>
            <Link to={item.linkTo}>{item.title}</Link>
        </li>
    </>
  );
}

export default SidebarItem;