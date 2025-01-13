import React from "react";
import "./Transactions.css";
import profile from "../../assets/profile.jpg";
import paystack from "../../assets/paystack.png";
import paypal from "../../assets/paypal.png";
import flutterwave from "../../assets/flutterwave.jpg";

const transactions = [
  {
    status: 1,
    name: "John Doe",
    image: profile,
    email: "email@gmail.com",
    date: new Date().toLocaleDateString(),
    amount: "$2500",
  },
  {
    status: 2,
    name: "Sam Dev",
    image: paystack,
    email: "email2@gmail.com",
    date: new Date().toLocaleDateString(),
    amount: "$2000",
  },
  {
    status: 1,
    name: "Jerry Des",
    image: paypal,
    email: "email3@gmail.com",
    date: new Date().toLocaleDateString(),
    amount: "$1000",
  },
  {
    status: 0,
    name: "James Lor",
    image: flutterwave,
    email: "email4@gmail.com",
    date: new Date().toLocaleDateString(),
    amount: "$1000",
  },
];

const Transactions = () => {
  const shortenTextFormatter = (text, maxLength) =>
    text.length > maxLength ? "..." + text.slice(-maxLength) : text;

  return (
    <div className="transactions">
      <h2 className="title">Recent Transactions</h2>
      <table>
        <tbody>
          {transactions.map((data, index) => {
            let status =
              data.status === 1
                ? "Success"
                : data.status === 0
                ? "Failed"
                : "Processing";

            return (
              <tr key={index}>
                <td>
                  <div className="profile">
                    <img src={data.image} alt="Profile" />
                  </div>
                </td>
                <td title={data.name}>{data.name}</td>
                <td className="minimize">{data.date}</td>
                <td title={data.email}>{shortenTextFormatter(data.email, 11)}</td>
                <td>{status}</td>
                <td>{data.amount}</td>
                <td>
                    <div className={status}>
                        {status}
                    </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
