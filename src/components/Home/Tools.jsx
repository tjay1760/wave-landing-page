import React from "react";
import { useState } from "react";
import ToolsScroll from "./ToolsScroll";
import InvoicingImg from "../../assets/Dashboard_invoicing.png";
import PayrollImg from "../../assets/Dahboard_payroll.png";
import PaymentImg from "../../assets/Dashboard Payemets.png";
import AccountingImg from "../../assets/Dashboard_accounting.png";
import AdvisoryImg from "../../assets/Dashboard_advisory.png";
const toolsData = [
  {
    img: InvoicingImg,
    header: "Invoicing",
    sub: "Stop chasing clients for money",
    desc: "Reduce unpaid invoices, keep tabs on your income, and get paid faster.",
    link: "Learn more about our invoicing feature",
    route: "/invoicing",
  },
  {
    img: PaymentImg,
    header: "Payments",
    sub: "Get paid faster",
    desc: "Convenience is everything. Give your customers the option of paying with one click using a credit card, bank transfer, or Mpesa",
    link: "Learn more about online payments",
    route: "/payments",
  },
  {
    img: AccountingImg,
    header: "Accounting",
    sub: "Track your income & expenses, painlessly",
    desc: "Monitor your cash flow, stay organized, and stop sweating tax season. Say #sorrynotsorry to your spreadsheets and shoeboxes.",
    link: "Learn more about our accounting feature",
    route: "/accounting",
  },
  {
    img: PayrollImg,
    header: "Payroll",
    sub: "Pay your staff, and yourself, in minutes",
    desc: "Didn't go to school for payroll? No worries. We built our payroll tool for small business owners, so it is easy to use AND teaches you as you go.",
    link: "Learn more about our payroll feature",
    route: "/payroll",
  },
  {
    img: AdvisoryImg,
    header: "Advisors",
    sub: "Get by with a little 1:1 help",
    desc: "Our (non-judgmental) team of bookkeeping, accounting, and payroll experts is standing by to coach you—or do the work for you.Our (non-judgmental) team of bookkeeping, accounting, and payroll experts is standing by to coach you—or do the work for you.",
    link: "Learn more about wave advisors",
    route: "/advisory",
  },
];
const Tools = () => {
  const [data, setData] = useState(toolsData[0]);
  const [bgColor, setBgColor] = useState("bg-toolsBackgroundColor2");
  return (
    <div className="w-full min-h-0">
      <div className={`h-72 flex justify-center  ${bgColor}`}>
        <div className="content-wrapper flex flex-col items-center gap-3">
          <h1 className="text-5xl w-[38rem] text-center text-blue-950 pt-5">
            Our Tools Work Together so You Work Less.
          </h1>
          <div className="buttons mt-5 flex gap-4">
            <button
              onClick={() => {
                setData(toolsData[0]);
                setBgColor("bg-toolsBackgroundColor2")
              }}
              className="px-5 py-2 text-gray-900 rounded-3xl border-2  border-gray-900 hover:bg-gray-100 hover:border-gray-100 active:bg-gray-100"
            >
              Invoicing
            </button>
            <button
              onClick={() => {setData(toolsData[1]);                setBgColor("bg-toolsBackgroundColor3")}}
              className="px-5 py-2 text-gray-900 rounded-3xl border-2 border-gray-900 hover:bg-gray-100 hover:border-none"
            >
              Payments
            </button>
            <button
              onClick={() => {setData(toolsData[2]);                setBgColor("bg-toolsBackgroundColor4")}}
              className="px-5 py-2 text-gray-900 rounded-3xl border-2 border-gray-900 hover:bg-gray-100 hover:border-none"
            >
              Accounting
            </button>
            <button
              onClick={() => {setData(toolsData[3]);                setBgColor("bg-toolsBackgroundColor5")}}
              className="px-5 py-2 text-gray-900 rounded-3xl border-2 border-gray-900 hover:bg-gray-100 hover:border-none"
            >
              Payroll
            </button>
            <button
              onClick={() => {setData(toolsData[4]);                setBgColor("bg-toolsBackgroundColor7")}}
              className="px-5 py-2 text-gray-900 rounded-3xl border-2 border-gray-900 hover:bg-gray-100 hover:border-none"
            >
              Advisors
            </button>
          </div>
        </div>
      </div>
      <ToolsScroll data={data} color ={bgColor}/>
    </div>
  );
};

export default Tools;
