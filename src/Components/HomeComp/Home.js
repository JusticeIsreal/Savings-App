import { useState } from "react";
import cardDetails from "./data";
import { FaHome, FaChartLine, FaChartBar, FaMoneyCheck } from "react-icons/fa";
import {
  MdAccountBalance,
  MdContactSupport,
  MdOutlineMenuOpen,
  MdMoney,
} from "react-icons/md";
import { IoMdSettings, IoIosWifi } from "react-icons/io";
import { GrMoney } from "react-icons/gr";
import { HiOutlineArrowsExpand, HiPlus } from "react-icons/hi";
import { VscGraph } from "react-icons/vsc";
import { Slider, RingProgress, Table, Text, Group } from "@mantine/core";
import "../compStyle.css";
import Test from "../WalletComponent/Test";
import { Link } from "react-router-dom";

function Home() {
  // total savings amount
  let yy = cardDetails.reduce(function (acc, card) {
    return acc + card.amount;
  }, 0);
  parseInt(yy);

  // total target amount
  let zz = cardDetails.reduce(function (acc, card) {
    return acc + card.target;
  }, 0);
  parseInt(zz);

  // date
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const d = new Date();
  let month = months[d.getMonth()];
  // Transaction table
  const rows = cardDetails.map((element) => (
    <tr key={element.id}>
      <td>{element.savingsType}</td>
      <td>{element.amount}</td>
      <td>{element.target}</td>
      <td>{element.expiration}</td>
    </tr>
  ));

  let uu = cardDetails.map((data) => data.amount);
  return (
    <section className="sidebar">
      {/*HOME SIDE BAR */}
      <main className="sidebar-container">
        <h1>Home</h1>
        <div className="sidebar-nav-container">
          <nav>
            <ul style={{ listStyle: "none" }}>
              <Link to="/">
                {" "}
                <li style={{ backgroundColor: "black", color: "white" }}>
                  <span>
                    <FaHome />
                  </span>
                  Home
                </li>
              </Link>
              <Link to="/WalletPage">
                <li>
                  <span>
                    <FaChartLine />
                  </span>
                  Wallet
                </li>
              </Link>
              <Link to="/TransactionPage">
                <li>
                  <span>
                    <FaChartBar />
                  </span>
                  Transactions
                </li>
              </Link>

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
        <h4>Wallet</h4>

        {/*card wallet container */}
        <div className="cardMap">
          {cardDetails.map((card) => (
            <div className="card" key={card.id}>
              <img src={card.cardImg} alt="" className="card-img" />
              <img src={card.bankName} alt="" className="bankName" />
              <h3 className="card-type">{card.savingsType}</h3>
              <p className="card-network">
                <IoIosWifi />
              </p>
              <h1 className="card-amount">₦{card.amount}</h1>
              <p className="card-number">{card.cardNumber}</p>
              <p className="card-expiration">{card.expiration}</p>
              <h5 className="card-cardHolder">{card.cardHolderName}</h5>
            </div>
          ))}
          <span className="add-wallet-icon-container">
            <HiPlus className="add-wallet-icon" />
          </span>
        </div>
        {/* end of card wallet  */}

        {/* Fund details container*/}
        <div className="homeLowerPart">
          <div className="stats-card">
            <div className="stats-card1">
              <FaMoneyCheck className="stats-card1-total-savings" />

              <div className="total-savings-details-con">
                <h4>Total Saving</h4>
                <sup>{cardDetails.length} Wallets</sup>
                <h1>₦ {(yy * d.getMonth()).toFixed(1)}</h1>
              </div>
            </div>
            <div className="stats-card2">
              <VscGraph className="stats-card2-icon" />
              <div className="stats-card2-details">
                <h4>{month}</h4>
                <sup>Savings:</sup>
                <h1 style={{ textAlign: "center" }}>₦ {186}</h1>
                <sub>Target: ₦{yy}</sub>
              </div>
            </div>
            <div className="stats-card3">
              <GrMoney className="stats-card2-icon" />

              <div className="total-savings-details-con">
                <h4>Investment</h4>
                <sup>Profits:</sup>
                <h1>₦ 500</h1>
                <div className="progress-range">
                  <div className="progress-range-figures">
                    <span className="progress-range-value">
                      {((yy * 100) / zz).toFixed(1)}%
                    </span>
                    <span> / ₦{zz}</span>
                  </div>

                  <Slider
                    defaultValue={((yy * 100) / zz).toFixed(1)}
                    size="sm"
                    thumbSize={1}
                  />
                </div>
              </div>
            </div>
            <div className="stats-card4">
              {" "}
              <MdMoney className="stats-card2-icon" />
              <div className="total-savings-details-con">
                <h4>Offers</h4>
              </div>
            </div>
          </div>
          {/* <div className="savings-stats">
            <div className="savings-heading">
              <div className="number-of-wallets">
                <h3>Total Savings</h3>
                <p>You have {cardDetails.length} wallets</p>
              </div>
              <div className="settings-icon">
                <MdOutlineMenuOpen />
              </div>
            </div>
            <div className="totalSavings">
              <h2> ${yy}</h2>
            </div>
            <div className="cardMa">
              {cardDetails.map((card) => (
                <SavingsCard key={card.id} {...card} />
              ))}
            </div>
          </div> */}
        </div>
        {/* <div className="home-chart">
          <Test />
          <div className="home-table">
            <h4>Actions</h4>
            <Table>
              <thead>
                <tr>
                  <th>savingsType</th>
                  <th>Amount</th>
                  <th>Target</th>
                  <th>Duration</th>
                </tr>
              </thead>
              <tbody>{rows}</tbody>
            </Table>
          </div>
        </div> */}
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
            thumbSize={1}
          />
        </div>
      </div>
    </>
  );
}

export default Home;
