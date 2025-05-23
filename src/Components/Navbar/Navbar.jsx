import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    // <div>
    //   <div className="headerOuterMost absolute gap18 aiCenter borderRadius12 pointer">
    //     <div className="navbarOuter transition ">
    //       <div className="headerInner">
    //         <ul className="headerStart dFlex aiCenter jBetween">
    //           <li className="headerLogo ">
    //             <Link to={"/"}>
    //               <img src={logo} alt="logo" />
    //             </Link>
    //           </li>
    //           <li className="headerItem transition borderRadius12 primaryColor ">
    //             <Link className="link" to="/menu">
    //               Menu
    //             </Link>
    //           </li>
    //           {/* <li className="headerItem hideOnMobile transition borderRadius12 primaryColor h6">
    //             <Link className="link" to="/about">
    //               About
    //             </Link>
    //           </li> */}
    //           <li className="bookTable primaryColor overflow">
    //             <button className="bookTableBtn  transition primaryColor pointer borderRadius12 font14">
    //               <Link className="link bookTableButton" to="/reservation">
    //                 Book Table
    //               </Link>
    //             </button>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="NavbarOuter">
      <div className="Navbar">
        <div className="NavbarInner">
          <div className="NavbarLogo">
          <Link to={"/"}>
               <img src="https://res.cloudinary.com/dv5zj6fjm/image/upload/v1748002568/roohLogo_oufmvr.png" alt="logo" />
          </Link>
          </div>
          <div className="NavbarMenu">
          <Link className="link" to="/menu">
                     Menu
           </Link>
          </div>
          <div className="NavbarBUtton">
          <Link className="link bookTableButton" to="/reservation">
             Book Table
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
