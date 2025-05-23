import React from "react";
import { Navbar } from "../Navbar";
import { BookTableForm } from "./BookTableForm";
import "./reservation.css"

const Reservation = () => {
  return (
    <div className=" tableLeftOuter">
      <div className="tableOuterMost ">
        <div className="contactUsImage bookTableImage objectFit">
          <img className="borderRadius16 " src="https://res.cloudinary.com/dv5zj6fjm/image/upload/v1748002569/bookTable2_vemvqi.jpg" alt="bookTable" />
        </div>
        <Navbar />
        {/* <div className="bookHead uppercase letterSpace5 h1 absolute primaryColor">
          <h1>
            Book
            <br />A Table
          </h1>
        </div> */}
        <div>
        <BookTableForm/>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
