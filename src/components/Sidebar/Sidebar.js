import './Sidebar.css';
import SidebarItem from './SidebarItem/SidebarItem';

const sidebarTitles = [
    {
      "title": 'Inventory',
      'value': 'inventory',
      "linkTo": "/inventory"
    },
    {
      "title" : 'Dogs',
      'value': 'dogs',
       "linkTo": "/dogs"
    },
    {
      "title": 'Cats',
      'value': 'cats',
      "linkTo": "/cats"
    },
    {
      "title": 'Other',
      'value': 'other',
      "linkTo": "/other"
    },
    {
      "title": 'Employees',
      'value': 'employees',
      "linkTo": "/employees"
    },
    {
      "title": 'Volunteers',
      'value': 'volunteers',
      "linkTo": "/volunteers"
    },
    {
      "title": 'About',
      'value': 'about',
      'linkTo': '/about'
    }
]

function Sidebar({ clickFunc }) {
  return (
    <>
        <nav className="sidebar" id="dashboardSidebar">
            <ul className='nav'>
            <li className="nav-item profileInfo">Profile Item</li>
            {sidebarTitles.map((sidebarItem) => {
                return <SidebarItem item={sidebarItem} key={sidebarItem.title}/>;
            })}
            </ul>
            {/* <ToggleButton /> */}
        </nav>
    </>
  );
}

export default Sidebar;