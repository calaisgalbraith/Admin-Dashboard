import './Sidebar.css';
import SidebarItem from './SidebarItem/SidebarItem';
import ToggleButton from './ToggleButton/ToggleButton';

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
        <nav className="sidebar collapse" id="dashboardSidebar">
            <ul className='nav'>
            {sidebarTitles.map((sidebarItem) => {
                return <SidebarItem item={sidebarItem} key={sidebarItem.title}/>;
            })}
            </ul>
            <ToggleButton />
        </nav>
    </>
  );
}

export default Sidebar;