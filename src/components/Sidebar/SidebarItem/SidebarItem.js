import './SidebarItem.css';

function SidebarItem({ item }) {
  return (
    <> 
        <li className='nav-item'>
            {item.title}
        </li>
    </>
  );
}

export default SidebarItem;