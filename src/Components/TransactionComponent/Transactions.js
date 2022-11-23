import { useState } from "react";
import cardDetails from "../HomeComp/data";
import { FaHome, FaChartLine, FaChartBar } from "react-icons/fa";
import { MdAccountBalance, MdContactSupport } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { Table } from "@mantine/core";
import "../compStyle.css";
import { Link } from "react-router-dom";

function Transactions() {
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
        <h1>Transactions</h1>
        <div className="sidebar-nav-container">
          <nav>
            <ul style={{ listStyle: "none" }}>
              <Link to="/">
                <li>
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
                <li style={{ backgroundColor: "black", color: "white" }}>
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
        <h4>Transactions</h4>

        {/* Fund details container*/}

        <div className="home-chart">
          <div className="home-table">
            <h4>Monthly</h4>
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
        </div>
      </div>
    </section>
  );
}

// Savings card component to create individual routing functionality

export default Transactions;
