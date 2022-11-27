import { FaEnvelope, FaBell } from "react-icons/fa";
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";

import "./compStyle.css";
const logo =
  "https://res.cloudinary.com/isreal/image/upload/v1663199426/banking%20app/AJIS_FILE_1_arvnbd_dqrxio.png";
const profileImage =
  "https://res.cloudinary.com/isreal/image/upload/v1663203541/banking%20app/IMG_4050-removebg-preview_krtdts_tgprdd.png";

function TopBar() {
  return (
    <>
      <div className="topbar-container">
        <div className="sidebar-logo">
          {/* <img src={logo} alt="logo" /> */}
        </div>

        {/* <input type="text" placeholder="Search..." /> */}
        <div className="topbar-icons-img">
          {/* <div className="icon-top">
            <span>0</span>
            <FaEnvelope />
          </div> */}
          <div className="icon-top">
            <span>0</span>
            <FaBell className="bell-icon" />
          </div>
          <div className="icon-top">
            <img src={profileImage} alt="logo" />
          </div>
          <RiArrowUpSFill className="topbar-account-icon" />
        </div>
      </div>
    </>
  );
}

export default TopBar;
