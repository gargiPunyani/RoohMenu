import { useNavigate } from "react-router-dom";
import "../Menu/Menu.css";
import { Navbar } from "../Navbar";
import "./Home.css";

const Home = () => {
  const navigate= useNavigate()
  
  return (
    <div className="outerMost ">
      <div className="home textCenter">
        <div className="menubarImage objectFit relative mb20">
          <img
            className="homeImage borderRadius16 "
            src="https://res.cloudinary.com/dv5zj6fjm/image/upload/v1748002569/home_yjhuwo.jpg"
            alt="homeImage"
          />
        </div>
        <Navbar />
        <div className="homeBottom borderRadius12 ">
          <div className="homeHead uppercase primaryColor mt10">
            <h1>
              <p className="h3 lh14">Welcome </p>
              <p className="h5">Rooh The Roofyard Cafe</p>
            </h1>
          </div>
          <div className="homeMenu mt30">
            <div className="cuisineListItems borderRadius8 textCenter"onClick={()=>navigate("/menu?category=food")}>
              <div className="menuItemHead dFlex jBetween  cursorPointer aiCenter">
                <div className="cuisineHead uppercase h5 primaryColor">
                  <h3>Food</h3>
                </div>
                <div className="line dotedLine primaryColor"></div>
                <div className="dropdownIcon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="18px"
                    viewBox="0 -960 960 960"
                    width="18px"
                    fill="#EFE7D2"
                  >
                    <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="cuisineListItems borderRadius8 textCenter" onClick={()=>navigate("/menu?category=beverages")}>
              <div className="menuItemHead dFlex jBetween  cursorPointer aiCenter">
                <div className="cuisineHead uppercase h5 primaryColor">
                  <h3>Beverages</h3>
                </div>
                <div className="line dotedLine primaryColor"></div>
                <div className="dropdownIcon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="18px"
                    viewBox="0 -960 960 960"
                    width="18px"
                    fill="#EFE7D2"
                  >
                    <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
