import './Sidebar.css';
import SidebarItem from './SidebarItem/SidebarItem';
import UserInfo from './UserInfo/UserInfo';
import { MdInventory2 } from "react-icons/md";
import { FaDog } from "react-icons/fa";
import { FaCat } from "react-icons/fa";
import { GiTopPaw } from "react-icons/gi";
import { FaUser } from "react-icons/fa";
import { MdVolunteerActivism } from "react-icons/md";
import { FaInfoCircle } from "react-icons/fa";

const sidebarTitles = [
    {
      "title": 'Inventory',
      'value': 'inventory',
      "linkTo": "/inventory",
      "icon": <MdInventory2/>
    },
    {
      "title" : 'Dogs',
      'value': 'dogs',
      "linkTo": "/dogs",
      "icon": <FaDog/>
    },
    {
      "title": 'Cats',
      'value': 'cats',
      "linkTo": "/cats",
      "icon": <FaCat/>
    },
    {
      "title": 'Other',
      'value': 'other',
      "linkTo": "/other",
      "icon": <GiTopPaw/>
    },
    {
      "title": 'Employees',
      'value': 'employees',
      "linkTo": "/employees",
      "icon": <FaUser/>
    },
    {
      "title": 'Volunteers',
      'value': 'volunteers',
      "linkTo": "/volunteers",
      "icon": <MdVolunteerActivism/>
    },
    {
      "title": 'About',
      'value': 'about',
      'linkTo': '/about',
      "icon": <FaInfoCircle/>
    }
]

function Sidebar({ clickFunc }) {
  return (
    <>
        <nav className="sidebar" id="dashboardSidebar">
            <ul className='nav'>
            <UserInfo />
            {sidebarTitles.map((sidebarItem) => {
                return <SidebarItem item={sidebarItem} key={sidebarItem.title}/>;
            })}
            </ul>
        </nav>
    </>
  );
}

export default Sidebar;