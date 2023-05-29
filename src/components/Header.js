import "./Header.css";
const Header = () => {
  return (
    <div className="nav-bar">
      <div className="container">
        <div className="left-content">
          <div className="logo">
            <div className="edyoda">EDYODA</div>
          </div>
          <div className="courses">
            <div className="text3">Courses</div>
            <img
              className="icon-chevron-down"
              alt=""
              src="/icon-chevron-down.svg"
            />
          </div>
          <div className="courses">
            <div className="text3">Programs</div>
            <img
              className="icon-chevron-down"
              alt=""
              src="/icon-chevron-down.svg"
            />
          </div>
        </div>
        <div className="left-content">
          <img className="icon-chevron-down" alt="" src="/search-icon.svg" />
          <div className="log-in">
            <div className="text3">Log in</div>
          </div>
          <div className="primary-button1">
            <b className="text6">join now</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
