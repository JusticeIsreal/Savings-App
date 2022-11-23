import { useState } from "react";
import { Link } from "react-router-dom";
import cardDetails from "..//HomeComp/data";
import { FaHome, FaChartLine, FaChartBar, FaMoneyCheck } from "react-icons/fa";
import {
  MdAccountBalance,
  MdContactSupport,
  MdOutlineMenuOpen,
  MdMoney,
} from "react-icons/md";
import { IoMdSettings, IoIosWifi } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import { GrMoney } from "react-icons/gr";
import { HiOutlineArrowsExpand, HiPlus } from "react-icons/hi";
import { VscGraph } from "react-icons/vsc";
import { Slider, RingProgress, Table, Text, Group } from "@mantine/core";
import "../compStyle.css";
import Test from "../WalletComponent/Test";

function Wallet() {
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
        <h1>Wallet</h1>
        <div className="sidebar-nav-container">
          <nav>
            <ul style={{ listStyle: "none", color: "black" }}>
              <Link to="/">
                <li>
                  <span>
                    <FaHome />
                  </span>
                  Home
                </li>
              </Link>{" "}
              <Link to="/WalletPage">
                <li style={{ backgroundColor: "black", color: "white" }}>
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
        <div
          style={{
            position: "relative",
          }}
        >
          {" "}
          <h4>{cardDetails.length > 1 ? "Wallets" : "Wallet"}</h4>
          <h1
            style={{
              fontSize: "50px",
              position: "absolute",
              right: "0px",
              bottom: "-100%",
            }}
          >
            +
          </h1>
        </div>

        {/*card wallet container */}
        <div className="homeLowerPart">
          <div className="savings-stats">
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
              <h2> ₦ {(yy * d.getMonth()).toFixed(1)}</h2>
            </div>
            <div className="cardMa">
              {cardDetails.map((card) => (
                <SavingsCard key={card.id} {...card} />
              ))}
            </div>
          </div>
        </div>
        {/* end of card wallet  */}

        {/* Fund details container*/}

        <div className="home-chart">
          <Test />
          <div className="home-table">
            {/* <h4>Stats</h4> */}
            {/* <Table>
              <thead>
                <tr>
                  <th>savingsType</th>
                  <th>Amount</th>
                  <th>Target</th>
                  <th>Duration</th>
                </tr>
              </thead>
              <tbody>{rows}</tbody>
            </Table> */}
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
        <div className="open-savings-card">{/* <BsThreeDotsVertical /> */}</div>
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

export default Wallet;
