import React from 'react';
import "./VisaCard.css";
import world from "../../assets/world.svg";
import chip from "../../assets/chip.png";
import visa from "../../assets/visa.png";
import pattern from "../../assets/partern.jpg";


const VisaCard = () => {
  return (
    <div className='visa-card'>
        <div className="visa-card-inner">
            <div className="front">
                <img src={world} className='map-img' alt="" />
                    <div className="row">
                        <img src={chip} alt="" className="icon" />
                        <img src={visa} alt="" className="icon" />
                    </div>
                    <div className="row card-no">
                        <p>5566</p>
                        <p>1235</p>
                        <p>9753</p>
                        <p>9897</p>
                    </div>
                    <div className="row card-holder">
                        <p>CARD HOLDER</p>
                        <p>VALID TILL</p>
                    </div>
                    <div className="row name">
                        <p>John Ajala</p>
                        <p>01/29</p>
                    </div>
            </div>
            <div className="back">
                    <img src={world} className='map-img' alt="" />
                    <div className="bar"></div>
                    <div className="row card-cvv">
                        <div>
                            <img src={pattern} alt="" />
                        </div>
                        <p>564</p>
                    </div>
                    <div className="row card-text">
                        <p>
                            Nowpay's virtual card enables secure, instant payment, giving you access to fund and seamless financial management
                        </p>
                    </div>
                    <div className="row signature">
                        <p>CUSTOMER SIGNATURE</p>
                        <img src={visa} className='icon' alt="" />
                    </div>
            </div>
        </div>
     
    </div>
  );
}

export default VisaCard;
