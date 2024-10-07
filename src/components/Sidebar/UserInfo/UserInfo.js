import { FaUserCircle } from "react-icons/fa";
import './UserInfo.css';

function UserInfo({ item }) {
  return (
    <> 
        <li className="profileInfo" key="userInfo">
            <FaUserCircle />
            <div>System Admin</div>
        </li>
    </>
  );
}

export default UserInfo;