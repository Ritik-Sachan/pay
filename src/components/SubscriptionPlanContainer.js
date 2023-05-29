import "./SubscriptionPlanContainer.css";
const SubscriptionPlanContainer = () => {
  return (
    <div className="input-container">
      <div className="text-field-1">
        <img className="radio-button-icon" alt="" src="/radio-button.svg" />
        <div className="text-container5">
          <div className="text12">{`12 Months Subscription `}</div>
          <div className="right-text-container">
            <div className="top-text">
              <div className="text13">Total</div>
              <div className="text14">₹99</div>
            </div>
            <div className="bottom-text">
              <div className="text15">₹8</div>
              <div className="text16">/mo</div>
            </div>
          </div>
        </div>
        <div className="tag">
          <div className="offer-expired">Offer expired</div>
        </div>
      </div>
      <div className="text-field-2">
        <img className="radio-button-icon" alt="" src="/radio-button1.svg" />
        <div className="text-container5">
          <div className="text12">{`12 Months Subscription `}</div>
          <div className="left-text-container">
            <div className="top-text">
              <div className="text18">Total</div>
              <div className="text14">₹179</div>
            </div>
            <div className="bottom-text">
              <div className="text15">₹15</div>
              <div className="text21">/mo</div>
            </div>
          </div>
        </div>
        <div className="tag1">
          <div className="offer-expired">Recommended</div>
        </div>
      </div>
      <div className="text-field-3">
        <img className="radio-button-icon2" alt="" src="/radio-button2.svg" />
        <div className="text-container7">
          <div className="text12">{`6 Months Subscription `}</div>
          <div className="left-text-container">
            <div className="top-text">
              <div className="text18">Total</div>
              <div className="text14">₹149</div>
            </div>
            <div className="bottom-text">
              <div className="text15">₹25</div>
              <div className="text21">/mo</div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-field-3">
        <img className="radio-button-icon2" alt="" src="/radio-button2.svg" />
        <div className="text-container7">
          <div className="text12">{`3 Months Subscription `}</div>
          <div className="left-text-container">
            <div className="top-text">
              <div className="text18">Total</div>
              <div className="text14">₹99</div>
            </div>
            <div className="bottom-text">
              <div className="text15">₹33</div>
              <div className="text21">/mo</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPlanContainer;
