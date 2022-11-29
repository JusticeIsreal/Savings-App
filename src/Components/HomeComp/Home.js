import { useState, useRef } from "react";
import cardDetails from "./data";
import { FaHome, FaChartLine, FaChartBar, FaMoneyCheck } from "react-icons/fa";
import {
  MdAccountBalance,
  MdContactSupport,
  MdOutlineMenuOpen,
  MdMoney,
  MdRadioButtonChecked,
} from "react-icons/md";
import { IoMdSettings, IoIosWifi } from "react-icons/io";
import { FcCancel } from "react-icons/fc";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiArrowUpSFill, RiArrowDownSFill } from "react-icons/ri";
import { AiFillEye } from "react-icons/ai";
import { GrMoney } from "react-icons/gr";
import { HiOutlineArrowsExpand, HiPlus } from "react-icons/hi";
import { VscGraph } from "react-icons/vsc";
import { Slider, RingProgress, Table, Text, Group } from "@mantine/core";
import "../compStyle.css";
import Test from "../WalletComponent/Test";
import { Link } from "react-router-dom";

// mantine ui for switch tab
import { Tabs } from "@mantine/core";

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

  // officia logo
  const logo =
    "https://res.cloudinary.com/isreal/image/upload/v1663199426/banking%20app/AJIS_FILE_1_arvnbd_dqrxio.png";

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
        <div className="logo-container">
          {/* <img src={logo} alt="logo" className="logo" /> */}
          <h3>Hello Justice</h3>
        </div>
        {/* <img src={logo} alt="logo" /> */}
        <div className="sidebar-nav-container">
          <nav>
            <ul style={{ listStyle: "none" }}>
              <Link to="/">
                <li
                  style={{
                    backgroundColor: "#009daf",
                    color: "#f1feff",
                  }}
                >
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
        
        <div className="total-wallet-container">
          <div>
            <h2 className="total-savings">
              Total savings <RiArrowDownSFill className="total-savings-icon" />
            </h2>
            <sup>You have {cardDetails.length} wallets</sup>
            <div className="total-savings-amount">
              <h1>₦ {(yy * d.getMonth()).toFixed(1)}</h1>
              <AiFillEye className="hide-total-savings-icon" />
            </div>
          </div>{" "}
          <div className="add-wallet-icon-container">
            <HiPlus className="add-wallet-icon" />
            <p>Create new wallet</p>
          </div>
        </div>
        {/*card wallet container */}
        <div className="card-slide-container">
          {" "}
          <div className="cardMap">
            {/* <div className="add-wallet-icon-container">
            <HiPlus className="add-wallet-icon" />
            <p>Create wallet</p>
          </div> */}
            {cardDetails.map((card) => (
              <div className="card" key={card.id}>
                <SavingsCard {...card} />
              </div>
            ))}
          </div>
          <div className="add-wallet-icon-container-tablet-below">
            <HiPlus className="add-wallet-icon-tablet-below" />
            <p>Create new wallet</p>
          </div>
        </div>

        {/* end of card wallet  */}

        {/* Fund details container*/}
        <div className="homeLowerPart">
          <Tabs
            color="cyan"
            variant="pills"
            radius="md"
            defaultValue="gallery"
            className="Tabs"
          >
            <Tabs.List className="overview-porfolio">
              <span>
                <Tabs.Tab value="gallery" className="overview">
                  Overview
                </Tabs.Tab>
              </span>
              <span>
                {" "}
                <Tabs.Tab value="messages" className="portfolio">
                  Portfolio
                </Tabs.Tab>
              </span>
            </Tabs.List>
            {/* <h2 className="Conceive-it-Achieve-it">
              Conceive it, Achieve it ...
            </h2> */}
            <Tabs.Panel value="gallery" pt="xs">
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
              </div>
            </Tabs.Panel>

            <Tabs.Panel value="messages" pt="xs">
              bbb
            </Tabs.Panel>
          </Tabs>
        </div>
      </div>
    </section>
  );
}

// Savings card component to create individual routing functionality
function SavingsCard({
  logo,
  walletName,
  amount,
  cardStatus,
  expirationDate,
  cardHolderName,
}) {
  return (
    <>
      <img src={logo} alt="" className="logo" />
      <h3 className="walletName">{walletName}</h3>
      <p className="card-status">
        {cardStatus !== "Active" ? "On-hold" : cardStatus}
        <MdRadioButtonChecked
          className={`${cardStatus === "Active" ? "active" : "on-hold"}`}
        />
        <FcCancel
          className={`${cardStatus === "Active" ? "on-hold" : "active"}`}
        />
      </p>
      <h1 className="card-amount">₦{amount}</h1>
      <p className="card-expiration">{expirationDate}</p>
      <h5 className="card-cardHolder">{cardHolderName}</h5>
    </>
  );
}

export default Home;
