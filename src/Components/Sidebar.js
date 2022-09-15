import { FaHome, FaChartLine, FaChartBar } from "react-icons/fa";
import { MdAccountBalance, MdContactSupport } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import "./compStyle.css";

function Sidebar() {
  return (
    <main className="sidebar-container">
      <h1>Home</h1>
      <div className="sidebar-nav-container">
        <nav>
          <ul style={{ listStyle: "none" }}>
            <li style={{ backgroundColor: "black", color: "white" }}>
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
            <li className="support-settings">
              <span>
                <MdContactSupport />
              </span>
              Support
            </li>
          </ul>
        </nav>
        <nav>
          <ul>
            <li className="support-settings">
              <span>
                <IoMdSettings />
              </span>
              Settings
            </li>
          </ul>
        </nav>
      </div>
    </main>
  );
}

export default Sidebar;
