import './SidebarItem.css';
import { Link } from "react-router-dom";

function SidebarItem({ item, handleClickFunc, selectedTab }) {

  return (
    <> 
        <li className='nav-item' active={(selectedTab === item.title).toString()}>
            <Link to={item.linkTo} onClick={handleClickFunc}>
              <span className='sidebarIcon'>{item.icon}</span>
              <span className='sidebarTitle'>{item.title}</span>
            </Link>
        </li>
    </>
  );
}

export default SidebarItem;