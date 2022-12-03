import { useState, useRef, useContext } from "react";
import cardDetails from "../HomeComp/data";
import { useParams } from "react-router-dom";
import "./walletStyle.css";
import AppContext from "../../StateManagement/AppProvider";
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
import { TiArrowBack } from "react-icons/ti";
import { GrMoney } from "react-icons/gr";
import { IoIosArrowBack } from "react-icons/io";
import { HiOutlineArrowsExpand, HiPlus } from "react-icons/hi";
import { VscGraph } from "react-icons/vsc";
import { Link, useNavigate } from "react-router-dom";

function DynamicWallet() {
  // back navigation
  const history = useNavigate();
  // dynamic routing
  const { id } = useParams();
  let fullDetails = cardDetails.find((item) => item.id === parseInt(id));

  // global context
  const { seeTotalFunc, seeAmount } = useContext(AppContext);
  return (
    <div className="dynamic-wallet-main-container">
      <button className="go-back" onClick={() => history(-1)}>
        <IoIosArrowBack /> back
      </button>
      <h3 className="dynamic-waller-header">Here is your Wallet details</h3>
      <div className="dynamic-wallet">
        <div className="main-card">
          <img src={fullDetails.logo} alt="" className="logo" />
          <h3 className="walletName">{fullDetails.walletName}</h3>
          <p className="card-status">
            {fullDetails.cardStatus !== "Active"
              ? "On-hold"
              : fullDetails.cardStatus}
            <MdRadioButtonChecked
              className={`${
                fullDetails.cardStatus === "Active" ? "active" : "on-hold"
              }`}
            />
            <FcCancel
              className={`${
                fullDetails.cardStatus === "Active" ? "on-hold" : "active"
              }`}
            />
          </p>
          <h1 className="card-amount">₦{fullDetails.amount}</h1>
          <p className="card-expiration">{fullDetails.expirationDate}</p>
          <h5 className="card-cardHolder">{fullDetails.cardHolderName}</h5>
        </div>
        <div className="dynamic-card-details">
          <div className="dynamic-card-detail">
            <div>
              <h4>Saving</h4>
              <p>5,000.00</p>
            </div>
            <div>
              <h4>Total savings</h4>
              <p>20,000.00</p>
            </div>
            <div>
              <h4>Target</h4>
              <p>500,000.00</p>
            </div>
            <div>
              <h4>Duration</h4>
              <p>1 year</p>
            </div>
            <div>Card Status</div>
          </div>
          <div className="dynmic-card-details">
            <div>Payment method</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DynamicWallet;
