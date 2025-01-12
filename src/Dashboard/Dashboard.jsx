import React from 'react';
import "./Dashboard.css";
import Sidebar from "../components/Sidebar/Sidebar"
import Navbar from '../components/Navbar/Navbar';
import { useState } from 'react';
import SendMoney from '../components/SendMoney/SendMoney';
import VisaCard from '../components/VisaCard/VisaCard';
import QuickTransfer from '../components/QuickTransfer/QuickTransfer';
import Cashflow from '../components/CashFlow/Cashflow';
const Dashboard = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Sidebar open={open}/>
      <main>
        <Navbar onMenuClick={() =>setOpen(!open)}/>
      <section className="container">
        <div className="column">
          <VisaCard/>
          <SendMoney/>
          <QuickTransfer/>
          
        </div>
        <div className="column">
        <Cashflow/>
        </div>
      </section>

      </main>
    </>
  );

}

export default Dashboard;

