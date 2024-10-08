import { useState } from 'react';
import { useLocation } from "react-router-dom";
import './Sidebar.css';
import SidebarItem from './SidebarItem/SidebarItem';
import UserInfo from './UserInfo/UserInfo';
import { FaHome } from "react-icons/fa";
import { MdInventory2 } from "react-icons/md";
import { FaDog } from "react-icons/fa";
import { FaCat } from "react-icons/fa";
import { GiTopPaw } from "react-icons/gi";
import { FaUser } from "react-icons/fa";
import { MdVolunteerActivism } from "react-icons/md";
import { FaHouseUser } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";

const sidebarTitles = [
    {
      "title": 'Dashboard',
      'value': 'dashboard',
      "linkTo": "/",
      "icon": <FaHome/>
    },
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
      "title": 'Fosters',
      'value': 'fosters',
      "linkTo": "/fosters",
      "icon": <FaHouseUser/>
    },
    {
      "title": 'About',
      'value': 'about',
      'linkTo': '/about',
      "icon": <FaInfoCircle/>
    }
]

function Sidebar() {

  // get selected tab when page loaded (added bc if user refreshes on not initial landing page, wrong tab will be selected)
  const location = useLocation()
  function getCurrentSelected() { // TO DO: Make this more effeicent 
    let currentSelected = location.pathname.slice(1); // remove leading '/'
    currentSelected = currentSelected.charAt(0).toUpperCase() + currentSelected.slice(1); // capitalized first letter
    if (currentSelected === '') {
      return 'Dashboard'
    } else {
      return currentSelected
    }
  }

  const [selectedTab, setSelectedTab] = useState(getCurrentSelected())
  function handleClickFunc (e) { // update selected tab (to update sidebar item styling)
    setSelectedTab(e.target.innerHTML)
  }

  return (
    <>
        <nav className="sidebar" id="dashboardSidebar">
            <ul className='nav'>
            <UserInfo />
            {sidebarTitles.map((sidebarItem) => {
                return <SidebarItem
                          item={sidebarItem}
                          key={sidebarItem.title}
                          handleClickFunc={handleClickFunc}
                          selectedTab={selectedTab}
                        />;
            })}
            </ul>
        </nav>
    </>
  );
}

export default Sidebar;