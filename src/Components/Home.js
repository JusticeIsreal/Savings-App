import cardDetails from "./data";
import { FaHome, FaChartLine, FaChartBar } from "react-icons/fa";
import {
  MdAccountBalance,
  MdContactSupport,
  MdOutlineMenuOpen,
} from "react-icons/md";
import { IoMdSettings, IoIosWifi } from "react-icons/io";
import "./compStyle.css";

function Home() {
  let yy = cardDetails.reduce(function (acc, card) {
    return acc + card.amount;
  }, 0);
  parseInt(yy);
  return (
    <section className="sidebar">
      {/*HOME SIDE BAR */}
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
              <li className="support-settings support">
                <span>
                  <MdContactSupport />
                </span>
                Support
              </li>
            </ul>
          </nav>
          <nav>
            <ul>
              <li className="support-settings settings">
                <span>
                  <IoMdSettings />
                </span>
                Settings
              </li>
            </ul>
          </nav>
        </div>
      </main>

      {/* HOME PAGE */}
      <div className="home">
        <h4>My cards</h4>
        <div className="cardMap">
          {cardDetails.map((card) => (
            <div className="card" key={card.id}>
              <img src={card.cardImg} alt="" className="card-img" />
              <img src={card.bankName} alt="" className="bankName" />
              <h3 className="card-type">{card.savingsType}</h3>
              <p className="card-network">
                <IoIosWifi />
              </p>
              <h1 className="card-amount">${card.amount}</h1>
              <p className="card-number">{card.cardNumber}</p>
              <p className="card-expiration">{card.expiration}</p>
              <h5 className="card-cardHolder">{card.cardHolderName}</h5>
            </div>
          ))}
        </div>
        <div className="homeLowerPart">
          <div className="totalSavings">
            <p>Total Savings</p>
            <h2> ${yy}</h2>
          </div>
          <div className="savings-stats">
            <div className="savings-heading">
              <div className="number-of-wallets">
                <h3>Savings</h3>
                <p>number of wallets</p>
              </div>
              <div className="settings-icon">
                <MdOutlineMenuOpen />
              </div>
            </div>
            <div className="cardMa">
              {cardDetails.map((card) => (
                <div className="savings-card" key={card.id}>
                  <h3 className="card-type">{card.savingsType}</h3>
                  <h1 className="card-amount">${card.amount}</h1>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
