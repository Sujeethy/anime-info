import React from "react";
import '../styles/NavBar.css';
import {Link} from "react-router-dom";
const NavBar = () => {
  return (
   
      <div style={{ display: 'flex', justifyContent: 'space-between',position: 'fixed', top: 0, left: 0, width: '100%', backgroundColor: '#000' }}>
        <img src="https://i.pcmag.com/imagery/reviews/05cItXL96l4LE9n02WfDR0h-5.fit_scale.size_760x427.v1582751026.png" alt="Netflix Logo" width="160" height="80" />
        <span>
          <span style={{ color: 'white', margin: "25px" }}>UNLIMITED TV SHOWS & MOVIES</span>

          <Link to="/login_in">
          <button className="join"  style={{ backgroundColor: "#e50914", border: 'none', color: 'white', width: '130px', height: "40px", borderRadius: "3px", margin: "20px", marginLeft: '15px' }}>JOIN NOW</button>
          </Link><button style={{ backgroundColor: "black", borderBlockColor:'white',border:"1px solid #888", color: 'white', width: '130px', height: "40px", borderRadius: "3px", margin: "20px", marginLeft: '5px' }}>SIGN IN</button>
        
        </span>
      </div>
    
  );
};

export default NavBar;
