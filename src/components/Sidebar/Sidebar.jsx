import "./Sidebar.css"
import React from 'react';
import Logo from '../Logo/Logo';
import profile from '../../assets/profile.jpg';
   
import { ChartColumnBig, HandHelping, LayoutDashboard, MessageCircle, MonitorDot, ScrollText, Settings, SunMoon, Wallet } from "lucide-react";

const Sidebar = ({open}) => {
  return (
    <aside className={`sidebar ${open && "open"}`}>
      <Logo/>
       <div className="tabs">
        <div className="tab active">
          <a href="#" className="items">
            <LayoutDashboard/>
            <h3>Dashboard</h3>
          </a>
        </div>
        <div className="tab">
          <a href="#" className="items">
            <MessageCircle/>
            <h3>Messages</h3>
            <div className="count">9+</div>
          </a>
        </div>
        <div className="tab">
          <a href="#" className="items">
            <ScrollText/>
            <h3>Invoices</h3>
          </a>
        </div>
        <div className="tab">
          <a href="#" className="items">
            <Wallet/>
            <h3>Wallet</h3>
          </a>
        </div>
        <div className="tab">
          <a href="#" className="items">
            <ChartColumnBig/>
            <h3>Analytics</h3>
          </a>
        </div>
        <div className="tab">
          <a href="#" className="items">
            <MonitorDot/>
            <h3>My Activity</h3>
          </a>
        </div>
        <div className="tab">
          <a href="#" className="items">
            <Settings/>
            <h3>Settings</h3>
          </a>
        </div>
      </div>
       <div className="bottom">
            <div className="items-tabs">
              <div className="items-tab">
                <HandHelping/>
                <h3>Get Help</h3>
              </div>
              <div className="items-tab">
                <SunMoon/>
                <h3>Theme</h3>
              </div>
            </div>
          
            <div className="user">
              <div className="profile">
                <img src={profile} alt="" />
              </div>
              <div className="details">
                <h4>John Ajala</h4>
                <p className="muted">user</p>
              </div>
            </div>
       </div>
    </aside>
  );
}

export default Sidebar;

