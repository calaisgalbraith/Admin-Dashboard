import './SidebarItem.css';

function SidebarItem({ item, handleClick }) {
  return (
    <> 
        <li className='nav-item' sidebarvalue={item.value} onClick={handleClick}>
            {item.title}
        </li>
    </>
  );
}

export default SidebarItem;