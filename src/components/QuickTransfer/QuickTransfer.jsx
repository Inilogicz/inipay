import React from 'react';
import "./QuickTransfer.css"
import ngflag from '../../assets/ng-flag.svg';
import usflag from '../../assets/us-flag.png';
import { HandCoins, ScrollText, Send,Group } from 'lucide-react';

// import profile from '../../assets/profile.jpg'

const QuickTransfer = () => {
  return (
    <div className='quick-transfer'>
      <h2 className="title">Quick Transfer</h2>
      <div className="row available-balance">
        <p className="muted"></p>
        <h1>$560,000,000</h1>
      </div>
      <div className="transfer-input">
             <p className="muted">Enter Amount</p>
            <div className="row">
                <p className="currency">$</p>
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
      <div className="row action-buttons">
            <div className="item">
                <div className="rounded-icon-btn">
                    <Send/>
                </div>
                <p className="muted">Send</p>
            </div>
            <div className="item">
                <div className="rounded-icon-btn">
                    <HandCoins/>
                </div>
                <p className="muted">Receive</p>
            </div>
            <div className="item">
                <div className="rounded-icon-btn">
                    <ScrollText/>
                </div>
                <p className="muted">Invoice</p>
            </div>
            <div className="item">
                <div className="rounded-icon-btn">
                    <Group/>
                </div>
                <p className="muted">more</p>
            </div>
      </div>
    </div>
  );
}

export default QuickTransfer;
