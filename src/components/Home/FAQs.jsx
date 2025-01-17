import React, { useState } from 'react';
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

const frequentQuestions = [
  {
    question: "Is Tuli Something I need to Install?",
    answer: "Tuli tools are web-based, so you just need an Internet connection and browser—no installation is necessary for our online software!",
  },
  {
    question: "What if I want to try Tuli to see if it works for my business?",
    answer: "Sign up for the Starter Plan to take the bookkeeping and invoicing basics for a spin. Then, whenever you’re ready, upgrade to the Pro Plan to unlock even more money management features.",
  },
  {
    question: "Is my data secure when I use Tuli?",
    answer: "Completely. Our servers are protected physically and electronically. Any connections between you, your bank accounts, and Wave are protected by 256-bit SSL encryption. Wave is a PCI-DSS Level 1 Service Provider.",
  },
];

const FAQs = () => {
  const [visibleIndex, setVisibleIndex] = useState(null);

  const toggleAnswer = (index) => {
    setVisibleIndex(visibleIndex === index ? null : index);
  };

  return (
    <div className="w-full h-lvh bg-toolsBackgroundColor1 p-4">
      <h1 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h1>
      <div className="questions flex flex-col items-center space-y-4">
        {frequentQuestions.map((item, index) => (
          <div
            key={index}
            className="w-full max-w-xl p-4 border border-gray-200 rounded-md bg-white shadow-md"
          >
            <button
              className="flex justify-between items-center w-full text-left font-bold text-lg"
              onClick={() => toggleAnswer(index)}
            >
              <span>{item.question}</span>
              {visibleIndex === index ? (
                <CiCircleMinus size={24} />
              ) : (
                <CiCirclePlus size={24} />
              )}
            </button>
            {visibleIndex === index && (
              <p className="mt-2 text-gray-700">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
