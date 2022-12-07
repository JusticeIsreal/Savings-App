import { useState, useRef, useContext } from "react";
import cardDetails from "../HomeComp/data";
import { useParams } from "react-router-dom";
import "./walletStyle.css";
import AppContext from "../../StateManagement/AppProvider";
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
        <div className="dynamic-con">
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
            <p className="card-expiration">{fullDetails.endDate}</p>
            <h5 className="card-cardHolder">{fullDetails.cardHolderName}</h5>
          </div>
          <div className="withdraw-delete-con">
            <button disabled>WITHDRAW</button>
            <button>DELETE</button>
          </div>
        </div>

        <div className="dynamic-card-details-con">
          <div className="dynamic-card-detail">
            <div>
              <h4>Saving</h4>
              <p>₦ 5,000.00</p>
            </div>
            <div>
              <h4>Frequency</h4>
              <p>Monthly</p>
            </div>
            <div>
              <h4>Total savings</h4>
              <p>₦ 20,000.00</p>
            </div>
            <div>
              <h4>Target</h4>
              <p>₦ 500,000.00</p>
            </div>
            {/* <div className="progress-range">
              <span className="progress-range-value">
                {((fullDetails.amount * 100) / fullDetails.target).toFixed(1)}%
              </span>
              <Slider className="progress"
                disabled
                defaultValue={(
                  (fullDetails.amount * 100) /
                  fullDetails.target
                ).toFixed(1)}
                size="sm"
                thumbSize={1}
              />
              <div className="progress-con">
                <div className="progress" style={{}}></div>
              </div>
            </div> */}
            <div>
              <h4>Start Date</h4>
              <p>{fullDetails.startDate}</p>
            </div>
            <div>
              <h4>End Date</h4>
              <p>{fullDetails.endDate}</p>
            </div>
            <div>
              <h4>Status</h4>
              <select>
                <option value="" key="">
                  Select
                </option>
                <option value="active" key="">
                  Active
                </option>
                <option value="onhold" key="">
                  on-hold
                </option>
              </select>
            </div>
            <div>
              <h4>Transaction</h4>
              <p>{fullDetails.transactionMethod}</p>
            </div>
          </div>
          <div className="dynmic-payment-method">
            <p>Payment method</p>
            <div className="atm-details-con">
              <span className="bank-card-icon">
                <FaCcVisa />
              </span>
              {fullDetails.transactionMethod} - 2345{" "}
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

export default DynamicWallet;
