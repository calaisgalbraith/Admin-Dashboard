import './Sidebar.css';
import SidebarItem from './SidebarItem';

const sidebarTitles = [
    {
      "title": 'Inventory',
      'value': 'inventory'
    },
    {
      "title" : 'Dogs',
      'value': 'dogs'
    },
    {
      "title": 'Cats',
      'value': 'cats'
    },
    {
      "title": 'Other',
      'value': 'other'
    },
    {
      "title": 'Employees',
      'value': 'employees'
    },
    {
      "title": 'Volunteers',
      'value': 'volunteers'
    },
    {
      "title": 'About',
      'value': 'about'
    }
  ]

function Sidebar() {
  return (
    <>
        <nav className="sidebar" id="dashboardSidebar">
            <ul className='nav'>
            {sidebarTitles.map((sidebarItem) => {
                return <SidebarItem item={sidebarItem} key={sidebarItem}/>;
            })}
            </ul>
        </nav>
    </>
  );
}

export default Sidebar;