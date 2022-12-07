import { useState, useRef, useContext } from "react";
import cardDetails from "../Components/HomeComp/data";
import { useParams } from "react-router-dom";
import "../Components/WalletComponent/walletStyle.css";
import AppContext from "../StateManagement/AppProvider";
import {
  FaHome,
  FaCcVisa,
  FaChartLine,
  FaChartBar,
  FaMoneyCheck,
} from "react-icons/fa";
import {
  MdAccountBalance,
  MdContactSupport,
  MdOutlineMenuOpen,
  MdMoney,
  MdRadioButtonChecked,
  MdKeyboardArrowRight,
  MdLocalOffer,
} from "react-icons/md";
import { IoMdSettings, IoIosWifi } from "react-icons/io";
import { FcCancel } from "react-icons/fc";
import { SiDraugiemdotlv } from "react-icons/si";
import { GiCoins } from "react-icons/gi";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiArrowUpSFill, RiArrowDownSFill } from "react-icons/ri";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { TiArrowBack } from "react-icons/ti";
import { GrMoney } from "react-icons/gr";
import { IoIosArrowBack } from "react-icons/io";
import { HiOutlineArrowsExpand, HiPlus } from "react-icons/hi";
import { VscGraph } from "react-icons/vsc";
import { Link, useNavigate } from "react-router-dom";
import { Menu, Button, Text, Slider } from "@mantine/core";

function CreateWalletPage() {
  // const { seeTotalFunc, seeAmount, creatWallet, creatWalletModal } =
  // useContext(AppContext);
  // back navigation
  const history = useNavigate();
  // official logo
  const logo =
    "https://res.cloudinary.com/isreal/image/upload/v1663199426/banking%20app/AJIS_FILE_1_arvnbd_dqrxio.png";

  // bank cardds accepted

  const acceptedCards =
    "https://res.cloudinary.com/isreal/image/upload/v1670407854/banking%20app/master_visa_verve_oakngi.png";
  // global context
  // const { seeTotalFunc, seeAmount } = useContext(AppContext);
  return (
    <div className="dynamic-wallet-main-container">
      <button className="go-back" onClick={() => history(-1)}>
        <IoIosArrowBack /> back
      </button>
      <h3 className="dynamic-waller-header">Provide new wallet details</h3>
      <div className="dynamic-wallet">
        <div className="dynamic-con">
          <div className="main-card">
            <img src={logo} alt="" className="logo" />
            <h3 className="walletName">Wallet name</h3>
            <p className="card-status">Card Status</p>
            <h1 className="card-amount">Amount</h1>
            <p className="card-expiration">Expiration Date</p>
            <h5 className="card-cardHolder">Card Holder Name</h5>
          </div>
        </div>

        <div className="dynamic-card-details-con">
          <div className="dynamic-card-detail">
            <form>
              <div className="input-con">
                <label>Wallet name</label>
                <input type="text" placeholder="New car ..." />
                <p>What should this wallet be called ?</p>
              </div>
              <div className="input-con">
                <label>Amount</label>
                <input type="number" placeholder="50,000 ..." />
                <p>How much would be saving ?</p>
              </div>
              <div className="input-con date">
                <div className="start-date">
                  <label>Start date</label>
                  <input type="date" />
                </div>
                <div className="end-date">
                  <label>End date</label>
                  <input type="date" />
                </div>
              </div>
              <div className="input-con date">
                <div className="start-date location">
                  <label>Location</label>
                  <input type="text" placeholder="Nigeria ..." />
                </div>
                <div className="end-date currency">
                  <label>Currency</label>
                  <select>
                    <option value="">Select</option>
                    <option value="naira">NRA</option>
                    <option value="usDollar">USD</option>
                    <option value="pound">GBP</option>
                    <option value="euro">EURO</option>
                  </select>
                </div>
              </div>
              <div className="input-con">
                <label>Payment method</label>
                <select>
                  <option value="automatic">Debitted authomatically</option>
                  <option value="manual">Manually authorization</option>
                </select>
                <p>How should this money be saved ?</p>
              </div>
            </form>
          </div>
          <div className="dynmic-payment-method">
            <img src={acceptedCards} alt="" className="accepted-cards" />
            <div className="atm-details-con">
              <span className="bank-card-icon">
                <FaCcVisa />
              </span>
              Access Bank - 2345{" "}
              <span className="change-bank-card">
                Change <MdKeyboardArrowRight />
              </span>
            </div>
          </div>
          <button className="save-wallet-btn">SAVE</button>
        </div>
      </div>
    </div>
  );
}

export default CreateWalletPage;
