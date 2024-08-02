import React, { useState } from "react";
import "./HelpInfo.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const HelpInfo = () => {
  // State to manage active content
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle function
  const toggleContent = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Content data
  const contentData = [
    {
      question: "What information do I need to send money abroad?",
      answer: (
        <div className="dropdown-answer">
          <p className="dropdown-answer-text">
            You need to register with WorldRemit to send an international money
            transfer. You can do it on the website or access the WorldRemit app
            on your Android or iOS phone. We'll need the following details:
          </p>
          <ul className="dropdown-answer-list">
            <li>
              <strong>Personal details:</strong> Sign up with your full name,
              email address, mobile phone number, gender, birth date, and
              address.
            </li>
            <li>
              <strong>Transfer details:</strong> Choose the amount you want to
              send abroad, select how your receiver wants to get the money, and
              lastly, how you want to pay. You will always see our fees upfront,
              the final amount you will pay, and the exact amount your receiver
              will get.
            </li>
            <li>
              <strong>Receiver details:</strong> Based on the receive method, we
              need specific details of your receiver abroad. The receiver's full
              name, mobile number, and email address are always required to send
              money. Your receiver does not need to have a WorldRemit account.
            </li>
            <li>
              <strong>Payment details:</strong> You will need a bank account, a
              debit card, or a credit card to send money abroad.
            </li>
          </ul>
        </div>
      ),
    },
    {
      question:
        "What are the benefits of sending money online with WorldRemit?",
      answer: (
        <div className="dropdown-answer">
          <p className="dropdown-answer-text">
            Over 8 million customers use WorldRemit to send and receive money
            across the world. We offer up to four receive methods worldwide and
            are always fast, secure, and easy to use. Every transfer with us is
            covered by our stringent security checks. WorldRemit is authorised
            and regulated by the FCA in the United Kingdom.
          </p>
        </div>
      ),
    },
    {
      question:
        "What verification will I need to send an international transfer?",
      answer: (
        <div className="dropdown-answer">
          <p className="dropdown-answer-text">
            We'll verify your mobile phone number with an OTP. You may be
            required to provide ID proof and a selfie image to verify your
            identity. Identity verification takes up to 4 minutes at least 90%
            of the time. In case of a delay, we'll contact you instantly.
          </p>
        </div>
      ),
    },
    {
      question: "How much can I send abroad?",
      answer: (
        <div className="dropdown-answer">
          <p className="dropdown-answer-text">
            The amount you can send depends on the country you are sending money
            to. It may also vary depending on the receive method, as well as
            local regulations.
          </p>
        </div>
      ),
    },
    {
      question: "How long does an online transfer take?",
      answer: (
        <div className="dropdown-answer">
          <p className="dropdown-answer-text">
            In most cases, money transfers sent using WorldRemit will arrive
            within minutes. You will see the expected delivery time before you
            make a payment. We aim to complete transfers within the suggested
            time, but some transfers may take longer depending on the receive
            method.
          </p>
        </div>
      ),
    },
    {
      question: "How do I track my WorldRemit transfer?",
      answer: (
        <div className="dropdown-answer">
          <p className="dropdown-answer-text">
            After sending money back home, you can quickly start tracking it
            every step of the way. We'll send you a notification with all your
            transfer details instantly. You can also use the app to check on
            previous transfers. If you have sent money within the last hour,
            please wait for confirmation that it has arrived.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="help-info">
      <div className="help-info-text">
        {contentData.map((item, index) => (
          <div
            key={index}
            className={`help-info-content ${
              activeIndex === index ? "active" : ""
            }`}
          >
            <div
              className="help-info-header"
              onClick={() => toggleContent(index)}
            >
              <p>{item.question}</p>
              {activeIndex === index ? (
                <RemoveIcon className="icons visible wide" />
              ) : (
                <AddIcon className="icons visible wide" />
              )}
            </div>
            <div className="dropdown-contents">
              <div className="help-info-dropdown-content">{item.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HelpInfo;
