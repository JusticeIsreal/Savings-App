import cardDetails from "./data";
import { FaHome, FaChartLine, FaChartBar } from "react-icons/fa";
import {
  MdAccountBalance,
  MdContactSupport,
  MdOutlineMenuOpen,
} from "react-icons/md";
import { IoMdSettings, IoIosWifi } from "react-icons/io";
import { HiOutlineArrowsExpand } from "react-icons/hi";
import { Slider } from "@mantine/core";
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
                <p>You have {cardDetails.length} wallets</p>
              </div>
              <div className="settings-icon">
                <MdOutlineMenuOpen />
              </div>
            </div>
            <div className="cardMa">
              {cardDetails.map((card) => (
                <SavingsCard key={card.id} {...card} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Savings card component to create individual routing functionality
function SavingsCard({ savingsType, target, amount }) {
  return (
    <>
      <div className="savings-card">
        <h3 className="card-type">{savingsType}</h3>
        <h1 className="card-amount">
          ${amount} <span style={{ fontWeight: "300" }}> /</span>
          <span
            className="targetAmount"
            style={{ fontWeight: "400", fontSize: "11px" }}
          >
            ${target}
          </span>
        </h1>
        <div className="open-savings-card">
          <HiOutlineArrowsExpand />
        </div>
        <div className="progress-range">
          <span className="progress-range-value">
            {((amount * 100) / target).toFixed(1)}%
          </span>
          <Slider
            defaultValue={((amount * 100) / target).toFixed(1)}
            size="sm"
            // disabled
            thumbSize={1}
            // color="#046493"
          />
        </div>
      </div>
    </>
  );
}

export default Home;
