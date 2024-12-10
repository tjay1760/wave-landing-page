import React from "react";
import founder from "../../assets/founder.jpg";
import freelancer from "../../assets/freelancer.jpg";
import consultant from "../../assets/consultant.jpg";
import contractor from "../../assets/contractor.jpg";
const details = [
  {
    occupation: "Freelancer",
    img: freelancer,
    msg: "Create and send professional invoices in minutes",
  },
  {
    occupation: "Small Medium Enterprises",
    img: founder,
    msg: "Pay your staff (and yourself!) with confidence.",
  },
  {
    occupation: "Consultants",
    img: consultant,
    msg: "Set up recurring invoices and payments for retainer clients.",
  },
  {
    occupation: "Contractors",
    img: contractor,
    msg: "Track your business expenses with our free accounting tools.",
  },
];
const GetStarted = () => {
  return (
    <div className="w-full min-h-0 bg-heroBackgroundColor flex flex-col text-center justify-center p-6 gap-2">
      <div className="sign-me font-bold text-2xl p-6 text-blue-950">
        Built for business Owners Just like you
      </div>
      <div className="details-holder grid grid-cols-2 gap-4 w-256 ml-28">
        {details.map((detail, index) => (
          <div key={index} className="border border-blue-200 justify-center shadow-lg rounded-lg overflow-hidden">
            <h1 className="name font-bold text-xl bg-blue-300 px-2"> {detail.occupation}</h1>
            <img className="h-48 w-full rounded-" src={detail.img} />
            <p className="font font-light px-2">{detail.msg}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetStarted;
