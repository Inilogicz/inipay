import React from 'react';
import "./CashFlow.css";
import { Chart } from 'chart.js';
// import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
    plugins,
} from "chart.js";

// // Register required Chart.js components
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
);

import { Line } from 'react-chartjs-2';
import { ChartColumnStacked, TrendingUp } from 'lucide-react';

const Cashflow = () => {
    const getGradient  = (ctx, chartArea) =>{
        let gradient = ctx.createLinearGradient(
            0,
            chartArea.bottom,
            0,
            chartArea.top
        );
        gradient.addColorStop(0.9,"rgba(21,123,248,0.2)")
        gradient.addColorStop(0,"transparent");
        return gradient;
    };
    const config ={
        data: {
            labels: ["Mar", "Apr", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan"],
            datasets: [
                {
                    label: "Monthly Data",
                    data: [3, 2, 5, 4, 19, 12, 20, 17,  15, 21],
                    borderWidth: 2,
                    borderColor: "#157bf8",
                    tension: 0.8, 
                    fill: true,
                    backgroundColor:(context) => {
                        const chart = context.chart;
                        const {ctx,chartArea}= chart;
                        if(!chartArea) return;
                        return getGradient (ctx, chartArea);
                    }
                },

            ], 
        },
        options: {
           scale:{
            y:{beginAtZero:true}

           },
           plugins:{
            lengend: {
                display: false,
            },
           },
        },
    }; 
  return (
    <div className='cash-flow'>
        <div className="cash-flow-header">
            <h2 className="title">Cash Flow</h2>
            <div className="row round-btns">
                <div className="rounded-icon-btn">
                    <TrendingUp className='icon'/>
                </div>
                <div className="rounded-icon-btn btn-primary">
                    <ChartColumnStacked className='icon '/>
                </div>
            </div>
        </div>
        <div className="row trend-report">
            <div className="rounded-icon-btn btn-primary">
                <TrendingUp className='icon'/>
            </div>
            <h3>Savings</h3>
            <TrendingUp className='icon primary'/>
            <p className="success">+2.03%</p>
        </div>
        <Line data={config.data} options={config.options}/>
    </div>
  );
};


export default Cashflow;
