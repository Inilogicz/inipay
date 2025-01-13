import React from 'react';
import "../SendMoney/SendMoney.css"
import mastercard from "../../assets/mastercard.png";
import profile from "../../assets/profile.jpg";
import ngflag from "../../assets/ng-flag.svg";
import usflag from "../../assets/us-flag.png";
import receiver from "../../assets/receiver.jpg";
import { Plus } from 'lucide-react';

const SendMoney = () => {
  return (
    <div className='send-money'>
      <h2 className="title">Send Money</h2>
      <div className="row balance">
        <div>
            <h1>$560,000,000</h1>
            <p><span className="success">+2.03% </span>($10,000,000)</p>
        </div>
        <button className="add-fund-btn">
            <img src={mastercard} className='icon' alt="" />
            Add  fund
        </button>
      </div>
      <div className="amount">
            <div className="row user">
                <div className="profile">
                    <img src={profile} alt="" />
                </div>
                <p className="muted">Enter the amount</p>
            </div>
            <div className="row price-input">
                <div className="currency">$</div>
                {/* currency */}
                <input type="text" className='currency' placeholder='0.00' />
                <div className="row">
                    <div className="profile">
                        <img src={ngflag} alt="" />
                    </div>
                    <div className="profile">
                        <img src={usflag} alt="" />
                    </div>
                </div>
            </div>
      </div>

        <div className="row receiver">
            <div className="profile">
                <img src={receiver} alt="" />
            </div>
            <h3 className="name">Khalid Busari</h3>
            <div className="rounded-icon-btn">
                <Plus/>
            </div>

        </div>
      <button className="btn btn-primary send-money-btn">Send Money</button>
    </div>
  );
}

export default SendMoney;
