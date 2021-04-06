import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { LOGOUT } from '../reducers/root-reducer';
import { useHistory } from "react-router-dom";
import {Link} from "react-router-dom";


const NavBar = (props) => {
  const history = useHistory();
  const skipBeforeAuth = history.location.pathname.slice(0,7)=='/users/'
  useEffect(()=>{
    if(props.logoutState) {
      window.location = '/'
    }
  })

  return(
    <div>
      {!skipBeforeAuth &&
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/" className="btn custom-button">
              Home
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Dropdown
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">Something else here</a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#">Disabled</a>
              </li>
            </ul>
            <button type="button" onClick={props.logout} className="btn btn-secondary">Log out</button>
          </div>
        </nav>
      }
  </div>
  );
};
const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(LOGOUT()),
  }
}
const mapStateToProps = (state) => {
  return {logoutState: state.logout}
}
export default connect(mapStateToProps,mapDispatchToProps)(NavBar)