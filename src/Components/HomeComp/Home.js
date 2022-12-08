import { useState, useRef, useContext } from "react";
import cardDetails from "./data";
import { FaHome, FaChartLine, FaChartBar, FaMoneyCheck } from "react-icons/fa";
import {
  MdAccountBalance,
  MdContactSupport,
  MdOutlineMenuOpen,
  MdMoney,
  MdRadioButtonChecked,
  MdLocalOffer,
} from "react-icons/md";
import { IoMdSettings, IoIosWifi } from "react-icons/io";
import { FcCancel } from "react-icons/fc";
import { SiDraugiemdotlv } from "react-icons/si";
import { GiCoins } from "react-icons/gi";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiArrowUpSFill, RiArrowDownSFill } from "react-icons/ri";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { GrMoney } from "react-icons/gr";
import { HiOutlineArrowsExpand, HiPlus } from "react-icons/hi";
import { VscGraph } from "react-icons/vsc";
import { Slider, RingProgress, Table, Text, Group } from "@mantine/core";
import "../compStyle.css";
import Test from "../WalletComponent/Test";

import { Link, useParams } from "react-router-dom";
import AppContext from "../../StateManagement/AppProvider";

// mantine ui for switch tab
import { Tabs } from "@mantine/core";

function Home() {
  // const { id } = useParams();
  const { seeTotalFunc, seeAmount, creatWallet, creatWalletModal } =
    useContext(AppContext);

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
  // Wallet total
  let numberOfMonths = months.indexOf(month) + 1;

  // total savings amount
  let yy = cardDetails.reduce(function (acc, card) {
    return acc + card.amount;
  }, 0);
  parseInt(yy);

  // Transaction table
  const rows = cardDetails.map((element) => (
    <tr key={element.id}>
      <td>{element.savingsType}</td>
      <td>{element.amount}</td>
      <td>{element.target}</td>
      <td>{element.endDate}</td>
    </tr>
  ));

  let uu = cardDetails.map((data) => data.amount);
  return (
    <section className="sidebar">
      {/*HOME SIDE BAR */}
      <main className="sidebar-container">
        <div className="logo-container">
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
        <div className="oo">
          <div className="total-wallet-container">
            <div className="total-wallet-div">
              <h2 className="total-savings">
                Total savings{" "}
                <RiArrowDownSFill className="total-savings-icon" />
              </h2>
              <sup>You have {cardDetails.length} wallets</sup>
              <div className="total-savings-amount">
                <h1>
                  ₦
                  {seeAmount
                    ? yy.toFixed(1)
                    : [yy.toFixed(1)].join("").split("").fill("x")}
                </h1>
                {seeAmount ? (
                  <AiFillEye
                    className="hide-total-savings-icon"
                    onClick={() => seeTotalFunc(!seeAmount)}
                  />
                ) : (
                  <AiFillEyeInvisible
                    className="hide-total-savings-icon"
                    onClick={() => seeTotalFunc(!seeAmount)}
                  />
                )}
              </div>
            </div>
          </div>
          {/*card wallet container */}
          <div className="card-slide-container">
            <div className="cardMap">
              <Link to="/CreateWalletPage">
                {" "}
                <div
                  className="add-wallet-icon-container"
                  onClick={() => creatWallet()}
                >
                  <HiPlus className="add-wallet-icon" />
                  <p>Create wallet</p>
                </div>
              </Link>

              {cardDetails.map((card) => (
                <SavingsCard className="main-card" key={card.id} {...card} />
                // <div className="main-card" key={card.id}>
                //   {" "}
                //   <div className="card" key={card.id}>
                //     <div className="front">
                //       <SavingsCard {...card} key={card.id} />
                //     </div>
                //     <div className="back">
                //       <CardBack {...card} />
                //     </div>
                //   </div>
                // </div>
              ))}
            </div>
            {/* <div className="add-wallet-icon-container-tablet-below">
            <HiPlus className="add-wallet-icon-tablet-below" />
            <p>Create new wallet</p>
          </div> */}
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
                  <FaChartBar className="stats-card1-investment-icon" />

                  <div className="total-savings-details-con">
                    <h3>
                      {month}
                      <br /> Savings:
                    </h3>
                    <sup> ₦ 10,000</sup>
                  </div>
                </div>

                <div className="stats-card1">
                  <GiCoins className="stats-card1-investment-icon" />

                  <div className="total-savings-details-con">
                    <h3>
                      Your <br /> Investments
                    </h3>
                    <sup>Profit:₦ 5,000</sup>
                  </div>
                </div>

                <div className="stats-card1">
                  <MdLocalOffer className="stats-card1-investment-icon" />

                  <div className="total-savings-details-con">
                    <h3>
                      Investments <br /> offers
                    </h3>
                    {/* <sup>Profit:₦ 5,000</sup> */}
                  </div>
                </div>
              </div>
            </Tabs.Panel>

            <Tabs.Panel value="messages" pt="xs">
              <div className="home-chart">
                <Test />
              </div>
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
  endDate,
  cardHolderName,
  id,
}) {
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
  // Wallet total
  let numberOfMonths = months.indexOf(month) + 1;

  const { seeAmount } = useContext(AppContext);
  return (
    <Link to={`/wall/${id}`}>
      <div className="main-card">
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
        <h1 className="card-amount">
          ₦{seeAmount ? amount : [amount].join("").split("").fill("x")}
        </h1>
        <p className="card-expiration">{endDate}</p>
        <h5 className="card-cardHolder">{cardHolderName}</h5>
      </div>
    </Link>
  );
}

function CardBack({
  logo,
  walletName,
  amount,
  cardStatus,
  endDate,
  cardHolderName,
}) {
  return (
    <>
      <h3>Hey vicki</h3>
      <p>What info do u suggest i put here</p>

      {/* <img src={logo} alt="" className="logo" />
      <h3 className="walletName">{walletName}</h3>
      <p className="card-status">
        {cardStatus !== "Active" ? "On-hold" : cardStatus}
        <MdRadioButtonChecked
          className={`${cardStatus === "Active" ? "active" : "on-hold"}`}
        />
        <FcCancel
          className={`${cardStatus === "Active" ? "on-hold" : "active"}`}
        />
      </p> */}
      {/* <h1 className="card-amount">
        <SiDraugiemdotlv />
      </h1> */}
      {/* <p className="card-expiration">{expirationDate}</p> */}
      {/* <h5 className="card-cardHolder">{cardHolderName}</h5> */}
    </>
  );
}

export default Home;
