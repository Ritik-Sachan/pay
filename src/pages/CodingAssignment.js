import Header from "../components/Header";
import ContainerLockup from "../components/ContainerLockup";
import SubscriptionPlanContainer from "../components/SubscriptionPlanContainer";
import SubscriptionFeeContainer from "../components/SubscriptionFeeContainer";
import "./CodingAssignment.css";
const CodingAssignment = () => {
  return (
    <div className="coding-assignment">
      <Header />
      <div className="content-container">
        <ContainerLockup />
        <div className="form">
          <div className="progress-bar">
            <div className="stage-1">
              <div className="icon-1">
                <div className="div">1</div>
              </div>
              <div className="text-1">Sign Up</div>
            </div>
            <div className="stage-1">
              <div className="icon-1">
                <div className="div">2</div>
              </div>
              <div className="text-1">Subscribe</div>
            </div>
          </div>
          <div className="form-header">
            <div className="text">Select your subcription plan</div>
          </div>
          <SubscriptionPlanContainer />
          <SubscriptionFeeContainer />
          <div className="button-container">
            <div className="secondary-button">
              <b className="text1">cancel</b>
            </div>
            <div className="primary-button">
              <b className="text1">proceed to pay</b>
            </div>
          </div>
          <div className="icon-container">
            <img className="razorpay-icon" alt="" src="/razorpay-icon@2x.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodingAssignment;
