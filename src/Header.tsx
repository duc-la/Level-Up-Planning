import "./Header.css"
import AppLogo from "./images/process.png";
import Pfp from "./images/process.png";

export function Header() {
  return (
    <>
      <div className="header">
      <img className="image" src={AppLogo} alt="Background Logo"/>
        <div className="left">
          <img className="logo" src={AppLogo}/>          
          <p className="app-name">Planning</p>
        </div>

        {/*Take image from google account later*/}
        <div className="right">
          <img className="profile-pic" src={Pfp}/> 
        </div>
      </div>
    </>
  )
}