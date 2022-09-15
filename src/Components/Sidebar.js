import {
  FaHome,
  FaChartLine,
  FaChartBar,
  FaEnvelope,
  FaBell,
} from "react-icons/fa";
import { MdAccountBalance, MdContactSupport } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import "./compStyle.css";
const logo =
  "https://res.cloudinary.com/isreal/image/upload/v1663199426/banking%20app/AJIS_FILE_1_arvnbd_dqrxio.png";
const profileImage =
  "https://res.cloudinary.com/isreal/image/upload/v1663203541/banking%20app/IMG_4050-removebg-preview_krtdts_tgprdd.png";

function Sidebar() {
  return (
    <section className="sidebar-topbar">
      <div className="topbar-container">
        <div className="sidebar-logo">
          <img src={logo} alt="logo" />
        </div>

        <input type="text" placeholder="Search..." />
        <div className="topbar-icons-img">
          <div className="icon-top">
            <FaEnvelope />
          </div>
          <div className="icon-top">
            <FaBell />
          </div>
          <div className="icon-top">
            <img src={profileImage} alt="logo" />
          </div>
        </div>
      </div>
      <main className="sidebar-container">
        <h1>Home</h1>
        <div className="sidebar-nav-container">
          <nav>
            <ul style={{ listStyle: "none" }}>
              <li>
                <span>
                  <FaHome />
                </span>
                Home
              </li>

              <li>
                <span>
                  <FaChartLine />
                </span>
                Expenses
              </li>
              <li>
                <span>
                  <FaChartBar />
                </span>
                Transactions
              </li>
              <li>
                <span>
                  <MdAccountBalance />
                </span>
                Account
              </li>
              <li>
                <span>
                  <MdContactSupport />
                </span>
                Support
              </li>
            </ul>
          </nav>
          <nav>
            <ul>
              <li>
                <span>
                  <IoMdSettings />
                </span>
                Settings
              </li>
            </ul>
          </nav>
        </div>
      </main>
    </section>
  );
}

export default Sidebar;
