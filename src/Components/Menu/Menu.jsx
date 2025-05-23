import { useLocation } from "react-router-dom";
import { Navbar } from "../Navbar";
import "./Menu.css";
import MenuListItems from "./MenuItems/MenuListItems";

const Menu = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryParam = queryParams.get("category");
  return (
    <div className="outerMost ">
      <div className="menubarImage objectFit sticky ">
        {categoryParam === "beverages" ? (
          <img
            className="beverages borderRadius16 "
            src="https://res.cloudinary.com/dv5zj6fjm/image/upload/v1748002568/beverages2_bjxegj.webp"
            alt="menubar"
          />
        ) : (
          <img className="borderRadius16 " src="https://res.cloudinary.com/dv5zj6fjm/image/upload/v1748002569/MenuPage_nidqn1.webp" alt="menubar" />
        )}
      </div>
      <Navbar />
      {/* <div className="menuHead uppercase h1 absolute  primaryColor">
        <h1>
       {categoryParam === "beverages"
      ? "Beverages"
      : categoryParam === "food"
      ? "Food"
      : "Menu"}
      </h1>
      </div> */}
      <div className="menuListItemOuterMost mt10">
        <MenuListItems />
      </div>
    </div>
  );
};

export default Menu;
